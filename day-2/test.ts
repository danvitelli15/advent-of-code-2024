import { assertEquals } from "@std/assert";
import { solvePart1, solvePart2 } from "./solution.ts";

const testInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

Deno.test("Day 2 - Part 1", () => {
  assertEquals(solvePart1(testInput), "2");
});

Deno.test("Day 2 - Part 2", () => {
  assertEquals(solvePart2(testInput), "expected output");
});
