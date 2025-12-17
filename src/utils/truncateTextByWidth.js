/**
 * Truncate text based on max width (px)
 * @param {string} text
 * @param {number} maxWidth
 * @param {string} font - ex: "400 14px Inter"
 * @param {string} ellipsis
 */
export function truncateTextByWidth(
  text,
  maxWidth,
  font = "400 14px system-ui",
  ellipsis = "...",
) {
  if (!text || maxWidth <= 0) return "";

  const canvas =
    truncateTextByWidth._canvas ||
    (truncateTextByWidth._canvas = document.createElement("canvas"));

  const ctx = canvas.getContext("2d");
  ctx.font = font;

  // Nếu vừa → trả nguyên text
  if (ctx.measureText(text).width <= maxWidth) {
    return text;
  }

  let left = 0;
  let right = text.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const truncated = text.slice(0, mid) + ellipsis;

    if (ctx.measureText(truncated).width <= maxWidth) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return text.slice(0, left - 1) + ellipsis;
}
