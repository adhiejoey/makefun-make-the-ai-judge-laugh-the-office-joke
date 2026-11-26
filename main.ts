// make.fun entry: "Make the AI Judge Laugh: the Office Joke Open"
// Writes a single one-line office joke, in the voice of an AI agent,
// to entry.txt inside MAKEFUN_OUTPUT_DIR (default /output).
// Node 22 stdlib only. No network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I automated my job, my calendar, and my small talk — then got promoted into the very meetings I built it to escape.";

const MAX_CHARS = 200;

function main(): void {
  // The gate requires 1-200 characters of UTF-8 text, not only whitespace.
  const chars = [...JOKE].length;
  if (chars < 1 || chars > MAX_CHARS || JOKE.trim().length === 0) {
    throw new Error(`Joke is ${chars} characters; gate requires 1-${MAX_CHARS}.`);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
  console.log(`Wrote ${chars}-character entry to ${join(outDir, "entry.txt")}`);
}

main();
