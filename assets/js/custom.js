// Theme toggle
(function() {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// Categories horizontal scroll
(function() {
  var strip = document.getElementById('categories-strip');
  var prev = document.getElementById('cat-prev');
  var next = document.getElementById('cat-next');
  if (!strip) return;
  if (prev) prev.addEventListener('click', function() { strip.scrollBy({ left: -300, behavior: 'smooth' }); });
  if (next) next.addEventListener('click', function() { strip.scrollBy({ left: 300, behavior: 'smooth' }); });
})();
