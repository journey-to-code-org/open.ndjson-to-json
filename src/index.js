export function ndjsonToJson(input, options = {}) {
  if (typeof input !== "string") throw new TypeError("Expected input to be a string");
  const { ignoreBlank = true } = options;
  const lines = input.split(/\r?\n/u);
  const out = [];
  for (let i=0;i<lines.length;i++) {
    const line = lines[i].trim();
    if (!line && ignoreBlank) continue;
    try { out.push(JSON.parse(line)); }
    catch (error) { throw new SyntaxError(`Invalid JSON on line ${i+1}: ${error.message}`); }
  }
  return out;
}
export function jsonToNdjson(values) {
  if (!Array.isArray(values)) throw new TypeError("Expected values to be an array");
  return values.map(v => JSON.stringify(v)).join("\n");
}
