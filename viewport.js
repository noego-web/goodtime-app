/*
 * A phone's browser leaves the page ~150 px shorter than the app gets (the
 * address and tab bars), so the road had only a short stretch between the
 * avatar and the horizon, and the time marks, the avatar and the buttons
 * looked oversized. On phones the page is drawn slightly smaller, as on a
 * taller screen. Computers and tablets are left alone.
 */
(function () {
  try {
    if (!window.matchMedia || !window.matchMedia('(pointer: coarse)').matches) return;
    var shortSide = Math.min(screen.width, screen.height);
    var longSide = Math.max(screen.width, screen.height);
    if (!shortSide || shortSide >= 600) return;
    var scale = Math.max(0.8, Math.min(1, (longSide - 150) / 820));
    if (scale > 0.97) return;
    scale = Math.round(scale * 100) / 100;
    var meta = document.querySelector('meta[name="viewport"]');
    if (!meta) return;
    window.__goodtimePageScale = scale;
    meta.setAttribute(
      'content',
      'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no, viewport-fit=cover'
    );
  } catch (e) {}
})();
