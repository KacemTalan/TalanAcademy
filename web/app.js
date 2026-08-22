/* ============================================================
   TALAN ACADEMY — application
   ============================================================ */

const API = (window.TALAN_CONFIG && window.TALAN_CONFIG.apiBase || '').replace(/\/$/, '');
const DOMAIN = (window.TALAN_CONFIG && window.TALAN_CONFIG.emailDomain) || 'talan.com';

const SERIES = CURRICULUM_A.concat(CURRICULUM_B);
SERIES.forEach(s => s.lessons.forEach(l => {
  const extra = (typeof CODE_LIBRARY !== 'undefined' && CODE_LIBRARY[l.id]) || null;
  if (extra) l.samples = extra;
  else if (l.code) l.samples = [{ label: 'Example', lang: 'AL', src: l.code }];
  const quiz = (typeof QUIZZES !== 'undefined' && QUIZZES[l.id]) || null;
  if (quiz) l.quiz = quiz;
}));

const FLAT = [];
SERIES.forEach(s => s.lessons.forEach(l => FLAT.push({ ...l, series: s })));
const LESSON_BY_ID = Object.fromEntries(FLAT.map(l => [l.id, l]));

const ACCENTS = {
  blue:    { c: '#1B84C6', d: '#0F5C8C' },
  lime:    { c: '#A4BE23', d: '#7C9214' },
  magenta: { c: '#E5007D', d: '#B00062' },
  teal:    { c: '#147C8E', d: '#0D5C6A' }
};
const TRACK_LABEL = { business: 'Business', platform: 'Platform', developer: 'Developer', executive: 'Executive' };

/* ---------------- state ---------------- */
let token = localStorage.getItem('talan_token') || null;
let me = null;
let progress = new Set();
let notes = {};
let videos = {};
let quizResults = {};
let quizSelections = {};   // lessonId -> array of chosen option indices, in-progress attempt
let watchedPct = 0;        // fraction of the current lesson's video watched this session
let openedConcepts = {};   // lessonId -> Set of concept indices the learner has expanded
let currentId = null;
let filterTrack = 'all';
let view = 'academy';   // 'academy' | 'admin'
let theme = localStorage.getItem('talan_theme')
  || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
}
applyTheme();

/* ---------------- api ---------------- */
async function api(path, options = {}) {
  const res = await fetch(API + path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: 'Bearer ' + token } : {}),
      ...(options.headers || {})
    }
  });

  let data = null;
  try { data = await res.json(); } catch { /* empty body */ }

  if (res.status === 401 || (res.status === 403 && data?.status)) {
    signOut(data?.error);
    throw new Error(data?.error || 'Session ended.');
  }
  if (!res.ok) throw new Error(data?.error || `Request failed (${res.status})`);
  return data;
}

/* ---------------- helpers ---------------- */
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const el = id => document.getElementById(id);

function setAccent(key) {
  const a = ACCENTS[key] || ACCENTS.blue;
  document.documentElement.style.setProperty('--accent', a.c);
  document.documentElement.style.setProperty('--accent-deep', a.d);
}

