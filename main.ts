import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The senator who wrote the 400-page AI Safety Act still emails his staff a Word file named FINAL_FINAL.docx and asks them to 'make it a PDF' — by which he means rename it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const text = LINE.trim();
if (text.length < 1 || text.length > 320) {
  throw new Error(`entry length ${text.length} is outside the 1-320 gate`);
}
if (!text.replace(/\s/g, "")) {
  throw new Error("entry must not be only whitespace");
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}

// The roast's turn: the senator's authority (a 400-page AI Safety Act)
// is undercut in the last few words by the file he cannot convert.
console.log(`entry: ${text.length} chars`);

writeFileSync(`${outDir}/entry.txt`, text, "utf8");
