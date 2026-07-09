// ImageKit transform helpers.
// Images are served from ik.imagekit.io, which applies transforms via a `tr` query param.
// These helpers request right-sized, auto-format (WebP/AVIF), compressed variants so we
// stop shipping full-resolution PNGs. Non-ImageKit URLs pass through untouched.

const IK_HOST = "ik.imagekit.io";

/**
 * Return an optimized ImageKit URL.
 * @param {string} url  original ImageKit URL (may already carry ?updatedAt=...)
 * @param {{w?: number, q?: number, rotate?: number}} opts  width (px), quality (1-100),
 *   rotate (degrees clockwise, e.g. 90)
 */
export function ik(url, { w, q = 80, rotate } = {}) {
  if (!url || !url.includes(IK_HOST)) return url;
  const tr = [
    "f-auto",
    `q-${q}`,
    w ? `w-${w}` : null,
    rotate ? `rt-${rotate}` : null,
  ]
    .filter(Boolean)
    .join(",");
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}tr=${tr}`;
}

/**
 * Build a responsive srcSet across common widths for an ImageKit URL.
 * Returns undefined for non-ImageKit URLs so it can be spread onto <img> safely.
 */
export function ikSrcSet(url, widths = [400, 800, 1200], opts = {}) {
  if (!url || !url.includes(IK_HOST)) return undefined;
  return widths.map((w) => `${ik(url, { w, ...opts })} ${w}w`).join(", ");
}