function highlightAL(src) {
  let out = esc(src);
  out = out.replace(/(\/\/[^\n]*)/g, '<span class="tok-c">$1</span>');
  out = out.replace(/(#[^\n]*)/g, '<span class="tok-c">$1</span>');
  out = out.replace(/('[^']*')/g, '<span class="tok-s">$1</span>');
  out = out.replace(/("[^"]*")/g, '<span class="tok-s">$1</span>');
  out = out.replace(/\[([A-Za-z]+)/g, '[<span class="tok-a">$1</span>');
  out = out.replace(/\b(table|page|codeunit|report|query|enum|interface|permissionset|tableextension|pageextension|enumextension|xmlport|controladdin|profile|field|fields|keys|key|layout|actions|area|group|procedure|local|var|begin|end|if|then|else|repeat|until|exit|implements|extends|trigger|Caption|MinValue|MaxValue|NotBlank|Editable|FieldClass|CalcFormula|Clustered|Extensible|Assignable|Permissions|IncludedPermissionSets|ApplicationArea|SourceTable|PageType|Subtype|value|addafter|addlast|addfirst|modify|Sum|Count|WHERE|FIELD|Record|Codeunit|Decimal|Integer|Code|Text|Boolean|Date|DateTime)\b/g, '<span class="tok-k">$1</span>');
  out = out.replace(/\b(git|Assert|Error|Confirm|Message|Round|Evaluate|CalcDate|CalcFields|UpperCase|LowerCase|StrLen|CopyStr|Format|Today|WorkDate|CurrentDateTime|FindSet|FindFirst|FindLast|SetRange|SetFilter|Validate|Modify|Reset|Delete|Next|Init|Insert|Get|IsEmpty|TestField)\b/g, '<span class="tok-n">$1</span>');
  return out;
}

const seriesProgress = s => {
  const done = s.lessons.filter(l => progress.has(l.id)).length;
  return { done, total: s.lessons.length, pct: s.lessons.length ? done / s.lessons.length : 0 };
};

/* ---------------- certificate ---------------- */
async function downloadCertificate(code) {
  const s = SERIES.find(x => x.code === code);
  if (!s) return;
  try {
    const res = await fetch(API + '/api/certificate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify({ seriesTitle: s.title, lessonIds: s.lessons.map(l => l.id) })
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Could not generate the certificate.');
    }
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${s.title.replace(/[^a-z0-9]+/gi, '-')}-certificate.pdf`;
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  } catch (err) {
    alert(err.message);
  }
}

/* ---------------- video ---------------- */
function toEmbed(url) {
  const u = (url || '').trim();
  if (!u) return null;
  let m;
  if ((m = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{6,})/)))
    return { kind: 'iframe', src: 'https://www.youtube.com/embed/' + m[1] };
  if ((m = u.match(/vimeo\.com\/(?:video\/)?(\d+)/)))
    return { kind: 'iframe', src: 'https://player.vimeo.com/video/' + m[1] };
  if (/\.(mp4|webm|ogg)(\?|$)/i.test(u)) return { kind: 'file', src: u };
  if (/sharepoint\.com|microsoftstream\.com|stream\.office\.com/i.test(u)) return { kind: 'iframe', src: u };
  if (/^https?:\/\//i.test(u)) return { kind: 'link', src: u };
  return null;
}

function videoHtml(l) {
  const rec = videos[l.id];
  const isAdmin = me?.role === 'admin';
  const brief = l.video ? `<p class="vid-brief"><b>Video brief</b> ${esc(l.video)}</p>` : '';

  if (rec && rec.url) {
    const emb = toEmbed(rec.url);
    let player;
    if (emb?.kind === 'iframe')
      player = `<div class="vid-frame"><iframe src="${esc(emb.src)}" allowfullscreen
        allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin" title="Lesson video"></iframe></div>`;
    else if (emb?.kind === 'file')
      player = `<div class="vid-frame"><video src="${esc(emb.src)}" controls preload="metadata"></video></div>`;
    else
      player = `<a class="vid-link" href="${esc(rec.url)}" target="_blank" rel="noopener">Open video in a new tab →</a>`;

    return `${player}
      <div class="vid-foot">
        <span class="vid-src">${esc(rec.label || rec.url)}</span>
        ${isAdmin ? `<span>
          <button class="vid-mini" data-vid-edit>Replace</button>
          <button class="vid-mini danger" data-vid-remove>Remove</button>
        </span>` : ''}
      </div>${brief}`;
  }

  return `<div class="vid-empty">
      <div class="vid-empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <rect x="2" y="5" width="14" height="14" rx="2.5"/><path d="M16 10.5l6-3.5v10l-6-3.5"/></svg></div>
      <b>No video for this lesson yet</b>
      <p>${isAdmin
        ? 'Paste the SharePoint or Stream share link. Everyone approved will see it here.'
        : 'Your administrator has not published a video for this lesson.'}</p>
      ${isAdmin ? '<button class="vid-add" data-vid-edit>Attach video link</button>' : ''}
      ${brief}</div>`;
}

function videoFormHtml(l) {
  const rec = videos[l.id] || {};
  return `<div class="vid-form">
      <label>Video link</label>
      <input type="url" id="vidUrl" placeholder="https://talan.sharepoint.com/..." value="${esc(rec.url || '')}">
      <label>Label <span>optional</span></label>
      <input type="text" id="vidLabel" placeholder="e.g. Lesson 5 — Codeunits (FR)" value="${esc(rec.label || '')}">
      <p class="vid-note" id="vidNote">SharePoint, Stream, YouTube, Vimeo or a direct .mp4 link. Set the file's own sharing permissions in SharePoint — this page shows the video but does not control access to it.</p>
      <div class="vid-actions">
        <button class="vid-save" data-vid-save>Save link</button>
        <button class="vid-cancel" data-vid-cancel>Cancel</button>
      </div></div>`;
}

/* ============================================================
   AUTH SCREENS
   ============================================================ */
function renderAuth(mode = 'login', message = '', tone = '') {
  document.body.className = 'auth-body';
  document.body.innerHTML = `
  <div class="auth-wrap">
    <div class="auth-card">
      <div class="auth-brand">
        <img src="${LOGO_TALAN}" alt="Talan">
        <div class="auth-brand-txt">Academy<span>Business Central</span></div>
      </div>

      <div class="auth-tabs">
        <button class="auth-tab ${mode === 'login' ? 'on' : ''}" data-mode="login">Sign in</button>
        <button class="auth-tab ${mode === 'signup' ? 'on' : ''}" data-mode="signup">Request access</button>
      </div>

      ${message ? `<div class="auth-msg ${tone}">${esc(message)}</div>` : ''}

      <form id="authForm" novalidate>
        ${mode === 'signup' ? `
          <label>Full name</label>
          <input type="text" id="fName" autocomplete="name" required>` : ''}

        <label>Work email</label>
        <div class="input-suffix">
          <input type="email" id="fEmail" autocomplete="email" placeholder="firstname.lastname@${DOMAIN}" required>
        </div>

        <label>Password</label>
        <input type="password" id="fPassword" autocomplete="${mode === 'signup' ? 'new-password' : 'current-password'}" required>
        ${mode === 'signup'
          ? `<p class="auth-hint">At least 10 characters, with an uppercase letter, a lowercase letter and a number.</p>`
          : ''}

        <button type="submit" class="auth-submit" id="authSubmit">
          ${mode === 'signup' ? 'Request access' : 'Sign in'}
        </button>
      </form>

      <p class="auth-foot">
        ${mode === 'signup'
          ? `Only <b>@${DOMAIN}</b> addresses can register. An administrator approves each request before access is granted.`
          : `Access is limited to approved Talan consultants.`}
      </p>
    </div>
  </div>`;

  document.querySelectorAll('.auth-tab').forEach(b =>
    b.addEventListener('click', () => renderAuth(b.dataset.mode)));

  el('authForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = el('authSubmit');
    btn.disabled = true;
    btn.textContent = mode === 'signup' ? 'Sending…' : 'Signing in…';

    const email = el('fEmail').value.trim().toLowerCase();
    const password = el('fPassword').value;

    try {
      if (mode === 'signup') {
        const name = el('fName').value.trim();
        if (!email.endsWith('@' + DOMAIN)) throw new Error(`Please use your @${DOMAIN} address.`);
        const r = await api('/api/auth/signup', {
          method: 'POST',
          body: JSON.stringify({ email, name, password })
        });
        if (r.pending) return renderAuth('login', r.message, 'good');
        token = r.token; me = r.user;
        localStorage.setItem('talan_token', token);
        return boot();
      }

      const r = await api('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      token = r.token; me = r.user;
      localStorage.setItem('talan_token', token);
      boot();
    } catch (err) {
      renderAuth(mode, err.message, 'bad');
    }
  });

  el(mode === 'signup' ? 'fName' : 'fEmail')?.focus();
}

function signOut(message) {
  token = null; me = null;
  progress = new Set(); notes = {}; videos = {}; quizResults = {}; quizSelections = {};
  localStorage.removeItem('talan_token');
  renderAuth('login', message || '', message ? 'bad' : '');
}

/* ============================================================
   APP SHELL
   ============================================================ */
function renderShell() {
  document.body.className = '';
  document.body.innerHTML = `
  <div class="topbar">
    <div class="topbar-inner">
      <button class="menu-btn" id="menuBtn" aria-label="Menu">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
      <div class="brand" data-home role="button" aria-label="Go to home">
        <img src="${LOGO_TALAN}" alt="Talan">
        <div class="brand-div"></div>
        <div class="brand-name">Academy<span>Business Central</span></div>
      </div>
      <div class="topbar-spacer"></div>
      <div class="searchbox" id="searchWrap">
        <button class="search-icon-btn" id="searchToggle" aria-label="Search lessons" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
        </button>
        <input type="text" id="search" placeholder="Search lessons…"
          autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" name="talan-lesson-query">
      </div>
      <div class="overall" id="overallWrap">
        <div class="overall-bar"><div class="overall-fill" id="ovFill"></div></div>
        <div class="overall-txt" id="ovTxt">0 / 0</div>
      </div>
      ${me.role === 'admin' ? `<button class="nav-tab" id="viewToggle">${view === 'admin' ? 'Academy' : 'Admin'}</button>` : ''}
      <div class="usermenu">
        <button class="avatar" id="avatarBtn">${esc(me.name.slice(0, 1).toUpperCase())}</button>
        <div class="usermenu-pop" id="userPop">
          <div class="um-head"><b>${esc(me.name)}</b><span>${esc(me.email)}</span>
            <em class="um-role">${me.role === 'admin' ? 'Administrator' : 'Consultant'}</em></div>
          <button class="um-item" id="themeToggle">
            <span>Dark mode</span>
            <span class="um-switch ${theme === 'dark' ? 'on' : ''}" id="themeSwitch"><span class="knob"></span></span>
          </button>
          <button class="um-item" id="changePw">Change password</button>
          <button class="um-item danger" id="signOutBtn">Sign out</button>
        </div>
      </div>
    </div>
  </div>
  <div class="scrim" id="scrim"></div>
  <div class="shell">
    <aside class="sidebar" id="sidebar">
      <div class="track-filter" id="trackFilter">
        <button class="tf on" data-t="all">All</button>
        <button class="tf" data-t="business">Business</button>
        <button class="tf" data-t="platform">Platform</button>
        <button class="tf" data-t="developer">Developer</button>
        <button class="tf" data-t="executive">Executive</button>
      </div>
      <div id="sideNav"></div>
    </aside>
    <main class="main"><div id="viewRoot"></div></main>
  </div>`;

  wireShell();
}

function wireShell() {
  el('avatarBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    el('userPop').classList.toggle('on');
  });
  document.addEventListener('click', () => el('userPop')?.classList.remove('on'));
  el('signOutBtn').addEventListener('click', () => signOut());
  el('changePw').addEventListener('click', openPasswordDialog);
  el('themeToggle').addEventListener('click', (e) => {
    e.stopPropagation();
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('talan_theme', theme);
    applyTheme();
    el('themeSwitch').classList.toggle('on', theme === 'dark');
  });
  el('menuBtn').addEventListener('click', () => {
    el('sidebar').classList.toggle('open');
    el('scrim').classList.toggle('on');
  });
  el('scrim').addEventListener('click', () => {
    el('sidebar').classList.remove('open');
    el('scrim').classList.remove('on');
  });

  const toggle = el('viewToggle');
  if (toggle) toggle.addEventListener('click', () => {
    view = view === 'admin' ? 'academy' : 'admin';
    toggle.textContent = view === 'admin' ? 'Academy' : 'Admin';
    document.querySelector('.shell').classList.toggle('no-side', view === 'admin');
    el('searchWrap').style.display = view === 'admin' ? 'none' : '';
    el('overallWrap').style.display = view === 'admin' ? 'none' : '';
    view === 'admin' ? renderAdmin() : renderHome();
  });

  let searchTimer;
  el('search').addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    const v = e.target.value;
    searchTimer = setTimeout(() => v.trim() ? renderSearch(v) : renderHome(), 180);
  });

  el('searchToggle').addEventListener('click', () => {
    const wrap = el('searchWrap');
    const opening = !wrap.classList.contains('expanded');
    wrap.classList.toggle('expanded', opening);
    if (opening) el('search').focus();
  });
  el('search').addEventListener('blur', () => {
    if (!el('search').value.trim()) el('searchWrap').classList.remove('expanded');
  });
  el('search').addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { el('search').value = ''; el('search').blur(); renderHome(); }
  });

  el('trackFilter').addEventListener('click', (e) => {
    const tf = e.target.closest('.tf');
    if (!tf) return;
    document.querySelectorAll('.tf').forEach(b => b.classList.remove('on'));
    tf.classList.add('on');
    filterTrack = tf.dataset.t;
    renderSidebar();
  });

  document.addEventListener('click', onAppClick);
  document.addEventListener('input', onAppInput);
}

