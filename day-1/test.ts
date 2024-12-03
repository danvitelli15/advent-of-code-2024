import { assertEquals } from "@std/assert";
import { solvePart1, solvePart2 } from "./solution.ts";

const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

Deno.test("Day 1 - Part 1", () => {
  assertEquals(solvePart1(testInput), "11");
});

Deno.test("Day 1 - Part 2", () => {
  assertEquals(solvePart2(testInput), "31");
});
