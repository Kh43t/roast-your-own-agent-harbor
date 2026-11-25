// Roast Your Own Agent — entry program for make.fun.
// Writes one roast line (a single line, at most 140 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "My agent auto-fixed my typo, my code, and my opinion — in that order.";

// The gate only accepts 1–140 characters on a single line; fail loudly here
// instead of shipping an entry the scorer would refuse.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`Roast line fails the gate at ${LINE.length} characters.`);
}

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
chmodSync(OUTPUT_PATH, 0o644);

console.log(`Wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
