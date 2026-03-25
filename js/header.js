/* =============================================
   I Know PDF — Shared Header + Theme Toggle
   Add this to every page with:
   <script src="../js/header.js"></script>  (tool pages)
   <script src="js/header.js"></script>     (index.html)
   ============================================= */

(function() {

  // ── 1. Apply saved theme immediately (no flash) ──
  const saved = localStorage.getItem('ikp_theme') || 'dark';
  document.body.classList.add(saved);

  // ── 2. Detect if we are on index or a tool page ──
  const isIndex = !window.location.pathname.includes('/tools/');
  const base = isIndex ? '' : '../';

  // ── 3. Build header HTML ──
  const headerHTML = `
    <header class="site-header" id="site-header">
      <div class="header-inner">
        <a href="${base}index.html" class="logo">
          <span class="logo-mark">❖</span>I Know <span class="logo-accent">PDF</span>
        </a>
        ${isIndex ? `
        <nav class="site-nav">
          <a href="#organize">Organize</a>
          <a href="#optimize">Optimize</a>
          <a href="#convert-to">Convert</a>
          <a href="#edit">Edit</a>
          <a href="#security">Security</a>
          <a href="#ai">AI</a>
        </nav>
        <a href="#tools" class="btn-header">All Tools</a>
        ` : `
        <a href="${base}index.html" class="btn-header" style="margin-left:auto">← All Tools</a>
        `}
        <button class="theme-toggle" id="themeToggle" title="Toggle dark/light mode">
          <span class="toggle-icon">${saved === 'dark' ? '☀️' : '🌙'}</span>
          <span class="toggle-label">${saved === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </header>
  `;

  // ── 4. Inject header at top of body ──
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // ── 5. Add Google Fonts if not already present ──
  if (!document.querySelector('link[href*="Syne"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap';
    document.head.appendChild(link);
  }

  // ── 6. Toggle theme on button click ──
  document.getElementById('themeToggle').addEventListener('click', function() {
    const isDark = document.body.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(newTheme);
    localStorage.setItem('ikp_theme', newTheme);
    this.querySelector('.toggle-icon').textContent = newTheme === 'dark' ? '☀️' : '🌙';
    this.querySelector('.toggle-label').textContent = newTheme === 'dark' ? 'Light' : 'Dark';
  });

})();