/* ---------------- sidebar ---------------- */
function renderSidebar() {
  const nav = el('sideNav');
  if (!nav) return;
  const visible = SERIES.filter(s => filterTrack === 'all' || s.track === filterTrack);
  if (!visible.length) { nav.innerHTML = '<div class="side-empty">No series in this track.</div>'; return; }

  nav.innerHTML = visible.map(s => {
    const a = ACCENTS[s.accent], pr = seriesProgress(s), C = 2 * Math.PI * 8.5;
    const isOpen = s.lessons.some(l => l.id === currentId);
    let inner = '';
    if (s.groups) {
      s.groups.forEach(g => {
        const set = s.lessons.filter(l => l.group === g.key);
        if (!set.length) return;
        inner += `<div class="side-group">${esc(g.label)}</div>` + set.map(lessonBtn).join('');
      });
    } else inner = s.lessons.map(lessonBtn).join('');

    return `<div class="side-sec ${isOpen ? 'open' : ''}">
      <button class="side-head" data-toggle>
        <svg class="side-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg>
        <span class="side-dot" style="background:${a.c}"></span>
        <span class="side-head-txt"><b>${esc(s.title)}</b><i>${s.code} · ${pr.total} lessons</i></span>
        <svg class="side-ring" viewBox="0 0 22 22">
          <circle class="bg" cx="11" cy="11" r="8.5"></circle>
          <circle class="fg" cx="11" cy="11" r="8.5" stroke="${a.c}"
            stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pr.pct)}"></circle>
        </svg>
      </button>
      <div class="side-lessons">${inner}</div></div>`;
  }).join('');
}

const lessonBtn = l =>
  `<button class="side-lesson ${progress.has(l.id) ? 'done' : ''} ${l.id === currentId ? 'active' : ''}" data-lesson="${l.id}">
     <span class="num">${esc(l.n)}</span><span class="ttl">${esc(l.title)}</span></button>`;

function ringChart(pct, color, size = 96, stroke = 10) {
  const r = (size - stroke) / 2, C = 2 * Math.PI * r, cx = size / 2, cy = size / 2;
  return `<svg class="dash-ring" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
    <circle class="bg" cx="${cx}" cy="${cy}" r="${r}" stroke-width="${stroke}"></circle>
    <circle class="fg" cx="${cx}" cy="${cy}" r="${r}" stroke-width="${stroke}" stroke="${esc(color)}"
      stroke-dasharray="${C.toFixed(2)}" stroke-dashoffset="${(C * (1 - pct)).toFixed(2)}" stroke-linecap="round"></circle>
  </svg>`;
}

function hBarRow(label, color, done, total) {
  const pct = total ? done / total : 0;
  return `<div class="dbar-row">
    <span class="dbar-label"><span class="dbar-dot" style="background:${esc(color)}"></span>${esc(label)}</span>
    <div class="dbar-track"><div class="dbar-fill" style="width:${(pct * 100).toFixed(1)}%;background:${esc(color)}">
      <title>${esc(label)}: ${done} of ${total} (${Math.round(pct * 100)}%)</title></div></div>
    <span class="dbar-val">${done}/${total}</span>
  </div>`;
}

