import { assertEquals } from "@std/assert";
import { solvePart1, solvePart2 } from "./solution.ts";

const testInput = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

Deno.test("Day 3 - Part 1", () => {
  assertEquals(solvePart1(testInput), "161");
});

Deno.test("Day 3 - Part 2", () => {
  assertEquals(solvePart2(testInput), "48");
});
