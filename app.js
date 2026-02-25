(function () {
  'use strict';

  /* Matches are read from data.js (window.ORION_STREAMS). Edit only data.js to add/remove matches. */
  const streams = window.ORION_STREAMS || { football: [], nba: [] };

  const i18n = {
    en: {
      'nav.football': 'Football',
      'nav.nba': 'NBA',
      'hero.badge': 'Streams',
      'hero.title': 'Football & NBA',
      'hero.subtitle': 'On your screen',
      'hero.desc': 'Click Watch to see your match.',
      'section.football': 'Football',
      'section.nba': 'NBA',
      'table.match': 'Match',
      'table.league': 'League',
      'table.watch': 'Watch',
      'tabs.all': 'All',
      'tabs.premier': 'Premier League',
      'tabs.laliga': 'La Liga',
      'tabs.seriea': 'Serie A',
      'tabs.ucl': 'UEFA Champions',
      'tabs.regularSeason': 'Regular Season',
      'tabs.playoffs': 'Playoffs',
      'empty.noCategory': 'No streams in this category.',
      'modal.stream': 'Stream',
      'modal.placeholder': 'Select a stream to watch.',
      'modal.placeholderNoUrl': 'Add link1, link2, link3, link4 in data.js for this match.',
      'modal.note': 'In data.js set link1, link2, link3, link4 for each match.',
      'links.choose': 'Choose a link to open in a new tab:',
      'links.link1': 'Link 1',
      'links.link2': 'Link 2',
      'links.link3': 'Link 3',
      'links.link4': 'Link 4',
      'footer.disclaimer': 'OrionLive — For information only. Streams depend on providers.',
      'aria.close': 'Close',
      'aria.menu': 'Menu',
      'sport.football': 'Football',
      'sport.nba': 'NBA',
    },
  };
  const currentLang = 'en';

  function t(key) {
    const lang = i18n.en;
    return lang[key] != null ? lang[key] : key;
  }

  function applyTranslations() {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
      else el.textContent = val;
    });
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) closeBtn.setAttribute('aria-label', t('aria.close'));
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) menuBtn.setAttribute('aria-label', t('aria.menu'));
  }

  const footballTbody = document.getElementById('footballStreams');
  const nbaTbody = document.getElementById('nbaStreams');
  const modal = document.getElementById('streamModal');
  const modalTitle = document.getElementById('modalTitle');
  const linksButtons = document.getElementById('linksButtons');
  const modalLinksStep = document.getElementById('modalLinksStep');
  const modalStreamStep = document.getElementById('modalStreamStep');
  const streamEmbedInModal = document.getElementById('streamEmbedInModal');
  const btnBackLinks = document.getElementById('btnBackLinks');
  const modalClose = document.querySelector('.modal-close');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');

  function createStreamRow(item, sport) {
    const tr = document.createElement('tr');
    tr.className = 'stream-row';
    tr.dataset.id = item.id;
    tr.dataset.sport = sport;
    tr.dataset.league = item.league || '';
    const leagueText = item.league ? leagueLabel(item.league, sport) : '';
    const watchText = t('table.watch');
    tr.innerHTML = `
      <td class="td-match">${escapeHtml(item.title)}</td>
      <td class="td-league">${escapeHtml(leagueText)}</td>
      <td class="td-watch"><button type="button" class="btn-watch">${escapeHtml(watchText)}</button></td>
    `;
    tr.querySelector('.btn-watch').addEventListener('click', (e) => { e.stopPropagation(); openStream(item, sport); });
    tr.addEventListener('click', (e) => { if (!e.target.closest('.btn-watch')) openStream(item, sport); });
    return tr;
  }

  function leagueLabel(league, sport) {
    const key = sport === 'nba' ? (league === 'regular' ? 'tabs.regularSeason' : 'tabs.playoffs') : 'tabs.' + (league === 'premier' ? 'premier' : league === 'laliga' ? 'laliga' : league === 'seriea' ? 'seriea' : league === 'ucl' ? 'ucl' : league);
    return t(key);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function renderFootball() {
    footballTbody.innerHTML = '';
    streams.football.forEach((item) => footballTbody.appendChild(createStreamRow(item, 'football')));
  }

  function renderNBA() {
    nbaTbody.innerHTML = '';
    streams.nba.forEach((item) => nbaTbody.appendChild(createStreamRow(item, 'nba')));
  }

  function showStreamInModal(url) {
    streamEmbedInModal.innerHTML = '<iframe src="' + escapeHtml(url) + '" allowfullscreen></iframe>';
    if (modalLinksStep) modalLinksStep.style.display = 'none';
    if (modalStreamStep) modalStreamStep.style.display = 'block';
  }

  function showLinksStep() {
    streamEmbedInModal.innerHTML = '';
    if (modalStreamStep) modalStreamStep.style.display = 'none';
    if (modalLinksStep) modalLinksStep.style.display = 'block';
  }

  function openStream(item, sport) {
    window.open('player.html?matchId=' + encodeURIComponent(item.id) + '&link=1', '_blank', 'noopener,noreferrer');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    showLinksStep();
    linksButtons.innerHTML = '';
  }

  if (btnBackLinks) btnBackLinks.addEventListener('click', showLinksStep);

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => nav.classList.toggle('is-open'));
    navLinks.forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')));
  }

  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', function () {
      currentLang = this.value;
      localStorage.setItem('orionlive-lang', currentLang);
      applyTranslations();
      renderFootball();
      renderNBA();
    });
  }

  const sections = document.querySelectorAll('.section, .hero');
  function setActiveNav() {
    const top = window.scrollY + 80;
    let current = '';
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY;
      if (top >= offsetTop - 50) current = sec.id || '';
    });
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const isMatch = href === '#' + current;
      link.classList.toggle('active', isMatch);
    });
  }
  window.addEventListener('scroll', setActiveNav);
  setActiveNav();

  applyTranslations();
  renderFootball();
  renderNBA();

  // Ad: 1st click → ad, 2nd → direct, 3rd → ad, 4th → direct…
  var AD_URL = 'https://www.effectivegatecpm.com/jevjka47b?key=720eea0f218beda4532041c38ac49fab';
  var AD_COUNT_KEY = 'orionlive-ad-count';
  var AD_DATE_KEY = 'orionlive-ad-date';

  function getAdCount() {
    try {
      var today = new Date().toDateString();
      var savedDate = localStorage.getItem(AD_DATE_KEY);
      var savedCount = localStorage.getItem(AD_COUNT_KEY);
      if (savedDate !== today) return 0;
      var n = parseInt(savedCount, 10);
      return isNaN(n) ? 0 : n;
    } catch (e) { return 0; }
  }

  function incAdCount() {
    try {
      var today = new Date().toDateString();
      var c = getAdCount();
      localStorage.setItem(AD_COUNT_KEY, String(c + 1));
      localStorage.setItem(AD_DATE_KEY, today);
    } catch (e) {}
  }

  document.addEventListener('click', function () {
    var count = getAdCount();
    if (count % 2 === 0) window.open(AD_URL, '_blank', 'noopener,noreferrer');
    incAdCount();
  }, true);
})();
