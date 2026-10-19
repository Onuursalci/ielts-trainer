/* ============================================================
   IELTS Trainer — profil / kayıt sistemi (fix5)
   Yerel profil yönetimi + yedek indir/yükle.

   Depolama modeli (statik site; sunucu yok):
     it_profiles           → { list:[{id,name,createdAt}], activeId, lastBackup:{ctx:iso} }
     it_prof_data_<id>     → { keys: { it_*... }, savedAt }   (profil anlık görüntüsü)
     canlı it_* anahtarları → AKTİF profilin çalışma alanı
   Korumalı anahtarlar (snapshot/export dışı): it_profiles, it_prof_data_*, it_guest

   Akışlar:
     - İlk ziyaret (it_profiles yok + it_guest yok) → index.html'de tek seferlik
       karşılama modalı (profil oluştur veya misafir devam).
     - Profil değiştirme: canlı it_* → aktif profilin snapshot'ı, canlı temizlenir,
       hedef profil anahtarları canlı it_*'e yazılır, activeId güncellenir, reload.
     - İlk profil oluşturma: canlı veri (misafir çalışma alanı) yeni profile taşınır.
     - test.html'e profil UI EKLEMEZ; karşılama modalı SADECE index'te çıkar.
   ============================================================ */
(function () {
  "use strict";

  var META_KEY = "it_profiles";
  var DATA_PREFIX = "it_prof_data_";
  var GUEST_KEY = "it_guest";
  var LIVE_PREFIX = "it_";
  var GUEST_CTX = "__guest";

  /* ---------- yardımcılar ---------- */
  function A() { return window.APP || null; }
  function t(k, vars) { var a = A(); return a ? a.t(k, vars) : k; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function readJSON(key, fb) { try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fb; } catch (e) { return fb; } }
  function writeJSON(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { } }
  function nowISO() { return new Date().toISOString(); }
  function todayISO() {
    var a = A(); if (a && a.todayISO) return a.todayISO();
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function fmtDate(iso, withTime) {
    if (!iso) return "—";
    var a = A(); if (a && a.fmtDate) return a.fmtDate(iso, withTime);
    return String(iso).slice(0, withTime ? 16 : 10);
  }
  function toast(msg) { var a = A(); if (a && a.toast) a.toast(msg); }

  /* ---------- korumalı / canlı anahtarlar ---------- */
  function isProtected(k) { return k === META_KEY || k === GUEST_KEY || k.indexOf(DATA_PREFIX) === 0; }
  function isLive(k) { return k.indexOf(LIVE_PREFIX) === 0 && !isProtected(k); }
  function liveKeys() {
    var out = {};
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (!k || !isLive(k)) continue;
      var raw = localStorage.getItem(k);
      try { out[k] = JSON.parse(raw); } catch (e) { out[k] = raw; }
    }
    return out;
  }
  function writeVal(k, v) { if (typeof v === "string") localStorage.setItem(k, v); else writeJSON(k, v); }
  function clearLive() {
    var ks = [];
    for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && isLive(k)) ks.push(k); }
    ks.forEach(function (k) { localStorage.removeItem(k); });
  }

  /* ---------- meta ---------- */
  function getMeta() {
    var m = readJSON(META_KEY, null);
    if (!m || typeof m !== "object" || Array.isArray(m)) return null;
    if (!Array.isArray(m.list)) m.list = [];
    if (!("activeId" in m)) m.activeId = null;
    if (!m.lastBackup || typeof m.lastBackup !== "object" || Array.isArray(m.lastBackup)) m.lastBackup = {};
    return m;
  }
  function saveMeta(m) { writeJSON(META_KEY, m); }
  function emptyMeta() { return { list: [], activeId: null, lastBackup: {} }; }
  function findProfile(m, id) {
    if (!m || !id) return null;
    var hit = null;
    m.list.forEach(function (p) { if (p.id === id) hit = p; });
    return hit;
  }
  function ctxKey(m) { return (m && m.activeId) ? m.activeId : GUEST_CTX; }

  /* ---------- snapshot / restore ---------- */
  function snapshotTo(id) { writeJSON(DATA_PREFIX + id, { keys: liveKeys(), savedAt: nowISO() }); }
  function restoreFrom(id) {
    var d = readJSON(DATA_PREFIX + id, null);
    var ks = (d && d.keys) || {};
    Object.keys(ks).forEach(function (k) { if (isLive(k)) writeVal(k, ks[k]); });
  }

  /* ---------- profil işlemleri ---------- */
  function newId() { return "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  function createProfile(name) {
    name = String(name || "").trim();
    if (!name) { toast(t("prof.errName")); return false; }
    var m = getMeta() || emptyMeta();
    var id = newId();
    if (m.activeId) {
      /* mevcut aktif profilin verisi park edilir; yeni profil boş başlar */
      snapshotTo(m.activeId);
      clearLive();
    } else {
      /* misafir çalışma alanı yeni profile taşınır (canlı veri yerinde kalır) */
      snapshotTo(id);
    }
    m.list.push({ id: id, name: name, createdAt: nowISO() });
    m.activeId = id;
    saveMeta(m);
    try { localStorage.removeItem(GUEST_KEY); } catch (e) { }
    location.reload();
    return true;
  }

  function activate(id) {
    var m = getMeta() || emptyMeta();
    if ((m.activeId || null) === (id || null)) return false;
    if (m.activeId) snapshotTo(m.activeId);
    clearLive();
    if (id) { restoreFrom(id); m.activeId = id; } else { m.activeId = null; }
    saveMeta(m);
    location.reload();
    return true;
  }

  function deleteProfile(id) {
    var m = getMeta(); if (!m) return;
    m.list = m.list.filter(function (p) { return p.id !== id; });
    try { delete m.lastBackup[id]; } catch (e) { }
    try { localStorage.removeItem(DATA_PREFIX + id); } catch (e) { }
    if (m.activeId === id) {
      /* aktif profil silindi → misafire dön; silinen profilin canlı kalıntıları temizlenir */
      m.activeId = null;
      saveMeta(m);
      clearLive();
      location.reload();
    } else {
      saveMeta(m);
      renderPanel();
      if (window.APP && window.APP.toast) window.APP.toast(t("prof.deletedToast"));
    }
  }

  function renameProfile(id, name) {
    name = String(name || "").trim();
    if (!name) { toast(t("prof.errName")); return false; }
    var m = getMeta(); if (!m) return false;
    var p = findProfile(m, id); if (!p) return false;
    p.name = name;
    saveMeta(m);
    updateChip();
    return true;
  }

  /* ---------- yedek indir ---------- */
  function sanitizeFile(s) {
    var out = String(s || "profil").replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, "-").replace(/^-+|-+$/g, "");
    return out || "profil";
  }
  function doExport() {
    var m = getMeta() || emptyMeta();
    if (m.activeId) snapshotTo(m.activeId);
    var ctx = m.activeId ? findProfile(m, m.activeId) : null;
    var name = ctx ? ctx.name : t("prof.guestName");
    var payload = {
      app: "ielts-trainer",
      exportedAt: nowISO(),
      profile: ctx ? { id: ctx.id, name: ctx.name, createdAt: ctx.createdAt } : { id: null, name: name },
      keys: liveKeys()
    };
    m.lastBackup[ctxKey(m)] = nowISO();
    saveMeta(m);
    var fname = "ielts-yedek-" + sanitizeFile(name) + "-" + todayISO() + ".json";
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = fname; a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 2000);
    renderPanel();
    toast(t("prof.exportedToast"));
  }

  /* ---------- yedekten yükle ---------- */
  function onImportFile(e) {
    var f = e.target && e.target.files && e.target.files[0];
    if (!f) return;
    var r = new FileReader();
    r.onload = function () {
      var data = null;
      try { data = JSON.parse(String(r.result)); } catch (err) { data = null; }
      if (!data || data.app !== "ielts-trainer" || !data.keys || typeof data.keys !== "object") {
        toast(t("prof.importErr"));
        return;
      }
      if (A() && A().modal) {
        A().modal({
          title: t("prof.importConfirmTitle"),
          text: t("prof.importConfirmText"),
          okText: t("common.confirm"),
          cancelText: t("common.cancel"),
          danger: true,
          onOk: function () { applyImport(data); }
        });
      } else {
        applyImport(data);
      }
    };
    r.readAsText(f);
  }
  function applyImport(data) {
    clearLive();
    Object.keys(data.keys).forEach(function (k) { if (isLive(k)) writeVal(k, data.keys[k]); });
    toast(t("prof.importedToast"));
    setTimeout(function () { location.reload(); }, 300);
  }

  /* ---------- çip (üst menü) ---------- */
  function chipLabel() {
    var m = getMeta();
    if (m && m.activeId) { var p = findProfile(m, m.activeId); if (p) return p.name; }
    return t("prof.guestName");
  }
  function updateChip() {
    var el = document.getElementById("profChipName");
    if (el) el.textContent = chipLabel();
    var chip = document.getElementById("profChip");
    if (chip) chip.title = t("prof.chipTitle");
  }
  function injectChip() {
    var hdr = document.getElementById("hdr");
    if (!hdr) return; /* test.html ve benzeri sade ekranlarda profil UI yok */
    if (document.getElementById("profChip")) { updateChip(); return; }
    var right = hdr.querySelector(".header-right");
    if (!right) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = "profChip";
    btn.className = "btn btn-ghost btn-sm prof-chip";
    btn.title = t("prof.chipTitle");
    btn.innerHTML = '<span class="prof-chip-ic" aria-hidden="true">👤</span><span id="profChipName"></span>';
    btn.addEventListener("click", openPanel);
    right.appendChild(btn);
    updateChip();
  }

  /* ---------- panel ---------- */
  var editingId = null;

  function closePanel() {
    var el = document.getElementById("profOverlay");
    if (el) el.remove();
  }

  function openPanel() {
    closePanel();
    editingId = null;
    var wrap = document.createElement("div");
    wrap.className = "overlay";
    wrap.id = "profOverlay";
    wrap.innerHTML = '<div class="modal prof-modal" role="dialog" aria-modal="true"><div id="profPanelBody"></div></div>';
    document.body.appendChild(wrap);
    wrap.addEventListener("click", function (e) {
      if (e.target === wrap) { closePanel(); return; }
      var b = e.target.closest("button[data-pact]");
      if (!b) return;
      handlePanelAction(b.getAttribute("data-pact"), b.getAttribute("data-id"));
    });
    wrap.addEventListener("keydown", function (e) {
      if (e.key !== "Enter") return;
      var el = e.target;
      if (!el || !el.classList) return;
      if (el.id === "profNewName") { e.preventDefault(); handlePanelAction("create", null); }
      else if (el.classList.contains("prof-rename-input")) { e.preventDefault(); handlePanelAction("rename-save", editingId); }
    });
    renderPanel();
    var inp = document.getElementById("profNewName");
    if (inp) inp.focus();
  }

  function renderPanel() {
    var body = document.getElementById("profPanelBody");
    if (!body) return;
    var m = getMeta() || emptyMeta();

    var rows = m.list.map(function (p) {
      var isActive = p.id === m.activeId;
      if (editingId === p.id) {
        return '<div class="prof-item active" data-id="' + esc(p.id) + '">' +
          '<input type="text" class="prof-input prof-rename-input" id="profRenameInput" maxlength="30" value="' + esc(p.name) + '">' +
          '<span class="prof-actions">' +
          '<button type="button" class="btn btn-blue btn-sm" data-pact="rename-save" data-id="' + esc(p.id) + '">' + esc(t("common.save")) + '</button>' +
          '<button type="button" class="btn btn-ghost btn-sm" data-pact="rename-cancel">' + esc(t("common.cancel")) + '</button>' +
          '</span></div>';
      }
      return '<div class="prof-item' + (isActive ? " active" : "") + '" data-id="' + esc(p.id) + '">' +
        '<span class="prof-item-main"><span class="prof-item-name">' + esc(p.name) + '</span>' +
        '<span class="prof-item-meta">' + esc(t("prof.createdAt", { date: fmtDate(p.createdAt, true) })) + '</span></span>' +
        '<span class="prof-actions">' +
        (isActive
          ? '<span class="chip chip-red">' + esc(t("prof.activeLabel")) + '</span>'
          : '<button type="button" class="btn btn-ghost btn-sm" data-pact="switch" data-id="' + esc(p.id) + '">' + esc(t("prof.switchBtn")) + '</button>') +
        '<button type="button" class="btn btn-ghost btn-sm prof-icon-btn" data-pact="rename" data-id="' + esc(p.id) + '" title="' + esc(t("prof.renameBtn")) + '" aria-label="' + esc(t("prof.renameBtn")) + '">✎</button>' +
        '<button type="button" class="btn btn-ghost btn-sm prof-icon-btn" data-pact="delete" data-id="' + esc(p.id) + '" title="' + esc(t("prof.deleteBtn")) + '" aria-label="' + esc(t("prof.deleteBtn")) + '">🗑</button>' +
        '</span></div>';
    }).join("");

    var guestActive = !m.activeId;
    var guestRow = '<div class="prof-item prof-item-guest' + (guestActive ? " active" : "") + '" data-id="' + GUEST_CTX + '">' +
      '<span class="prof-item-main"><span class="prof-item-name">' + esc(t("prof.guestName")) + '</span>' +
      '<span class="prof-item-meta">' + esc(t("prof.guestMeta")) + '</span></span>' +
      '<span class="prof-actions">' +
      (guestActive
        ? '<span class="chip chip-red">' + esc(t("prof.activeLabel")) + '</span>'
        : '<button type="button" class="btn btn-ghost btn-sm" data-pact="switch" data-id="' + GUEST_CTX + '">' + esc(t("prof.switchBtn")) + '</button>') +
      '</span></div>';

    var lb = m.lastBackup[ctxKey(m)];
    body.innerHTML =
      '<h3>' + esc(t("prof.panelTitle")) + '</h3>' +
      '<p>' + esc(t("prof.note")) + '</p>' +
      '<div class="prof-list">' + rows + guestRow + '</div>' +
      '<div class="prof-new">' +
      '<input type="text" class="prof-input" id="profNewName" maxlength="30" placeholder="' + esc(t("prof.newPh")) + '">' +
      '<button type="button" class="btn btn-blue" data-pact="create">' + esc(t("prof.newBtn")) + '</button>' +
      '</div>' +
      '<div class="prof-divider"></div>' +
      '<div class="prof-backup">' +
      '<button type="button" class="btn btn-blue" data-pact="export">' + esc(t("prof.exportBtn")) + '</button>' +
      '<button type="button" class="btn btn-ghost" data-pact="import">' + esc(t("prof.importBtn")) + '</button>' +
      '<input type="file" id="profImportFile" accept=".json,application/json" class="hidden">' +
      '<div class="prof-lastbackup" id="profLastBackup">' + (lb ? esc(t("prof.lastBackup", { date: fmtDate(lb, true) })) : esc(t("prof.noBackup"))) + '</div>' +
      '</div>' +
      '<div class="actions" style="margin-top:18px">' +
      '<button type="button" class="btn btn-ghost" data-pact="close">' + esc(t("common.close")) + '</button>' +
      '</div>';

    var fi = document.getElementById("profImportFile");
    if (fi) fi.addEventListener("change", onImportFile);
    var ri = document.getElementById("profRenameInput");
    if (ri) { ri.focus(); ri.select(); }
  }

  function handlePanelAction(act, id) {
    var m = getMeta() || emptyMeta();
    if (act === "close") { closePanel(); return; }
    if (act === "create") {
      var inp = document.getElementById("profNewName");
      var name = inp ? inp.value : "";
      if (!String(name || "").trim()) { toast(t("prof.errName")); if (inp) inp.focus(); return; }
      createProfile(name);
      return;
    }
    if (act === "switch") {
      if (id === GUEST_CTX) activate(null); else activate(id);
      return;
    }
    if (act === "rename") { editingId = id; renderPanel(); return; }
    if (act === "rename-cancel") { editingId = null; renderPanel(); return; }
    if (act === "rename-save") {
      var ri = document.getElementById("profRenameInput");
      if (renameProfile(id || editingId, ri ? ri.value : "")) {
        editingId = null;
        renderPanel();
        toast(t("prof.renamedToast"));
      }
      return;
    }
    if (act === "delete") {
      var p = findProfile(m, id);
      if (!p) return;
      if (A() && A().modal) {
        A().modal({
          title: t("prof.deleteConfirmTitle"),
          text: t("prof.deleteConfirmText", { name: p.name }),
          okText: t("common.confirm"),
          cancelText: t("common.cancel"),
          danger: true,
          onOk: function () { deleteProfile(p.id); }
        });
      } else if (window.confirm(t("prof.deleteConfirmText", { name: p.name }))) {
        deleteProfile(p.id);
      }
      return;
    }
    if (act === "export") { doExport(); return; }
    if (act === "import") {
      var fi = document.getElementById("profImportFile");
      if (fi) fi.click();
      return;
    }
  }

  /* ---------- karşılama modalı (SADECE index, tek seferlik) ---------- */
  function maybeWelcome() {
    if (document.body.getAttribute("data-page") !== "home") return;
    if (localStorage.getItem(META_KEY) != null) return;
    if (localStorage.getItem(GUEST_KEY) != null) return;
    var wrap = document.createElement("div");
    wrap.className = "overlay";
    wrap.id = "profWelcome";
    wrap.innerHTML = '<div class="modal prof-modal" role="dialog" aria-modal="true">' +
      '<h3>' + esc(t("prof.welcomeTitle")) + '</h3>' +
      '<p>' + esc(t("prof.welcomeText")) + '</p>' +
      '<input type="text" class="prof-input" id="profWelcomeName" maxlength="30" placeholder="' + esc(t("prof.namePh")) + '">' +
      '<div class="actions">' +
      '<button type="button" class="btn btn-ghost" id="profWelcomeGuest">' + esc(t("prof.guestBtn")) + '</button>' +
      '<button type="button" class="btn btn-blue" id="profWelcomeCreate">' + esc(t("prof.createBtn")) + '</button>' +
      '</div></div>';
    document.body.appendChild(wrap);
    var nameIn = document.getElementById("profWelcomeName");
    function create() {
      var nm = String(nameIn.value || "").trim();
      if (!nm) { toast(t("prof.errName")); nameIn.focus(); return; }
      wrap.remove();
      createProfile(nm);
    }
    nameIn.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); create(); } });
    document.getElementById("profWelcomeCreate").addEventListener("click", create);
    document.getElementById("profWelcomeGuest").addEventListener("click", function () {
      try { localStorage.setItem(GUEST_KEY, "1"); } catch (e) { }
      wrap.remove();
      toast(t("prof.guestToast"));
    });
    nameIn.focus();
  }

  /* ---------- init ---------- */
  function init() {
    injectChip();
    maybeWelcome();
    document.addEventListener("langchange", function () {
      updateChip();
      if (document.getElementById("profOverlay")) renderPanel();
    });
    window.addEventListener("storage", function () { updateChip(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  /* ---------- hata ayıklama / test API ---------- */
  window.APP_PROFILES = {
    version: "fix5",
    META_KEY: META_KEY,
    DATA_PREFIX: DATA_PREFIX,
    GUEST_KEY: GUEST_KEY,
    getMeta: getMeta,
    liveKeys: liveKeys,
    snapshotTo: snapshotTo,
    restoreFrom: restoreFrom,
    clearLive: clearLive,
    createProfile: createProfile,
    activate: activate,
    deleteProfile: deleteProfile,
    renameProfile: renameProfile,
    isLive: isLive,
    isProtected: isProtected
  };
})();
