export function isEmpty(obj: unknown): boolean {
  if (Array.isArray(obj)) {
    return !obj.length;
  }

  if (!obj) {
    return true;
  }

  if (typeof obj === "object") {
    return !Object.entries(obj).length;
  }

  return !obj;
}