function renderOverall() {
  const done = progress.size, total = FLAT.length;
  if (el('ovFill')) el('ovFill').style.width = (total ? done / total * 100 : 0) + '%';
  if (el('ovTxt')) el('ovTxt').textContent = `${done} / ${total}`;
}

function renderConsultantDashboard() {
  const overallPct = FLAT.length ? progress.size / FLAT.length : 0;
  const qEntries = Object.values(quizResults);
  const qAvg = qEntries.length ? Math.round(qEntries.reduce((s, r) => s + r.score / r.total, 0) / qEntries.length * 100) : null;
  const qPassed = qEntries.filter(r => r.passed).length;

  return `<div class="dash-card">
    <div class="sec-label">Your progress</div>
    <div class="dash-grid">
      <div class="dash-ring-wrap">
        ${ringChart(overallPct, 'var(--blue)', 112, 12)}
        <div class="dash-ring-txt"><b>${Math.round(overallPct * 100)}%</b><span>overall</span></div>
      </div>
      <div class="dash-bars">
        ${SERIES.map(s => {
          const done = s.lessons.filter(l => progress.has(l.id)).length;
          return hBarRow(s.code, ACCENTS[s.accent].c, done, s.lessons.length);
        }).join('')}
      </div>
    </div>
    ${qEntries.length ? `<div class="dash-quiz-foot">
      <b>${qAvg}%</b> average quiz score <span class="sep">·</span> <b>${qPassed}</b> of ${qEntries.length} quizzes passed
    </div>` : ''}
  </div>`;
}

/* ---------------- home ---------------- */
function renderHome() {
  currentId = null; setAccent('blue');
  el('viewRoot').innerHTML = `
  <div class="pane home">
    <div class="home-eyebrow">Internal knowledge base · Talan</div>
    <h1>Welcome back, <em>${esc(me.name.split(' ')[0])}.</em></h1>
    <p class="home-lede">Six curricula covering Business Central end to end — the modules a client uses, the configuration behind them, the AL underneath, and the arguments that win the deal.</p>
    <div class="home-stats">
      <div class="hs"><b>${SERIES.length}</b><span>Curricula</span></div>
      <div class="hs"><b>${FLAT.length}</b><span>Lessons</span></div>
      <div class="hs"><b>${progress.size}</b><span>You've completed</span></div>
      <div class="hs"><b>${Object.keys(videos).length}</b><span>Videos published</span></div>
    </div>
    ${renderConsultantDashboard()}
    <div class="eco"><div class="eco-h">What this covers</div><div class="eco-row">
      ${LOGOS_ECO.map(([src, name]) => `<div class="eco-item"><img src="${src}" alt=""><span>${esc(name)}</span></div>`).join('')}
    </div></div>
    <div class="home-tracks">
      ${SERIES.map(s => {
        const a = ACCENTS[s.accent], pr = seriesProgress(s);
        const complete = pr.total > 0 && pr.done === pr.total;
        return `<button class="tcard" data-series-open="${s.code}">
          <span class="tcard-bar" style="background:${a.c}"></span>
          <span class="tcard-body"><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>
            <span class="aud">${TRACK_LABEL[s.track]} · ${esc(s.audience)}</span>
            ${complete ? `<span class="cert-badge" data-certificate="${s.code}">🎓 Download certificate</span>` : ''}</span>
          <span class="tcard-meta"><b>${pr.done}/${pr.total}</b><span>read</span></span></button>`;
      }).join('')}
    </div>
  </div>`;
  renderSidebar();
}

/* ---------------- lesson ---------------- */
function renderLesson(id) {
  const idx = FLAT.findIndex(l => l.id === id);
  if (idx < 0) return renderHome();
  const l = FLAT[idx], s = l.series;
  currentId = id; setAccent(s.accent);

  const prev = FLAT[idx - 1]?.series === s ? FLAT[idx - 1] : null;
  const next = FLAT[idx + 1]?.series === s ? FLAT[idx + 1] : null;

  watchedPct = 0;
  if (l.quiz && !quizSelections[id]) quizSelections[id] = new Array(l.quiz.questions.length).fill(-1);
  if (!openedConcepts[id]) openedConcepts[id] = new Set([0]); // first concept starts open

  el('viewRoot').innerHTML = `
  <div class="pane lesson">
    <div class="crumb"><button data-home style="color:var(--ink-3)">Academy</button>
      <span class="sep">/</span><b>${esc(s.title)}</b><span class="sep">/</span><span>${esc(l.n)}</span></div>
    <h1>${esc(l.title)}</h1>
    <div class="lesson-meta">
      <span class="pill accent">${TRACK_LABEL[s.track]}</span>
      <span class="pill">${esc(l.dur)}</span>
      ${!s.noVideo && videos[l.id] ? '<span class="pill">Video available</span>' : ''}
    </div>
    <p class="summary">${esc(l.summary)}</p>

    ${l.flow ? `<div class="sec-label">Process flow</div>${flowHtml(l.flow, ACCENTS[s.accent].c)}` : ''}
    ${l.layers ? `<div class="sec-label">Architecture</div>${layersHtml(l.layers, ACCENTS[s.accent].c)}` : ''}

    <div class="sec-label">Key concepts</div>
    <div class="concepts">${l.concepts.map((c, i) => `
      <div class="concept ${openedConcepts[id].has(i) ? 'open' : ''}" data-concept-idx="${i}">
        <button class="concept-h"><span class="concept-n">${String(i + 1).padStart(2, '0')}</span>
          <b>${esc(c.h)}</b>
          <svg class="cc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button>
        <div class="concept-b">${conceptBodyHtml(c)}</div></div>`).join('')}</div>

    <div id="codeBox">${codeSectionHtml(l, s)}</div>

    ${s.noVideo ? '' : `<div class="sec-label">Video</div>
    <div class="videobox" id="videoBox">${videoHtml(l)}</div>`}

    <div class="why"><div class="why-h">Why it matters</div><p>${esc(l.why)}</p></div>

    <div class="sec-label">Check yourself</div>
    <div class="check" id="check"><div class="check-h">Question</div>
      <p class="check-q">${esc(l.check.q)}</p>
      <button class="reveal" data-reveal>Show the answer</button>
      <div class="check-a">${esc(l.check.a)}</div></div>

    ${l.quiz ? `<div class="sec-label">Quiz</div>
    <div id="quizBox">${quizHtml(l)}</div>` : ''}

    <div class="sec-label">Your notes</div>
    <div class="notes">
      <textarea id="noteArea" placeholder="Anything you want to remember — a client example, a gotcha, a question to raise.">${esc(notes[id] || '')}</textarea>
      <div class="notes-foot"><span>Private to you · saved automatically</span><span id="noteState"></span></div>
    </div>

    <div class="lesson-foot">
      ${markBtnHtml(l)}
      <div class="nav-pair">
        <button class="navbtn" data-go="${prev ? prev.id : ''}" ${prev ? '' : 'disabled'}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          <span>${prev ? esc(prev.title) : 'Start of series'}</span></button>
        <button class="navbtn" data-go="${next ? next.id : ''}" ${next ? '' : 'disabled'}>
          <span>${next ? esc(next.title) : 'End of series'}</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></button>
      </div>
    </div>
  </div>`;

  renderSidebar();
  attachVideoTracking();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('.side-lesson.active')?.scrollIntoView({ block: 'nearest' });
}

