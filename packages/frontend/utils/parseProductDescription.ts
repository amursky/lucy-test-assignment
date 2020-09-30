export function parseProductDescription(description: string): string[] {
  return description
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#[0]{0,}39;/gi, "'")
    .replace(/(<([^>]+)>)/gi, "")
    .replace(/[\s]{2,}/gi, " ")
    .split("&nbsp;")
    .filter(str => str.length)
    .map(str => str.trim());
}
