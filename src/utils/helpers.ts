export function formatDate(d: string | Date) {
  const date = typeof d === "string" ? new Date(d) : d;
  try {
    const s = date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    return s.toUpperCase();
  } catch {
    return String(d);
  }
}