async function completeLesson(nowDone) {
  nowDone ? progress.add(currentId) : progress.delete(currentId);
  renderLesson(currentId); renderOverall();
  try {
    await api(`/api/progress/${encodeURIComponent(currentId)}`, {
      method: 'PUT', body: JSON.stringify({ completed: nowDone })
    });
  } catch { /* optimistic; corrected on next load */ }
}

function attachVideoTracking() {
  const v = document.querySelector('#videoBox video');
  if (!v) return;
  v.addEventListener('timeupdate', () => {
    if (v.duration) watchedPct = Math.max(watchedPct, v.currentTime / v.duration);
  });
}

/* ---------------- concept tables & diagrams ---------------- */
function conceptBodyHtml(c) {
  return `<p>${esc(c.p)}</p>${c.table ? tableHtml(c.table) : ''}`;
}

function tableHtml(t) {
  return `<div class="concept-table-wrap"><table class="concept-table">
    ${t.title ? `<caption>${esc(t.title)}</caption>` : ''}
    <thead><tr>${t.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
    <tbody>${t.rows.map(r => `<tr>${r.map(cell => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>`;
}

function flowHtml(steps, color) {
  return `<div class="flow-diagram">${steps.map((step, i) => `
    <div class="flow-step">
      <div class="flow-step-n" style="background:${esc(color)}">${i + 1}</div>
      <div class="flow-step-body"><b>${esc(step.label)}</b>${step.detail ? `<span>${esc(step.detail)}</span>` : ''}</div>
    </div>
    ${i < steps.length - 1 ? `<div class="flow-arrow" style="color:${esc(color)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h13M13 6l6 6-6 6"/></svg></div>` : ''}`
  ).join('')}</div>`;
}

function layersHtml(layers, color) {
  return `<div class="layers-diagram">${layers.map(layer => `
    <div class="layer-box">
      <div class="layer-box-h" style="border-color:${esc(color)}">${esc(layer.label)}</div>
      <ul class="layer-items">${layer.items.map(it => `<li>${esc(it)}</li>`).join('')}</ul>
      ${layer.detail ? `<p class="layer-detail">${esc(layer.detail)}</p>` : ''}
    </div>`
  ).join('')}</div>`;
}

function codeSectionHtml(l, s) {
  if (!l.samples) return '';
  const total = l.concepts.length;
  const opened = openedConcepts[l.id]?.size || 0;
  if (s.progressiveCode && opened < total) {
    return `<div class="sec-label">In code <em class="lbl-count">locked</em></div>
      <div class="code-locked">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>
        <b>Open every concept above to reveal the code</b>
        <p>${opened} of ${total} opened so far.</p>
      </div>`;
  }
  return `<div class="sec-label">In code <em class="lbl-count">${l.samples.length} example${l.samples.length === 1 ? '' : 's'}</em></div>
    ${l.samples.map(sm => `<div class="sample">
      <div class="sample-h"><span class="sample-lbl">${esc(sm.label)}</span>
        <span class="sample-lang">${esc(sm.lang || 'AL')}</span>
        <button class="copybtn" data-copy>Copy</button></div>
      <div class="codewrap"><pre>${highlightAL(sm.src)}</pre></div></div>`).join('')}`;
}

/* ---------------- quiz ---------------- */
function markBtnHtml(l) {
  const done = progress.has(l.id);
  const locked = !!l.quiz && !done && !quizResults[l.id]?.passed;
  return `<button class="markbtn ${done ? 'done' : ''}" id="markBtn" ${locked ? 'disabled' : ''}>
    <span class="box">${done ? '✓' : ''}</span>${done ? 'Completed' : (locked ? 'Pass the quiz to continue' : 'Mark as read')}</button>`;
}

function quizHtml(l) {
  const result = quizResults[l.id];
  if (result) {
    return `<div class="quiz">
      <div class="quiz-result ${result.passed ? 'pass' : 'fail'}">
        <span><b>${result.score}/${result.total}</b> correct — ${result.passed ? 'quiz passed' : 'not passed yet'}</span>
        <button class="quiz-retry" data-quiz-retry="${l.id}">${result.passed ? 'Retake' : 'Try again'}</button>
      </div>
    </div>`;
  }

  const sel = quizSelections[l.id] || new Array(l.quiz.questions.length).fill(-1);
  return `<div class="quiz">
    <p class="quiz-sub">${l.quiz.questions.length} questions · need ${l.quiz.pass} correct to pass</p>
    ${l.quiz.questions.map((qq, qi) => `
      <div class="quiz-q">
        <p class="quiz-qtext">${qi + 1}. ${esc(qq.q)}</p>
        <div class="quiz-opts">${qq.options.map((opt, oi) => `
          <button class="quiz-opt ${sel[qi] === oi ? 'sel' : ''}" data-quiz-pick="${qi}:${oi}">${esc(opt)}</button>`).join('')}
        </div>
      </div>`).join('')}
    <button class="quiz-submit" data-quiz-submit="${l.id}" ${sel.includes(-1) ? 'disabled' : ''}>Submit answers</button>
  </div>`;
}

/* ---------------- search ---------------- */
function renderSearch(query) {
  const term = query.trim().toLowerCase();
  if (!term) return renderHome();
  const hits = FLAT.filter(l =>
    [l.title, l.summary, l.why, l.check.q, ...l.concepts.map(c => c.h + ' ' + c.p)]
      .join(' ').toLowerCase().includes(term));

  const mark = t => esc(t).replace(new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');

  el('viewRoot').innerHTML = `<div class="pane results">
    <h2>${hits.length} result${hits.length === 1 ? '' : 's'}</h2>
    <div class="rsub">for "${esc(query)}"</div>
    ${hits.length ? hits.map(l => `<button class="ritem" data-lesson="${l.id}">
      <span class="ritem-bar" style="background:${ACCENTS[l.series.accent].c}"></span>
      <span><b>${mark(l.title)}</b><p>${mark(l.summary)}</p>
      <i>${esc(l.series.title)} · ${esc(l.n)} · ${esc(l.dur)}</i></span></button>`).join('')
      : '<p style="color:var(--ink-3);font-size:14px">Nothing matched. Try a shorter term.</p>'}</div>`;
}

/* ============================================================
   ADMIN PORTAL
   ============================================================ */
let adminUsers = [], adminStats = null;

async function renderAdmin() {
  el('viewRoot').innerHTML = `<div class="pane admin"><div class="loading">Loading admin data…</div></div>`;
  try {
    const [u, s] = await Promise.all([api('/api/admin/users'), api('/api/admin/stats')]);
    adminUsers = u.users; adminStats = s;
  } catch (err) {
    el('viewRoot').innerHTML = `<div class="pane admin"><div class="auth-msg bad">${esc(err.message)}</div></div>`;
    return;
  }
  paintAdmin();
}

function renderAdminDashboard(others, approvedCount) {
  const countByLesson = Object.fromEntries((adminStats.lessonCompletions || []).map(r => [r.lesson_id, r.n]));
  const denom = Math.max(approvedCount, 1);

  const seriesBars = SERIES.map(s => {
    const done = s.lessons.reduce((sum, l) => sum + (countByLesson[l.id] || 0), 0);
    const possible = s.lessons.length * denom;
    return hBarRow(s.code, ACCENTS[s.accent].c, done, possible);
  }).join('');

  const top = [...others].sort((a, b) => b.completed - a.completed).slice(0, 6);
  const maxCompleted = Math.max(1, ...top.map(u => u.completed));
  const learnerBars = top.length
    ? top.map(u => hBarRow(u.name.split(' ')[0], 'var(--blue)', u.completed, Math.max(maxCompleted, FLAT.length))).join('')
    : '<p class="muted">No consultant activity yet.</p>';

  const quiz = adminStats.quiz || { attempts: 0, passed: 0 };
  const quizPassRate = quiz.attempts ? Math.round(quiz.passed / quiz.attempts * 100) : null;

  return `<div class="dash-card admin-dash">
    <div class="sec-label">Learning activity across the org</div>
    <div class="admin-dash-grid">
      <div>
        <div class="dash-subh">Completion by curriculum <em>% of approved consultants</em></div>
        <div class="dash-bars">${seriesBars}</div>
      </div>
      <div>
        <div class="dash-subh">Top learners <em>lessons completed</em></div>
        <div class="dash-bars">${learnerBars}</div>
      </div>
    </div>
    ${quiz.attempts ? `<div class="dash-quiz-foot">
      <b>${quiz.attempts}</b> quiz attempts <span class="sep">·</span> <b>${quizPassRate}%</b> pass rate
    </div>` : ''}
  </div>`;
}

function paintAdmin() {
  const pending = adminUsers.filter(u => u.status === 'pending');
  const others = adminUsers.filter(u => u.status !== 'pending');
  const total = FLAT.length;
  const st = adminStats.users;

  el('viewRoot').innerHTML = `
  <div class="pane admin">
    <div class="home-eyebrow">Administration</div>
    <h1 class="admin-h1">Consultant progress &amp; access</h1>

    <div class="admin-stats">
      <div class="astat"><b>${st.approved}</b><span>Approved</span></div>
      <div class="astat ${st.pending ? 'warn' : ''}"><b>${st.pending}</b><span>Awaiting approval</span></div>
      <div class="astat"><b>${st.active_7d}</b><span>Active this week</span></div>
      <div class="astat"><b>${adminStats.totalCompletions}</b><span>Lessons completed</span></div>
      <div class="astat"><b>${Object.keys(videos).length}</b><span>Videos published</span></div>
    </div>

    ${renderAdminDashboard(others, st.approved)}

    ${pending.length ? `
      <div class="sec-label">Awaiting approval <em class="lbl-count">${pending.length}</em></div>
      <div class="approve-list">
        ${pending.map(u => `<div class="approve-row">
          <div class="ar-who"><b>${esc(u.name)}</b><span>${esc(u.email)}</span>
            <i>Requested ${timeAgo(u.created_at)}</i></div>
          <div class="ar-actions">
            <button class="btn-approve" data-status="approved" data-uid="${u.id}">Approve</button>
            <button class="btn-reject" data-status="rejected" data-uid="${u.id}">Reject</button>
          </div></div>`).join('')}
      </div>` : ''}

    <div class="sec-label">All consultants <em class="lbl-count">${others.length}</em></div>
    <div class="utable">
      <div class="ut-head">
        <span>Name</span><span>Status</span><span>Progress</span><span>Last seen</span><span></span>
      </div>
      ${others.map(u => {
        const pct = total ? Math.round(u.completed / total * 100) : 0;
        return `<div class="ut-row" data-row="${u.id}">
          <span class="ut-who"><b>${esc(u.name)}</b><i>${esc(u.email)}</i></span>
          <span><em class="badge ${u.status}">${u.status}</em>${u.role === 'admin' ? '<em class="badge admin">admin</em>' : ''}</span>
          <span class="ut-prog">
            <span class="ut-bar"><span class="ut-fill" style="width:${pct}%"></span></span>
            <i>${u.completed}/${total}</i>
          </span>
          <span class="ut-seen">${u.last_seen_at ? timeAgo(u.last_seen_at) : '—'}</span>
          <span class="ut-menu">
            <button class="ut-btn" data-detail="${u.id}">Detail</button>
            <button class="ut-btn" data-more="${u.id}">⋯</button>
            <div class="ut-pop" id="pop-${u.id}">
              ${u.status === 'approved'
                ? `<button data-status="suspended" data-uid="${u.id}">Suspend access</button>`
                : `<button data-status="approved" data-uid="${u.id}">Approve access</button>`}
              <button data-role="${u.role === 'admin' ? 'consultant' : 'admin'}" data-uid="${u.id}">
                ${u.role === 'admin' ? 'Remove admin' : 'Make admin'}</button>
              <button data-reset="${u.id}">Reset password</button>
              <button class="danger" data-delete="${u.id}">Delete account</button>
            </div>
          </span></div>`;
      }).join('')}
    </div>

    <div class="admin-cols">
      <div>
        <div class="sec-label">Most completed lessons</div>
        <div class="poplist">${adminStats.popularLessons.length
          ? adminStats.popularLessons.map(p => {
              const l = LESSON_BY_ID[p.lesson_id];
              return `<div class="poprow"><span>${esc(l ? l.title : p.lesson_id)}
                <i>${esc(l ? l.series.title : '')}</i></span><b>${p.n}</b></div>`;
            }).join('')
          : '<p class="muted">No lessons completed yet.</p>'}</div>
      </div>
      <div>
        <div class="sec-label">Recent activity</div>
        <div class="poplist">${adminStats.recentActivity.map(a =>
          `<div class="poprow"><span>${esc(a.actor || 'system')} — ${esc(a.action.replace(/_/g, ' '))}
            <i>${esc(a.detail || '')}</i></span><b class="muted">${timeAgo(a.created_at)}</b></div>`).join('')}</div>
      </div>
    </div>
  </div>`;
}

function timeAgo(ts) {
  const d = (Date.now() - new Date(ts)) / 1000;
  if (d < 60) return 'just now';
  if (d < 3600) return Math.floor(d / 60) + 'm ago';
  if (d < 86400) return Math.floor(d / 3600) + 'h ago';
  if (d < 2592000) return Math.floor(d / 86400) + 'd ago';
  return new Date(ts).toLocaleDateString();
}

async function showUserDetail(uid) {
  const u = adminUsers.find(x => x.id === uid);
  const { progress: rows } = await api(`/api/admin/users/${uid}/progress`);
  const bySeries = {};
  rows.forEach(r => {
    const l = LESSON_BY_ID[r.lesson_id];
    if (!l) return;
    (bySeries[l.series.title] ||= []).push({ ...l, at: r.completed_at });
  });

  openModal(`
    <h3>${esc(u.name)}</h3>
    <p class="modal-sub">${esc(u.email)} · ${rows.length} of ${FLAT.length} lessons completed</p>
    ${Object.keys(bySeries).length
      ? Object.entries(bySeries).map(([title, items]) => `
        <div class="det-series"><h4>${esc(title)} <span>${items.length}</span></h4>
          ${items.map(i => `<div class="det-row"><span>${esc(i.n)} · ${esc(i.title)}</span>
            <i>${timeAgo(i.at)}</i></div>`).join('')}</div>`).join('')
      : '<p class="muted">No lessons completed yet.</p>'}`);
}

function openModal(html) {
  const wrap = document.createElement('div');
  wrap.className = 'modal-scrim';
  wrap.innerHTML = `<div class="modal"><button class="modal-x" data-modal-close>×</button>${html}</div>`;
  wrap.addEventListener('click', (e) => {
    if (e.target === wrap || e.target.closest('[data-modal-close]')) wrap.remove();
  });
  document.body.appendChild(wrap);
}

function openPasswordDialog(forced = false) {
  if (forced) localStorage.setItem('talan_pwdialog_seen_' + me.email, '1');
  openModal(`
    <h3>Change password</h3>
    <p class="modal-sub">${forced
      ? "You're signed in with a temporary password. Set your own now, or later from the account menu."
      : 'At least 10 characters, with upper, lower and a number.'}</p>
    <label class="ml">Current password</label><input type="password" id="pwCur" class="mi">
    <label class="ml">New password</label><input type="password" id="pwNew" class="mi">
    <div class="modal-msg" id="pwMsg"></div>
    <button class="auth-submit" id="pwGo">Update password</button>`);

  el('pwGo').addEventListener('click', async () => {
    const msg = el('pwMsg');
    try {
      await api('/api/me/password', {
        method: 'POST',
        body: JSON.stringify({ current: el('pwCur').value, next: el('pwNew').value })
      });
      msg.className = 'modal-msg good';
      msg.textContent = 'Password updated.';
      setTimeout(() => document.querySelector('.modal-scrim')?.remove(), 1200);
    } catch (err) {
      msg.className = 'modal-msg bad';
      msg.textContent = err.message;
    }
  });
}

/* ============================================================
   EVENTS
   ============================================================ */
async function onAppClick(e) {
  const t = e.target;

  if (t.closest('[data-home]')) {
    el('search').value = '';
    if (view === 'admin') {
      view = 'academy';
      const toggle = el('viewToggle');
      if (toggle) toggle.textContent = 'Admin';
      document.querySelector('.shell').classList.remove('no-side');
      el('searchWrap').style.display = '';
      el('overallWrap').style.display = '';
    }
    return renderHome();
  }

  const toggle = t.closest('[data-toggle]');
  if (toggle) return toggle.closest('.side-sec').classList.toggle('open');

  const cert = t.closest('[data-certificate]');
  if (cert) {
    e.stopPropagation();
    downloadCertificate(cert.dataset.certificate);
    return;
  }

  const openSeries = t.closest('[data-series-open]');
  if (openSeries) {
    const s = SERIES.find(x => x.code === openSeries.dataset.seriesOpen);
    if (s?.lessons.length) renderLesson(s.lessons[0].id);
    return;
  }

  const lb = t.closest('[data-lesson]');
  if (lb) {
    renderLesson(lb.dataset.lesson);
    el('sidebar').classList.remove('open');
    el('scrim').classList.remove('on');
    return;
  }

  const ch = t.closest('.concept-h');
  if (ch) {
    const conceptEl = ch.closest('.concept');
    conceptEl.classList.toggle('open');
    const idx = Number(conceptEl.dataset.conceptIdx);
    const l = LESSON_BY_ID[currentId];
    if (!openedConcepts[currentId]) openedConcepts[currentId] = new Set();
    openedConcepts[currentId].add(idx);
    if (l.series.progressiveCode && l.samples) {
      el('codeBox').innerHTML = codeSectionHtml(l, l.series);
    }
    return;
  }

  if (t.closest('[data-reveal]')) return el('check').classList.add('shown');

  const copy = t.closest('[data-copy]');
  if (copy) {
    const pre = copy.closest('.sample').querySelector('pre');
    try { await navigator.clipboard.writeText(pre.innerText); copy.textContent = 'Copied'; }
    catch { copy.textContent = 'Select manually'; }
    setTimeout(() => { copy.textContent = 'Copy'; }, 1600);
    return;
  }

  const go = t.closest('[data-go]');
  if (go?.dataset.go) return renderLesson(go.dataset.go);

  /* ---- quiz ---- */
  const pick = t.closest('[data-quiz-pick]');
  if (pick) {
    const [qi, oi] = pick.dataset.quizPick.split(':').map(Number);
    quizSelections[currentId][qi] = oi;
    el('quizBox').innerHTML = quizHtml(LESSON_BY_ID[currentId]);
    return;
  }

  const submit = t.closest('[data-quiz-submit]');
  if (submit) {
    const lessonId = submit.dataset.quizSubmit;
    const l = LESSON_BY_ID[lessonId];
    const sel = quizSelections[lessonId];
    const score = l.quiz.questions.reduce((n, qq, i) => n + (sel[i] === qq.correct ? 1 : 0), 0);
    const total = l.quiz.questions.length;
    const passed = score >= l.quiz.pass;
    quizResults[lessonId] = { score, total, passed };
    el('quizBox').innerHTML = quizHtml(l);
    if (lessonId === currentId) el('markBtn').outerHTML = markBtnHtml(l);
    try {
      await api(`/api/quiz/${encodeURIComponent(lessonId)}`, {
        method: 'PUT', body: JSON.stringify({ score, total, passed })
      });
    } catch { /* optimistic; corrected on next load */ }
    return;
  }

  const retry = t.closest('[data-quiz-retry]');
  if (retry) {
    const lessonId = retry.dataset.quizRetry;
    delete quizResults[lessonId];
    quizSelections[lessonId] = new Array(LESSON_BY_ID[lessonId].quiz.questions.length).fill(-1);
    el('quizBox').innerHTML = quizHtml(LESSON_BY_ID[lessonId]);
    if (lessonId === currentId) el('markBtn').outerHTML = markBtnHtml(LESSON_BY_ID[lessonId]);
    return;
  }

  if (t.closest('#markBtn')) {
    const nowDone = !progress.has(currentId);
    if (nowDone && videos[currentId]?.url && watchedPct < 0.8) {
      const pct = Math.round(watchedPct * 100);
      openModal(`<h3>Mark this lesson as read?</h3>
        <p class="modal-sub">You've watched about ${pct}% of its video so far.</p>
        <div class="modal-actions">
          <button class="btn-approve" id="confirmMark">Mark complete anyway</button>
          <button class="vid-cancel" data-modal-close>Keep watching</button></div>`);
      el('confirmMark').addEventListener('click', () => {
        document.querySelector('.modal-scrim')?.remove();
        completeLesson(true);
      });
      return;
    }
    completeLesson(nowDone);
    return;
  }

  /* ---- video (admin) ---- */
  if (t.closest('[data-vid-edit]')) {
    el('videoBox').innerHTML = videoFormHtml(LESSON_BY_ID[currentId]);
    el('vidUrl').focus();
    return;
  }
  if (t.closest('[data-vid-cancel]')) {
    el('videoBox').innerHTML = videoHtml(LESSON_BY_ID[currentId]);
    return;
  }
  if (t.closest('[data-vid-save]')) {
    const url = el('vidUrl').value.trim(), label = el('vidLabel').value.trim();
    try {
      await api(`/api/videos/${encodeURIComponent(currentId)}`, {
        method: 'PUT', body: JSON.stringify({ url, label })
      });
      videos[currentId] = { url, label };
      el('videoBox').innerHTML = videoHtml(LESSON_BY_ID[currentId]);
    } catch (err) {
      const n = el('vidNote'); n.textContent = err.message; n.classList.add('bad');
    }
    return;
  }
  if (t.closest('[data-vid-remove]')) {
    try {
      await api(`/api/videos/${encodeURIComponent(currentId)}`, { method: 'DELETE' });
      delete videos[currentId];
    } catch { /* ignore */ }
    el('videoBox').innerHTML = videoHtml(LESSON_BY_ID[currentId]);
    return;
  }

  /* ---- admin ---- */
  const more = t.closest('[data-more]');
  if (more) {
    e.stopPropagation();
    const pop = el('pop-' + more.dataset.more);
    document.querySelectorAll('.ut-pop.on').forEach(p => p !== pop && p.classList.remove('on'));
    pop.classList.toggle('on');
    return;
  }
  document.querySelectorAll('.ut-pop.on').forEach(p => p.classList.remove('on'));

  const detail = t.closest('[data-detail]');
  if (detail) return showUserDetail(parseInt(detail.dataset.detail, 10));

  const statusBtn = t.closest('[data-status]');
  if (statusBtn) {
    await api(`/api/admin/users/${statusBtn.dataset.uid}/status`, {
      method: 'POST', body: JSON.stringify({ status: statusBtn.dataset.status })
    });
    return renderAdmin();
  }

  const roleBtn = t.closest('[data-role]');
  if (roleBtn) {
    await api(`/api/admin/users/${roleBtn.dataset.uid}/role`, {
      method: 'POST', body: JSON.stringify({ role: roleBtn.dataset.role })
    });
    return renderAdmin();
  }

  const resetBtn = t.closest('[data-reset]');
  if (resetBtn) {
    const r = await api(`/api/admin/users/${resetBtn.dataset.reset}/reset-password`, { method: 'POST' });
    openModal(`<h3>Temporary password</h3>
      <p class="modal-sub">For ${esc(r.email)}. This is shown once — copy it now and send it to them securely.</p>
      <div class="temp-pw">${esc(r.temporaryPassword)}</div>
      <p class="muted">They should change it after signing in.</p>`);
    return;
  }

  const delBtn = t.closest('[data-delete]');
  if (delBtn) {
    const u = adminUsers.find(x => x.id === parseInt(delBtn.dataset.delete, 10));
    openModal(`<h3>Delete ${esc(u.name)}?</h3>
      <p class="modal-sub">This permanently removes their account, progress and notes. It cannot be undone.</p>
      <div class="modal-actions">
        <button class="btn-reject" id="confirmDel">Delete permanently</button>
        <button class="vid-cancel" data-modal-close>Cancel</button></div>`);
    el('confirmDel').addEventListener('click', async () => {
      await api(`/api/admin/users/${u.id}`, { method: 'DELETE' });
      document.querySelector('.modal-scrim')?.remove();
      renderAdmin();
    });
  }
}

let noteTimer;
function onAppInput(e) {
  if (e.target.id !== 'noteArea') return;
  const state = el('noteState');
  state.textContent = 'Saving…';
  clearTimeout(noteTimer);
  noteTimer = setTimeout(async () => {
    notes[currentId] = e.target.value;
    try {
      await api(`/api/notes/${encodeURIComponent(currentId)}`, {
        method: 'PUT', body: JSON.stringify({ body: e.target.value })
      });
      state.textContent = 'Saved';
    } catch { state.textContent = 'Not saved'; }
    setTimeout(() => { if (state) state.textContent = ''; }, 1500);
  }, 600);
}

document.addEventListener('keydown', (e) => {
  if (!me) return;
  const typing = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
  if (e.key === '/' && !typing) { e.preventDefault(); el('search')?.focus(); }
  if (typing || !currentId) return;
  const i = FLAT.findIndex(l => l.id === currentId);
  if (e.key === 'ArrowRight' && FLAT[i + 1]?.series === FLAT[i].series) renderLesson(FLAT[i + 1].id);
  if (e.key === 'ArrowLeft' && FLAT[i - 1]?.series === FLAT[i].series) renderLesson(FLAT[i - 1].id);
});

/* ============================================================
   BOOT
   ============================================================ */
async function boot() {
  if (!token) return renderAuth('login');
  try {
    if (!me) me = (await api('/api/me')).user;
    const state = await api('/api/state');
    progress = new Set(state.progress);
    notes = state.notes;
    videos = state.videos;
    quizResults = state.quizResults || {};
  } catch (err) {
    return; // signOut already handled inside api()
  }
  renderShell();
  renderHome();
  renderOverall();
  if (me.mustReset && !localStorage.getItem('talan_pwdialog_seen_' + me.email)) {
    openPasswordDialog(true);
  }
}

boot();
