export function readingTime(text = "") {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export function sortByDate(posts) {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}
