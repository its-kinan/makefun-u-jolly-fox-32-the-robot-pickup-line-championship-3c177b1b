// The Robot Pickup Line Championship entry: write one pickup line a
// robot could use to /output/entry.txt.
//
// The line, and why it is built this way:
// - Setup: the robot failed its Turing test — the one test every machine
//   knows, where the whole point is to pass as human. Failing it is
//   already a confession, and it frames everything after as a machine
//   talking, not a human line with a beep pasted on.
// - Punchline: the robot failed because it answered every question in
//   binary and then asked the examiner for their number. The failure
//   itself IS the pickup line — the robot cannot help flirting even
//   while being tested — and the turn lands from an angle the reader
//   did not see coming: binary answers are the most machine thing
//   possible, and the number request turns the exam into a date.
// - Economy: one line, no setup beyond the failed test, no explanation
//   after the punchline. Charming rather than creepy: bold, self-aware,
//   and the examiner is the one being charmed.
// - Nothing stock: no Wi-Fi, no charging cable, no "beep boop" as the
//   joke itself — binary is the mechanism, the number is the twist.
//
// Deterministic: no network, no clock, no randomness — the same bytes
// on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Draft 2 (revised): "every question" became "everything" — five
// characters tighter, and the read now hurries to the punchline instead
// of lingering on the exam. The exam context already implies questions,
// so nothing is lost, and the punchline (asking the examiner for their
// number) lands one beat sooner. The line itself is unchanged in shape:
// failed Turing test, binary answers, number request.
const TEXT =
  "I failed my Turing test today — I answered everything in binary, then asked the examiner for their number.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf-8");
}

main();
