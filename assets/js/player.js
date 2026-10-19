/* ============================================================
   IELTS Trainer — sınav motoru (player)
   Bölüm bölüm test akışı: ses, pasaj, yazma, konuşma;
   cevap kağıdı, süre sayacı, vurgulama, otomatik kayıt/kurtarma.
   ============================================================ */
(function () {
  "use strict";
  var A = window.APP, D = window.APP_DATA;

  var testId = A.getParam("id");
  var test = A.resolveTest(testId);
  var stage = A.qs("#stage");
  var rail = A.qs("#rail");
  var timerEl = A.qs("#timer");

  if (!test || !(test.sections || []).length) {
    stage.innerHTML = '<div class="empty" style="margin-top:40px">' + A.esc(A.t("player.notFound")) + ' <a href="mock-tests.html" style="color:var(--blue700)">' + A.esc(A.t("player.backToTests")) + '</a></div>';
    A.qs(".player-top").style.display = "none";
    A.qs(".section-cta").style.display = "none";
    return;
  }

  var SECS = test.sections;
  var state = null;
  var timerHandle = null;
  var saveTimer = null;
  var currentQn = null;
  var submitted = false; // F1: gönderim sonrası kayıt kısa devre
  var wTaskIdx = 0;      // I4: yazma görevi sekme durumu (dil değişiminde korunur)
  var wTaskSec = -1;     // I4: sekme durumunun ait olduğu bölüm
  var rubricOpen = false;  // I4: rubrik paneli açık/kapalı (dil değişiminde korunur)
  var samplesOpen = false; // I5: örnek cevap paneli açık/kapalı

  /* ---------- yardımcılar ---------- */
  function aKey(secIdx, n) { return secIdx + "_" + n; }
  function flattenQs(sec) {
    var out = [];
    (sec.groups || []).forEach(function (g) { (g.qs || []).forEach(function (q) { out.push(q); }); });
    return out;
  }
  function hasQuestions(sec) { return !!(sec.groups && sec.groups.length); }
  function secAnswersAnswered(secIdx) {
    var sec = SECS[secIdx], total = 0, answered = 0;
    flattenQs(sec).forEach(function (q) { total++; if (state.answers[aKey(secIdx, q.n)]) answered++; });
    return { answered: answered, total: total };
  }
  function totalUnanswered() {
    var miss = 0;
    SECS.forEach(function (s, i) {
      if (!hasQuestions(s)) return;
      flattenQs(s).forEach(function (q) { if (!state.answers[aKey(i, q.n)]) miss++; });
    });
    return miss;
  }

  function freshState() {
    var st = { secIdx: 0, answers: {}, flags: {}, left: {}, writing: {}, highlights: {}, startedAt: Date.now(), doneSections: {} };
    SECS.forEach(function (s, i) {
      st.left[i] = (s.minutes || 20) * 60;
      if (s.kind === "writing") st.writing[i] = {};
    });
    return st;
  }
  /* M1: içerik tamamen boşsa ilerleme yazılmaz (hayalet "devam eden test" kutusunu önler) */
  function isEmptyState(st) {
    if (!st) return true;
    if (st.answers && Object.keys(st.answers).some(function (k) { return String(st.answers[k] == null ? "" : st.answers[k]).trim().length; })) return false;
    if (st.flags && Object.keys(st.flags).some(function (k) { return !!st.flags[k]; })) return false;
    if (st.highlights && Object.keys(st.highlights).some(function (k) { return (st.highlights[k] || []).length; })) return false;
    if (st.writing && Object.keys(st.writing).some(function (k) { var sec = st.writing[k] || {}; return Object.keys(sec).some(function (t) { return String(sec[t] || "").trim().length; }); })) return false;
    if (st.doneSections && Object.keys(st.doneSections).length) return false;
    return true;
  }
  function saveNow() {
    if (submitted || !state) return;
    if (isEmptyState(state)) { A.clearProgress(test.id); return; }
    A.saveProgress(test.id, state);
  }
  function saveSoon() { clearTimeout(saveTimer); saveTimer = setTimeout(saveNow, 350); }

  /* ---------- başlık & bölüm çipleri ---------- */
  function renderTitle() {
    A.qs("#playerTitle").innerHTML = A.esc(test.name) +
      '<small>' + A.esc(SECS.map(function (s) { return s.label; }).join(" · ") + " · " + test.emoji) + '</small>';
  }
  function renderChips() {
    A.qs("#secChips").innerHTML = SECS.map(function (s, i) {
      var cls = i === state.secIdx ? "now" : (state.doneSections[i] ? "done" : "");
      return '<button class="s-chip ' + cls + '" data-sec="' + i + '">' + A.esc(s.label) + "</button>";
    }).join("");
  }

  /* ---------- süre sayacı ---------- */
  function updateTimer() {
    var left = state.left[state.secIdx];
    timerEl.textContent = A.fmtClock(left);
    timerEl.classList.toggle("warn", left <= 300);
  }
  function startTimer() {
    clearInterval(timerHandle);
    updateTimer();
    timerHandle = setInterval(function () {
      state.left[state.secIdx]--;
      if (state.left[state.secIdx] <= 0) {
        state.left[state.secIdx] = 0;
        updateTimer();
        saveNow();
        A.toast(A.t("player.timeUp"));
        nextSection(true);
        return;
      }
      updateTimer();
      if (state.left[state.secIdx] % 10 === 0) saveSoon();
    }, 1000);
  }

  /* ---------- cevap kağıdı ---------- */
  function renderRail() {
    var sec = SECS[state.secIdx];
    if (!hasQuestions(sec)) { rail.classList.add("hidden"); return; }
    rail.classList.remove("hidden");
    var qs = flattenQs(sec);
    A.qs("#qGrid").innerHTML = qs.map(function (q) {
      var key = aKey(state.secIdx, q.n);
      var cls = "q-btn";
      if (state.answers[key]) cls += " answered";
      if (state.flags[key]) cls += " flagged";
      if (currentQn === q.n) cls += " current";
      return '<button class="' + cls + '" data-jump="' + q.n + '">' + q.n + "</button>";
    }).join("");
    var c = secAnswersAnswered(state.secIdx);
    A.qs("#railProgress").textContent = c.answered + " / " + c.total;
  }

  /* M2: bayrak butonu olmayan bölümlerde legend'deki "İşaretli/Flagged" öğesini gizle */
  function syncRailLegend() {
    var item = A.qs(".rail-legend [data-i18n='player.legendFlag']");
    var wrap = item && item.parentElement;
    if (!wrap) return;
    wrap.style.display = A.qs(".flag-btn", stage) ? "" : "none";
  }

  /* ---------- metin vurgulama ---------- */
  function getHl(secIdx) { if (!state.highlights) state.highlights = {}; if (!state.highlights[secIdx]) state.highlights[secIdx] = []; return state.highlights[secIdx]; }
  function applyHighlights(secIdx) {
    var list = getHl(secIdx);
    if (!list.length) return;
    var texts = A.qsa(".ptext", stage);
    list.forEach(function (str) {
      for (var i = 0; i < texts.length; i++) {
        var el = texts[i];
        var idx = el.textContent.indexOf(str);
        if (idx < 0) continue;
        var node = findTextNode(el, idx);
        if (!node) continue;
        var offset = idx - textOffset(el, node);
        var before = node.splitText(offset);
        var after = before.splitText(str.length);
        var mark = document.createElement("mark");
        mark.className = "hl";
        before.parentNode.insertBefore(mark, before);
        mark.appendChild(before);
        break;
      }
    });
  }
  function textOffset(root, node) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var total = 0, cur;
    while ((cur = walker.nextNode())) { if (cur === node) return total; total += cur.textContent.length; }
    return 0;
  }
  function findTextNode(root, charIdx) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var total = 0, cur;
    while ((cur = walker.nextNode())) {
      if (charIdx < total + cur.textContent.length) return cur;
      total += cur.textContent.length;
    }
    return null;
  }
  function clearHighlights() {
    state.highlights = state.highlights || {};
    state.highlights[state.secIdx] = [];
    A.qsa("mark.hl", stage).forEach(function (m) {
      var parent = m.parentNode;
      while (m.firstChild) parent.insertBefore(m.firstChild, m);
      parent.removeChild(m);
      parent.normalize();
    });
    saveSoon();
  }

  /* ---------- ortak soru parçaları ---------- */
  function flagBtn(secIdx, n) {
    var on = state.flags[aKey(secIdx, n)] ? " on" : "";
    return '<button class="flag-btn' + on + '" data-flag="' + n + '" title="' + A.esc(A.t("player.flag")) + '">' + A.ICONS.flag + "</button>";
  }
  function qnumHtml(n) { return '<span class="qnum">' + n + "</span>"; }

  function renderQGroup(sec, g, secIdx) {
    var html = '<div class="qgroup"><h3>' + A.esc(g.title) + '</h3><p class="instr">' + A.esc(g.instr) + '</p>';
    g.qs.forEach(function (q) {
      var key = aKey(secIdx, q.n);
      var val = state.answers[key] || "";
      html += '<div class="qitem" id="anchor-' + secIdx + "-" + q.n + '">';
      html += '<div class="qhead">' + qnumHtml(q.n) + '<div class="qtext">';
      if (g.type === "tfng") {
        html += A.esc(q.text);
        html += '</div>' + flagBtn(secIdx, q.n) + "</div>";
        html += '<div class="tfng">';
        ["TRUE", "FALSE", "NOT GIVEN"].forEach(function (opt) {
          var checked = val.toUpperCase() === opt;
          html += '<label class="opt' + (checked ? " sel" : "") + '"><input type="radio" name="q-' + secIdx + "-" + q.n + '" data-qn="' + q.n + '" value="' + opt + '"' + (checked ? " checked" : "") + "> " + opt + "</label>";
        });
        html += "</div>";
      } else if (g.type === "mcq") {
        html += A.esc(q.text);
        html += '</div>' + flagBtn(secIdx, q.n) + "</div>";
        html += '<div class="opts">';
        Object.keys(q.options).forEach(function (letter) {
          var checked = val === letter;
          html += '<label class="opt' + (checked ? " sel" : "") + '"><input type="radio" name="q-' + secIdx + "-" + q.n + '" data-qn="' + q.n + '" value="' + letter + '"' + (checked ? " checked" : "") + "> <b>" + letter + "</b>&nbsp; " + A.esc(q.options[letter]) + "</label>";
        });
        html += "</div>";
      } else {
        html += renderGapText(q.text, q.n, val);
        html += '</div>' + flagBtn(secIdx, q.n) + "</div>";
      }
      html += "</div>";
    });
    html += "</div>";
    return html;
  }
  function renderGapText(text, n, val) {
    var parts = String(text).split("{{" + n + "}}");
    if (parts.length === 1) {
      return A.esc(text) + ' <input class="gap-input" data-qn="' + n + '" value="' + A.esc(val) + '" autocomplete="off" spellcheck="false">';
    }
    return A.esc(parts[0]) + '<input class="gap-input" data-qn="' + n + '" value="' + A.esc(val) + '" autocomplete="off" spellcheck="false">' + A.esc(parts.slice(1).join(""));
  }

  /* ---------- bölüm görünümleri ---------- */
  function renderListening(s) {
    var secIdx = state.secIdx;
    var html = '<div style="display:flex;flex-direction:column;gap:16px;max-width:880px">';
    html += '<div class="audio-card">';
    html += '<div class="b3m">' + A.esc(s.title) + "</div>";
    html += '<div class="c1r g600">' + A.esc(s.intro) + "</div>";
    html += '<audio controls preload="metadata" src="' + s.audio + '"></audio>';
    html += '<div class="flex items-center justify-between wrap gap8"><div class="note-strip">' + A.ICONS.clock + " " + A.esc(s.subtitle) + "</div>";
    html += '<button class="btn btn-ghost btn-sm" id="btnTranscript">' + A.esc(A.t("player.transcript")) + "</button></div>";
    html += '<div id="transcriptBox" class="hidden" style="white-space:pre-wrap;font-size:.875rem;line-height:1.85;color:var(--gray600);background:var(--gray50);border-radius:12px;padding:14px 16px">' + A.esc(s.transcript || "") + "</div>";
    html += "</div>";

    (s.groups || []).forEach(function (g) {
      html += '<div class="qgroup"><h3>' + A.esc(g.title) + '</h3><p class="instr">' + A.esc(g.instr) + "</p>";
      g.lines.forEach(function (line) {
        if (!line) { html += '<div style="height:8px"></div>'; return; }
        if (/^[A-Z0-9 &—–'()\-]{6,}$/.test(line)) {
          html += '<div class="b4m" style="margin:14px 0 2px;letter-spacing:.02em">' + A.esc(line) + "</div>";
          return;
        }
        var n = null;
        line.replace(/\{\{(\d+)\}\}/g, function (m, d) { n = d; return m; });
        var anchor = n ? ' id="anchor-' + secIdx + "-" + n + '"' : "";
        var body = line.replace(/\{\{(\d+)\}\}/g, function (m, d) {
          var key = aKey(secIdx, parseInt(d, 10));
          return '<input class="gap-input" data-qn="' + d + '" value="' + A.esc(state.answers[key] || "") + '" autocomplete="off" spellcheck="false">';
        });
        html += '<div class="b3r"' + anchor + ' style="padding:6px 0;line-height:2">' + body + "</div>";
      });
      html += "</div>";
    });
    html += "</div>";
    stage.innerHTML = html;
  }

  function barChartSVG(chart) {
    var w = 640, h = 300, padL = 46, padB = 56, padT = 18;
    var maxV = 0;
    chart.bars.forEach(function (b) { maxV = Math.max(maxV, b.a, b.b); });
    var top = Math.ceil(maxV / 10) * 10;
    var innerW = w - padL - 16, innerH = h - padB - padT;
    var n = chart.bars.length;
    var groupW = innerW / n;
    var barW = Math.min(30, groupW * 0.26);
    var svg = '<svg viewBox="0 0 ' + w + " " + h + '" style="width:100%;max-width:640px;height:auto;display:block;margin:14px auto 4px" role="img">';
    [0, 0.25, 0.5, 0.75, 1].forEach(function (t) {
      var y = padT + innerH * (1 - t);
      svg += '<line x1="' + padL + '" y1="' + y + '" x2="' + (w - 16) + '" y2="' + y + '" stroke="#E8EAED" stroke-width="1"/>';
      svg += '<text x="' + (padL - 8) + '" y="' + (y + 4) + '" text-anchor="end" font-size="11" fill="#8A8C91">' + Math.round(top * t) + "</text>";
    });
    chart.bars.forEach(function (b, i) {
      var gx = padL + groupW * i + groupW / 2;
      var ha = innerH * (b.a / top), hb = innerH * (b.b / top);
      svg += '<rect x="' + (gx - barW - 6) + '" y="' + (padT + innerH - ha) + '" width="' + barW + '" height="' + ha + '" rx="4" fill="#B8BCC0"/>';
      svg += '<rect x="' + (gx + 6) + '" y="' + (padT + innerH - hb) + '" width="' + barW + '" height="' + hb + '" rx="4" fill="#175FFC"/>';
      svg += '<text x="' + (gx - barW / 2 - 6) + '" y="' + (padT + innerH - ha - 5) + '" text-anchor="middle" font-size="11" fill="#5B5C61">' + b.a + "</text>";
      svg += '<text x="' + (gx + barW / 2 + 6) + '" y="' + (padT + innerH - hb - 5) + '" text-anchor="middle" font-size="11" fill="#114AC6">' + b.b + "</text>";
      svg += '<text x="' + gx + '" y="' + (h - padB + 18) + '" text-anchor="middle" font-size="11.5" fill="#222">' + A.esc(b.label) + "</text>";
    });
    svg += '<rect x="' + (padL + 6) + '" y="' + (h - 18) + '" width="10" height="10" rx="2" fill="#B8BCC0"/>';
    svg += '<text x="' + (padL + 20) + '" y="' + (h - 10) + '" font-size="11" fill="#5B5C61">' + A.esc(chart.years[0]) + "</text>";
    svg += '<rect x="' + (padL + 70) + '" y="' + (h - 18) + '" width="10" height="10" rx="2" fill="#175FFC"/>';
    svg += '<text x="' + (padL + 84) + '" y="' + (h - 10) + '" font-size="11" fill="#5B5C61">' + A.esc(chart.years[1]) + "</text>";
    svg += "</svg>";
    return svg;
  }

  function renderReading(s) {
    var secIdx = state.secIdx;
    var html = '<div class="reading-panes">';
    html += '<div class="passage-pane"><h1>' + A.esc(s.passageTitle) + "</h1>";
    html += '<div class="flex gap8 wrap" style="margin-bottom:10px">' +
      '<button class="btn btn-ghost btn-sm" id="btnHl">' + A.esc(A.t("player.highlight")) + "</button>" +
      '<button class="btn btn-ghost btn-sm" id="btnHlClear">' + A.esc(A.t("player.clearHl")) + "</button>" +
      "</div>";
    (s.paras || []).forEach(function (p) {
      html += '<p data-para="' + p.tag + '"><span class="para-tag">' + p.tag + "</span> <span class=\"ptext\">" + A.esc(p.text) + "</span></p>";
    });
    html += "</div>";
    html += '<div class="question-pane" id="qPane">';
    (s.groups || []).forEach(function (g) { html += renderQGroup(s, g, secIdx); });
    html += "</div></div>";
    stage.innerHTML = html;
    applyHighlights(secIdx);
  }

  function renderWriting(s) {
    var secIdx = state.secIdx;
    var html = '<div style="display:flex;flex-direction:column;gap:16px;max-width:900px">';
    html += '<div class="writing-tabs" id="wTabs">';
    s.tasks.forEach(function (tk, i) {
      html += '<button class="wt' + (i === wTaskIdx ? " on" : "") + '" data-wt="' + i + '">' + A.esc(tk.label) + " · " + tk.minutes + " " + A.t("common.min") + "</button>";
    });
    html += "</div>";
    html += '<div id="wView"></div>';
    if (s.extraPrompts) {
      html += '<div class="card card-pad mt16"><h3 class="st4d" style="margin:0 0 10px">' + A.esc(A.t("player.morePrompts")) + '</h3>';
      Object.keys(s.extraPrompts).forEach(function (k) {
        html += '<div class="b4m" style="margin:12px 0 6px;color:var(--gray600)">' + (k === "t1" ? "Task 1" : "Task 2") + "</div>";
        s.extraPrompts[k].forEach(function (p, i) {
          html += '<div class="b3r" style="padding:6px 0;border-bottom:1px solid var(--gray100);color:var(--gray700)">' + (i + 1) + ". " + A.esc(p) + "</div>";
        });
      });
      html += "</div>";
    }
    /* I4: öz kontrol rubriği — editörün altında katlanabilir panel (içerik İngilizce, etiketler TR/EN) */
    if (D.EXTRA_WRITING && D.EXTRA_WRITING.rubric) {
      var rb = D.EXTRA_WRITING.rubric;
      html += '<details class="fold-panel" id="rubricPanel"' + (rubricOpen ? " open" : "") + ">";
      html += '<summary class="b4m">' + A.esc(A.t("player.rubricTitle")) + "</summary>";
      html += '<div class="fold-body">';
      html += '<div class="b3m" style="margin:0 0 4px">' + A.esc(rb.title) + "</div>";
      html += '<p class="b3r g600" style="margin:0 0 14px">' + A.esc(rb.intro) + "</p>";
      html += '<div class="rubric-grid">';
      rb.criteria.forEach(function (c) {
        html += '<div class="rubric-crit">';
        html += '<div class="b3m" style="font-weight:700;margin:0 0 4px">' + A.esc(c.name) + "</div>";
        html += '<p class="b3r g600" style="margin:0 0 10px">' + A.esc(c.what) + "</p>";
        html += '<div class="rc-band b6"><b class="b4m">' + A.esc(A.t("player.band6")) + '</b><p class="b3r g600">' + A.esc(c.band6) + "</p></div>";
        html += '<div class="rc-band b7"><b class="b4m">' + A.esc(A.t("player.band7")) + '</b><p class="b3r g600">' + A.esc(c.band7) + "</p></div>";
        html += '<ul class="b3r g600 rc-checks">';
        (c.checks || []).forEach(function (ch) { html += "<li>" + A.esc(ch) + "</li>"; });
        html += "</ul></div>";
      });
      html += "</div>";
      if (rb.quick && rb.quick.length) {
        html += '<div class="rubric-quick"><b class="b3m">' + A.esc(A.t("player.rubricQuick")) + '</b><ul class="b3r g600">';
        rb.quick.forEach(function (qk) { html += "<li>" + A.esc(qk) + "</li>"; });
        html += "</ul></div>";
      }
      html += "</div></details>";
    }
    html += "</div>";
    stage.innerHTML = html;
    renderWritingTask(s, wTaskIdx);
    var panel = A.qs("#rubricPanel", stage);
    if (panel) panel.addEventListener("toggle", function () { rubricOpen = panel.open; });
  }

  function renderWritingTask(s, idx) {
    var secIdx = state.secIdx;
    var tk = s.tasks[idx];
    var box = A.qs("#wView", stage);
    var saved = (state.writing[secIdx] || {})[tk.id] || "";
    var html = '<div class="prompt-card">';
    html += '<div class="flex items-center justify-between wrap gap8"><span class="pt">' + A.esc(tk.label) + "</span>";
    html += '<span class="chip chip-gray">' + tk.minutes + " " + A.t("common.min") + " · " + A.t("player.minWords", { n: tk.minWords }) + "</span></div>";
    html += '<p class="b1r" style="margin:10px 0 4px">' + A.esc(tk.prompt) + "</p>";
    if (tk.chart) {
      html += '<div class="b3m" style="text-align:center;color:var(--gray600);margin-top:8px">' + A.esc(tk.chart.caption) + "</div>";
      html += barChartSVG(tk.chart);
    }
    html += '<details style="margin:12px 0"><summary class="b4m" style="cursor:pointer;color:var(--blue700)">' + A.esc(A.t("player.tipsTitle")) + '</summary>';
    html += '<ul class="b3r g600" style="margin:10px 0 0;padding-left:20px;line-height:1.8">';
    tk.tips.forEach(function (tp) { html += "<li>" + A.esc(tp) + "</li>"; });
    html += "</ul></details>";
    html += '<textarea class="writing-area" data-writing="' + tk.id + '" placeholder="Write your answer here…">' + A.esc(saved) + "</textarea>";
    var wc = saved.trim() ? saved.trim().split(/\s+/).length : 0;
    html += '<div class="wc"><span id="wcCount">' + wc + " " + A.esc(A.t("player.wordCount")) + '</span><span class="' + (wc >= tk.minWords ? "chip chip-green" : "chip chip-gray") + '">' + A.t("player.minWords", { n: tk.minWords }) + "</span></div>";
    html += "</div>";
    box.innerHTML = html;

    var ta = A.qs("textarea", box);
    ta && ta.addEventListener("input", function () {
      var v = ta.value;
      state.writing[secIdx] = state.writing[secIdx] || {};
      state.writing[secIdx][tk.id] = v;
      var words = v.trim() ? v.trim().split(/\s+/).length : 0;
      A.qs("#wcCount", box).textContent = words + " " + A.t("player.wordCount");
      var badge = A.qs(".wc .chip", box);
      badge.className = words >= tk.minWords ? "chip chip-green" : "chip chip-gray";
      saveSoon();
    });
  }

  function renderSpeaking(s) {
    var html = '<div style="display:flex;flex-direction:column;gap:16px;max-width:900px">';
    (s.parts || []).forEach(function (p) {
      html += '<div class="sp-card">';
      html += '<div class="flex items-center justify-between wrap gap8"><b class="at1b">' + A.esc(p.name) + "</b>";
      if (p.part === 2) html += '<span class="chip chip-amber">' + A.esc(A.t("player.speakTime")) + '</span>';
      html += "</div>";
      html += '<p class="b3r g600" style="margin:6px 0 10px">' + A.esc(p.intro) + "</p>";
      if (p.part === 2 && p.cue) {
        html += '<div class="card card-pad" style="background:var(--gray50);border:0"><b class="b3m">' + A.esc(p.cue) + "</b>";
        html += '<div class="b4m" style="margin:8px 0 4px;color:var(--gray600)">' + A.esc(A.t("player.youShouldSay")) + '</div><ul class="b3r g700" style="margin:0;padding-left:20px;line-height:1.9">';
        (p.bullets || []).forEach(function (b) { html += "<li>" + A.esc(b) + "</li>"; });
        html += "</ul></div>";
        html += '<div class="sp-timers"><button class="btn btn-black btn-sm" data-sp="prep">' + A.esc(A.t("player.prepTimer")) + '</button><button class="btn btn-blue btn-sm" data-sp="talk">' + A.esc(A.t("player.talkTimer")) + '</button><span class="sp-timer" id="spTimer">1:00</span></div>';
        if (p.sampleStructure) {
          html += '<details style="margin-top:12px"><summary class="b4m" style="cursor:pointer;color:var(--blue700)">' + A.esc(A.t("player.sampleStructure")) + '</summary><p class="b3r g600" style="margin:8px 0 0">' + A.esc(p.sampleStructure) + "</p></details>";
        }
      } else {
        html += '<ol class="b3r" style="margin:0;padding-left:20px;line-height:2">';
        (p.qs || []).forEach(function (q) { html += "<li>" + A.esc(q) + "</li>"; });
        html += "</ol>";
      }
      html += "</div>";
    });
    html += '<div class="card card-pad"><b class="at1b">' + A.esc(A.t("player.cueBank")) + '</b><p class="c1r g500" style="margin:4px 0 10px">' + A.esc(A.t("player.selfCheck")) + "</p>";
    html += '<div class="b3r" style="line-height:2">';
    (s.extraCueCards || []).forEach(function (c, i) { html += "<div style='padding:6px 0;border-bottom:1px solid var(--gray100)'>" + (i + 1) + ". " + A.esc(c) + "</div>"; });
    html += "</div></div>";
    /* I5: örnek cevaplar (band 6 vs 7) + kontrol listesi — katlanabilir panel */
    if (D.EXTRA_SPEAKING && D.EXTRA_SPEAKING.samples) {
      var sp = D.EXTRA_SPEAKING;
      html += '<details class="fold-panel" id="samplesPanel"' + (samplesOpen ? " open" : "") + ">";
      html += '<summary class="b4m">' + A.esc(A.t("player.samplesTitle")) + "</summary>";
      html += '<div class="fold-body">';
      sp.samples.forEach(function (sm, i) {
        html += '<div class="smp">';
        html += '<div class="b3m" style="font-weight:600;margin:0 0 10px">' + (i + 1) + ". " + A.esc(sm.q) + "</div>";
        html += '<div class="smp-band b6"><b class="b4m">' + A.esc(A.t("player.band6")) + '</b><p class="b3r g600">' + A.esc(sm.band6) + "</p></div>";
        html += '<div class="smp-band b7"><b class="b4m">' + A.esc(A.t("player.band7")) + '</b><p class="b3r g600">' + A.esc(sm.band7) + "</p></div>";
        html += '<p class="b3r g600 smp-why"><b>' + A.esc(A.t("player.whyBetter")) + "</b> " + A.esc(sm.why) + "</p>";
        html += "</div>";
      });
      html += '<div class="smp-checklist"><b class="b3m">' + A.esc(A.t("player.checklistTitle")) + '</b><ul class="b3r g600">';
      (sp.checklist || []).forEach(function (c) { html += "<li>" + A.esc(c) + "</li>"; });
      html += "</ul></div>";
      html += "</div></details>";
    }
    html += "</div>";
    stage.innerHTML = html;
    var spPanel = A.qs("#samplesPanel", stage);
    if (spPanel) spPanel.addEventListener("toggle", function () { samplesOpen = spPanel.open; });
  }

  /* ---------- bölüm geçişleri ---------- */
  function renderStage() {
    var s = SECS[state.secIdx];
    currentQn = null;
    /* I4: yazma bölümüne (yeniden) girildiğinde görev sekmesi 1'e döner; dil değişiminde korunur */
    if (s.kind === "writing" && state.secIdx !== wTaskSec) { wTaskIdx = 0; rubricOpen = false; wTaskSec = state.secIdx; }
    if (s.kind === "listening") renderListening(s);
    else if (s.kind === "reading") renderReading(s);
    else if (s.kind === "writing") renderWriting(s);
    else if (s.kind === "speaking") renderSpeaking(s);
    renderRail();
    updateNavButtons();
    A.applyI18n(stage);
    var secChips = A.qs("#secChips");
    if (secChips) A.applyI18n(secChips);
    syncRailLegend();
  }

  function updateNavButtons() {
    var prev = A.qs("#btnPrev"), next = A.qs("#btnNext");
    prev.classList.toggle("hidden", state.secIdx === 0);
    next.textContent = state.secIdx === SECS.length - 1 ? A.t("player.submit") : A.t("player.next");
  }

  function enter(idx) {
    state.doneSections[state.secIdx] = true;
    state.secIdx = Math.max(0, Math.min(SECS.length - 1, idx));
    renderChips();
    renderStage();
    startTimer();
    saveSoon();
    window.scrollTo(0, 0);
  }

  function nextSection(auto) {
    if (state.secIdx < SECS.length - 1) enter(state.secIdx + 1);
    else submitFlow();
  }

  /* ---------- gönderim ---------- */
  function submitFlow() {
    var miss = totalUnanswered();
    if (miss > 0) {
      A.modal({
        title: A.t("common.confirm"),
        text: A.t("player.incomplete") + " (" + miss + ")",
        cancelText: A.t("common.cancel"),
        okText: A.t("common.confirm"),
        onOk: doSubmit
      });
    } else {
      A.modal({
        title: A.t("common.confirm"),
        text: A.t("player.confirmSubmit"),
        cancelText: A.t("common.cancel"),
        okText: A.t("player.submit"),
        onOk: doSubmit
      });
    }
  }

  function doSubmit() {
    var attempt = {
      id: Date.now(),
      testId: test.id,
      testName: test.isMock ? (test.cardName + " · Mock Test") : test.name,
      date: new Date().toISOString(),
      durationSec: Math.round((Date.now() - state.startedAt) / 1000),
      sections: [],
      overall: null
    };
    SECS.forEach(function (s, i) {
      if (hasQuestions(s)) {
        var qs = flattenQs(s);
        var correct = 0;
        var ans = {};
        qs.forEach(function (q) {
          var u = state.answers[aKey(i, q.n)] || "";
          ans[q.n] = u;
          if (A.checkAnswer(u, q)) correct++;
        });
        attempt.sections.push({
          key: s.id, type: s.kind, label: s.label || s.kind,
          correct: correct, total: qs.length, band: A.rawToBand(correct, qs.length),
          scored: true, answers: ans
        });
      } else if (s.kind === "writing") {
        attempt.sections.push({ key: s.id, type: "writing", label: s.label, scored: false, texts: state.writing[i] || {} });
      } else {
        attempt.sections.push({ key: s.id, type: "speaking", label: s.label, scored: false });
      }
    });
    var scoredBands = attempt.sections.filter(function (x) { return x.scored; }).map(function (x) { return x.band; });
    attempt.overall = A.overallBand(scoredBands);
    submitted = true;
    A.saveAttempt(attempt);
    A.clearProgress(test.id);
    clearInterval(timerHandle);
    location.href = "result.html?attempt=" + attempt.id;
  }

  /* ---------- olay dinleyicileri ---------- */
  function bindEvents() {
    /* I3: test sayfası TR/EN anahtarı — app.js setLang mekanizmasını kullanır */
    var lt = A.qs("#langToggle");
    if (lt) {
      var paintLt = function () { A.qsa("button", lt).forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-lang") === A.getLang()); }); };
      lt.addEventListener("click", function (e) {
        var b = e.target.closest("button[data-lang]");
        if (!b) return;
        A.setLang(b.getAttribute("data-lang"));
        paintLt();
      });
      paintLt();
    }
    A.qs("#secChips").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-sec]");
      if (b) enter(parseInt(b.getAttribute("data-sec"), 10));
    });
    A.qs("#btnNext").addEventListener("click", function () { nextSection(); });
    A.qs("#btnPrev").addEventListener("click", function () { enter(state.secIdx - 1); });
    A.qs("#btnSubmitTop").addEventListener("click", submitFlow);

    stage.addEventListener("input", function (e) {
      var t = e.target;
      if (t.classList.contains("gap-input")) {
        var n = t.getAttribute("data-qn");
        state.answers[aKey(state.secIdx, n)] = t.value;
        currentQn = parseInt(n, 10);
        renderRail();
        saveSoon();
      }
    });
    stage.addEventListener("change", function (e) {
      var t = e.target;
      if (t.matches('input[type="radio"][data-qn]')) {
        var n = t.getAttribute("data-qn");
        state.answers[aKey(state.secIdx, n)] = t.value;
        currentQn = parseInt(n, 10);
        var group = t.closest(".opts, .tfng");
        if (group) A.qsa(".opt", group).forEach(function (lb) { lb.classList.toggle("sel", lb.contains(t)); });
        renderRail();
        saveSoon();
      }
    });
    stage.addEventListener("focusin", function (e) {
      var n = e.target.getAttribute && e.target.getAttribute("data-qn");
      if (n) { currentQn = parseInt(n, 10); renderRail(); }
    });
    stage.addEventListener("click", function (e) {
      var f = e.target.closest("[data-flag]");
      if (f) {
        var n = f.getAttribute("data-flag");
        var key = aKey(state.secIdx, n);
        state.flags[key] = !state.flags[key];
        f.classList.toggle("on", !!state.flags[key]);
        renderRail();
        saveSoon();
        return;
      }
      var jump = e.target.closest("[data-jump]");
      if (jump) {
        var qn = jump.getAttribute("data-jump");
        var anchor = A.qs("#anchor-" + state.secIdx + "-" + qn);
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          currentQn = parseInt(qn, 10);
          renderRail();
        }
        return;
      }
      var tr = e.target.closest("#btnTranscript");
      if (tr) {
        var box = A.qs("#transcriptBox", stage);
        var hidden = box.classList.toggle("hidden");
        tr.textContent = hidden ? A.t("player.transcript") : A.t("player.hideTranscript");
        return;
      }
      if (e.target.closest("#btnHl")) {
        var sel = window.getSelection();
        if (sel && !sel.isCollapsed) {
          var pEl = sel.anchorNode && (sel.anchorNode.nodeType === 3 ? sel.anchorNode.parentElement : sel.anchorNode);
          if (pEl && pEl.closest("#stage .passage-pane")) {
            var txt = sel.toString().trim();
            if (txt.length > 1) {
              var arr = getHl(state.secIdx);
              arr.push(txt);
              try {
                var range = sel.getRangeAt(0);
                var mark = document.createElement("mark");
                mark.className = "hl";
                mark.appendChild(range.extractContents());
                range.insertNode(mark);
              } catch (err) { }
              saveSoon();
            }
          }
        }
        return;
      }
      if (e.target.closest("#btnHlClear")) { clearHighlights(); return; }
      var wt = e.target.closest("[data-wt]");
      if (wt) {
        wTaskIdx = parseInt(wt.getAttribute("data-wt"), 10);
        A.qsa("[data-wt]").forEach(function (b) { b.classList.toggle("on", b === wt); });
        renderWritingTask(SECS[state.secIdx], wTaskIdx);
        return;
      }
      var sp = e.target.closest("[data-sp]");
      if (sp) {
        var timerOut = A.qs("#spTimer");
        if (!timerOut) return;
        var seconds = sp.getAttribute("data-sp") === "prep" ? 60 : 120;
        if (sp._h) clearInterval(sp._h);
        timerOut.textContent = A.fmtClock(seconds);
        sp._h = setInterval(function () {
          seconds--;
          timerOut.textContent = A.fmtClock(Math.max(0, seconds));
          if (seconds <= 0) clearInterval(sp._h);
        }, 1000);
        return;
      }
    });
    window.addEventListener("beforeunload", saveNow);
    document.addEventListener("langchange", function () {
      renderTitle();
      /* Oturum henüz kurulmadıysa (ör. "Devam etmek ister misin?" modalı
         açıkken dil değiştirilirse) state'e dokunma — çökme önleyici. */
      var ov = document.querySelector(".overlay");
      if (ov) A.applyI18n(ov);
      if (!state) return;
      renderChips();
      updateNavButtons();
      renderStage();
    });
  }

  /* ---------- başlat ---------- */
  function start() {
    renderTitle();
    var saved = A.loadProgress(test.id);
    /* M1: mock-tests kutusu ile aynı içerik kuralı — boş durum "devam edilebilir" sayılmaz */
    function hasResumable(sv) { return !!sv && !isEmptyState(sv); }
    var resume = function (useSaved) {
      if (useSaved && saved) {
        state = saved;
        SECS.forEach(function (s, i) {
          if (typeof state.left[i] !== "number") state.left[i] = (s.minutes || 20) * 60;
          if (s.kind === "writing" && !state.writing[i]) state.writing[i] = {};
        });
        if (!state.answers) state.answers = {};
        if (!state.flags) state.flags = {};
        if (!state.highlights) state.highlights = {};
        if (!state.doneSections) state.doneSections = {};
        if (typeof state.secIdx !== "number") state.secIdx = 0;
      } else {
        state = freshState();
        if (saved) A.clearProgress(test.id);
      }
      renderChips();
      renderStage();
      startTimer();
    };
    if (hasResumable(saved)) {
      A.modal({
        title: A.t("player.resumeTitle"),
        text: A.t("player.resumeText"),
        cancelText: A.t("player.restartBtn"),
        okText: A.t("player.resumeBtn"),
        onOk: function () { resume(true); },
        onCancel: function () { resume(false); }
      });
    } else {
      resume(false);
    }
    bindEvents();
  }

  document.addEventListener("DOMContentLoaded", start);
})();
