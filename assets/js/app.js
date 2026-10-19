/* ============================================================
   IELTS Trainer — çekirdek uygulama katmanı
   Kabuk (header + ikon menü + footer), dil değiştirme, depolama
   yardımcıları, band hesaplama, modal/toast.
   ============================================================ */
(function () {
  "use strict";

  var LS = {
    lang: "it_lang",
    attempts: "it_attempts",
    testDate: "it_testdate",
    plan: "it_plan_checks",
    started: "it_started",
    progressPrefix: "it_progress_"
  };

  /* ---------- kısa yardımcılar ---------- */
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function getParam(name) { return new URLSearchParams(location.search).get(name); }
  function todayISO() { var d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function fmtDate(iso, withTime) {
    if (!iso) return "—";
    var d = new Date(iso);
    var lang = getLang() === "tr" ? "tr-TR" : "en-GB";
    var opts = { year: "numeric", month: "short", day: "numeric" };
    if (withTime) { opts.hour = "2-digit"; opts.minute = "2-digit"; }
    return d.toLocaleDateString(lang, opts);
  }
  function fmtClock(sec) {
    sec = Math.max(0, Math.round(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }
  function readJSON(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function writeJSON(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { } }

  /* ---------- i18n ---------- */
  function getLang() { return localStorage.getItem(LS.lang) || "tr"; }
  function t(key, vars) {
    var dict = (window.I18N && (window.I18N[getLang()] || window.I18N.en)) || {};
    var fallback = (window.I18N && window.I18N.en) || {};
    var s = dict[key] != null ? dict[key] : (fallback[key] != null ? fallback[key] : key);
    if (vars) { Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(vars[k]); }); }
    return s;
  }
  function applyI18n(root) {
    qsa("[data-i18n]", root).forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    qsa("[data-i18n-html]", root).forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    qsa("[data-i18n-ph]", root).forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    document.documentElement.lang = getLang();
  }
  function setLang(lang) {
    localStorage.setItem(LS.lang, lang);
    applyI18n(document);
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  /* ---------- ikonlar ---------- */
  var ICONS = {
    home: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 10.5 12 3.5l8.5 7"/><path d="M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5"/></svg>',
    study: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="m9.5 15.5 1.8 1.8 3.7-3.8"/></svg>',
    mock: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="3"/><path d="M9 4.5h6"/><path d="m9 13 2 2 4.5-4.5"/></svg>',
    practice: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10 5 7 4.5 4 4.5v13.5c3 0 6 .5 8 2 2-1.5 5-2 8-2V4.5c-3 0-6 .5-8 2z"/><path d="M12 6.5V20"/></svg>',
    records: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20.5h16"/><path d="M7 17v-5M12 17V8M17 17v-8"/></svg>',
    play: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l10.5-6.5z"/></svg>',
    pause: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="7" y="5.5" width="3.4" height="13" rx="1"/><rect x="13.6" y="5.5" width="3.4" height="13" rx="1"/></svg>',
    flag: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 21V4"/><path d="M5.5 4.5h11l-2.2 3.8 2.2 3.7h-11"/></svg>',
    check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7"/></svg>',
    chev: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    clock: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg>',
    bolt: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4.5 13.5H11L9.5 22 18 10.5h-6.5z"/></svg>'
  };

  /* ---------- uygulama kabuğu ---------- */
  var NAV_ITEMS = [
    { id: "home", href: "index.html" },
    { id: "study", href: "study-center.html" },
    { id: "mock", href: "mock-tests.html" },
    { id: "practice", href: "practice.html" },
    { id: "records", href: "records.html" }
  ];

  function renderShell() {
    var page = document.body.getAttribute("data-page") || "";
    var hdr = qs("#hdr");
    if (hdr) {
      hdr.innerHTML = '<div class="container header-inner">' +
        '<a class="logo" href="index.html">IELTS&nbsp;<b>Trainer</b></a>' +
        '<div class="header-right">' +
        '<div class="lang-toggle" role="group" aria-label="Language">' +
        '<button type="button" data-lang="tr">TR</button><button type="button" data-lang="en">EN</button>' +
        '</div></div></div>';
      var toggle = qs(".lang-toggle", hdr);
      function paintToggle() { qsa("button", toggle).forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-lang") === getLang()); }); }
      toggle.addEventListener("click", function (e) {
        var b = e.target.closest("button[data-lang]"); if (!b) return;
        setLang(b.getAttribute("data-lang")); paintToggle();
      });
      paintToggle();
      window.addEventListener("scroll", function () { hdr.classList.toggle("scrolled", window.scrollY > 4); }, { passive: true });
    }

    var navEl = qs("#nav");
    if (navEl) {
      var navActive = page === "test" ? "mock" : page;
      navEl.innerHTML = '<ul>' + NAV_ITEMS.map(function (item) {
        var active = item.id === navActive ? " active" : "";
        return '<li><a class="nav-item' + active + '" href="' + item.href + '">' +
          '<span class="nav-ico">' + (ICONS[item.id] || "") + '</span>' +
          '<span class="nav-label">' + t("nav." + item.id) + '</span></a></li>';
      }).join("") + '</ul>';
    }

    var ft = qs("#footer");
    if (ft) {
      ft.innerHTML = '<div class="container"><p data-i18n="footer.disclaimer" style="margin:0 0 6px"></p><p data-i18n="footer.line" style="margin:0"></p></div>';
    }
    applyI18n(document);

    document.addEventListener("langchange", function () {
      if (navEl) qsa(".nav-label", navEl).forEach(function (el, i) { el.textContent = t("nav." + NAV_ITEMS[i].id); });
    });

    // ilk ziyaret kaydı (plan günü hesabı için)
    if (!localStorage.getItem(LS.started)) localStorage.setItem(LS.started, todayISO());
  }

  /* ---------- modal & toast ---------- */
  function modal(opts) {
    opts = opts || {};
    var wrap = document.createElement("div");
    wrap.className = "overlay";
    wrap.innerHTML = '<div class="modal" role="dialog" aria-modal="true">' +
      '<h3>' + esc(opts.title || "") + '</h3>' +
      (opts.text ? '<p>' + esc(opts.text) + '</p>' : "") +
      '<div class="actions">' +
      (opts.cancelText ? '<button type="button" class="btn btn-ghost" data-act="cancel">' + esc(opts.cancelText) + '</button>' : "") +
      '<button type="button" class="btn ' + (opts.danger ? "btn-red" : "btn-blue") + '" data-act="ok">' + esc(opts.okText || "OK") + '</button>' +
      '</div></div>';
    document.body.appendChild(wrap);
    function close() { wrap.remove(); }
    wrap.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-act]"); if (!btn) return;
      if (btn.getAttribute("data-act") === "ok") { close(); if (opts.onOk) opts.onOk(); }
      else { close(); if (opts.onCancel) opts.onCancel(); }
    });
    var okBtn = qs('button[data-act="ok"]', wrap); if (okBtn) okBtn.focus();
    return { close: close };
  }
  function toast(msg) {
    var wrap = qs("#toasts");
    if (!wrap) { wrap = document.createElement("div"); wrap.id = "toasts"; wrap.className = "toast-wrap"; document.body.appendChild(wrap); }
    var el = document.createElement("div"); el.className = "toast"; el.textContent = msg;
    wrap.appendChild(el);
    setTimeout(function () { el.style.transition = "opacity .3s"; el.style.opacity = "0"; setTimeout(function () { el.remove(); }, 320); }, 2200);
  }

  /* ---------- test çözümleme (data.js köprüsü) ---------- */
  function resolveTest(id) {
    var D = window.APP_DATA || {};
    if (D.SECTIONS && D.SECTIONS[id]) {
      var s = D.SECTIONS[id];
      return { id: id, isMock: false, name: s.title, emoji: s.emoji || "📄", color: "#F7F9FB", sections: [s] };
    }
    var m = (D.MOCKS || []).find(function (x) { return x.id === id; });
    if (m) {
      return {
        id: id, isMock: true, name: m.name + " · Mock Test",
        cardName: m.name, emoji: m.emoji, color: m.color,
        sections: (m.sections || []).map(function (sid) { return D.SECTIONS[sid]; }).filter(Boolean)
      };
    }
    return null;
  }

  /* ---------- cevap karşılaştırma ---------- */
  function normAns(s) {
    return String(s == null ? "" : s).toLowerCase()
      .replace(/[.,!?;:"'“”‘’()£$€]/g, " ")
      .replace(/\s+/g, " ").trim();
  }
  function checkAnswer(user, q) {
    var u = normAns(user);
    if (!u) return false;
    var list = q.answer || [];
    if (typeof list === "string") list = [list];
    return list.some(function (a) {
      var n = normAns(a);
      if (n === u) return true;
      // "8" ~ "8 pm", "10" ~ "10 a.m." gibi son ekler (normAns nokta/apostrofu boşluğa çevirir → normalize biçimler)
      var uCore = u.replace(/\b(a m|p m|am|pm|o clock|oclock|pounds?)\b/g, "").replace(/\s+/g, " ").trim();
      var nCore = n.replace(/\b(a m|p m|am|pm|o clock|oclock|pounds?)\b/g, "").replace(/\s+/g, " ").trim();
      return uCore && uCore === nCore;
    });
  }

  /* ---------- band tablosu ---------- */
  var BAND_TABLE = [ /* [minCorrect(of 40), band] sıralı */
    [39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [11, 4], [8, 3.5], [6, 3], [4, 2.5], [3, 2], [2, 1.5], [1, 1], [0, 0]
  ];
  function rawToBand(correct, total) {
    if (!total) return 0;
    var scaled = Math.round(correct / total * 40);
    for (var i = 0; i < BAND_TABLE.length; i++) { if (scaled >= BAND_TABLE[i][0]) return BAND_TABLE[i][1]; }
    return 0;
  }
  function overallBand(bands) {
    if (!bands.length) return null;
    var avg = bands.reduce(function (a, b) { return a + b; }, 0) / bands.length;
    return Math.round(avg * 2) / 2;
  }

  /* ---------- kayıtlar (attempts) ---------- */
  function getAttempts() { return readJSON(LS.attempts, []); }
  function getAttempt(id) { return getAttempts().find(function (a) { return String(a.id) === String(id); }) || null; }
  function saveAttempt(a) {
    var all = getAttempts();
    all.unshift(a);
    if (all.length > 200) all = all.slice(0, 200);
    writeJSON(LS.attempts, all);
    return a;
  }
  function clearAttempts() { localStorage.removeItem(LS.attempts); }

  /* ---------- devam eden test durumu ---------- */
  function saveProgress(testId, state) { writeJSON(LS.progressPrefix + testId, state); }
  function loadProgress(testId) { return readJSON(LS.progressPrefix + testId, null); }
  function clearProgress(testId) { localStorage.removeItem(LS.progressPrefix + testId); }
  function allProgressIds() {
    var ids = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf(LS.progressPrefix) === 0) ids.push(k.slice(LS.progressPrefix.length));
    }
    return ids;
  }

  /* ---------- plan işaretleri ---------- */
  function getPlanChecks() { return new Set(readJSON(LS.plan, [])); }
  function togglePlanCheck(id, on) {
    var s = getPlanChecks();
    if (on == null) { s.has(id) ? s.delete(id) : s.add(id); } else { on ? s.add(id) : s.delete(id); }
    writeJSON(LS.plan, Array.from(s));
    return s.has(id);
  }

  /* ---------- sınav tarihi ---------- */
  function getTestDate() { return localStorage.getItem(LS.testDate) || ""; }
  function saveTestDate(v) { v ? localStorage.setItem(LS.testDate, v) : localStorage.removeItem(LS.testDate); }
  function daysUntil(iso) {
    if (!iso) return null;
    var d = new Date(iso + "T09:00:00");
    var now = new Date();
    var a = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((d - a) / 86400000);
  }

  /* ---------- dışa açılan API ---------- */
  window.APP = {
    ICONS: ICONS, LS: LS, NAV_ITEMS: NAV_ITEMS,
    qs: qs, qsa: qsa, esc: esc, getParam: getParam, todayISO: todayISO, fmtDate: fmtDate, fmtClock: fmtClock,
    getLang: getLang, t: t, applyI18n: applyI18n, setLang: setLang,
    modal: modal, toast: toast,
    resolveTest: resolveTest, checkAnswer: checkAnswer, normAns: normAns,
    rawToBand: rawToBand, overallBand: overallBand,
    getAttempts: getAttempts, getAttempt: getAttempt, saveAttempt: saveAttempt, clearAttempts: clearAttempts,
    saveProgress: saveProgress, loadProgress: loadProgress, clearProgress: clearProgress, allProgressIds: allProgressIds,
    getPlanChecks: getPlanChecks, togglePlanCheck: togglePlanCheck,
    getTestDate: getTestDate, saveTestDate: saveTestDate, daysUntil: daysUntil
  };

  document.addEventListener("DOMContentLoaded", renderShell);
})();
