import { assertEquals } from "@std/assert";
import { reportIsSafe, solvePart1, solvePart2 } from "./solution.ts";

const testInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

Deno.test("Day 2 - Part 1 - should be 2 safe records", () => {
  assertEquals(solvePart1(testInput), "2");
});

Deno.test("Day 2 - Part 1 - Records all decrease by 1 or 2", () => {
  assertEquals(reportIsSafe([7, 6, 4, 2, 1]), true);
});

Deno.test("Day 2 - Part 1 - increase of more than 3", () => {
  assertEquals(reportIsSafe([1, 2, 7, 8, 9]), false);
});

Deno.test("Day 2 - Part 1 - decrease of more than 3", () => {
  assertEquals(reportIsSafe([9, 7, 6, 2, 1]), false);
});

Deno.test("Day 2 - Part 1 - both increase and decrease", () => {
  assertEquals(reportIsSafe([1, 3, 2, 4, 5]), false);
});

Deno.test("Day 2 - Part 1 - unchanged value", () => {
  assertEquals(reportIsSafe([8, 6, 4, 4, 1]), false);
});

Deno.test("Day 2 - Part 1 - Records all increase by 1, 2, or 3", () => {
  assertEquals(reportIsSafe([1, 3, 6, 7, 9]), true);
});

Deno.test("Day 2 - Part 2", () => {
  assertEquals(solvePart2(testInput), "expected output");
});
