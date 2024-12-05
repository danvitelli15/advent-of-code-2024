import { assertEquals } from "@std/assert";
import { solvePart1, solvePart2 } from "./solution.ts";

const testInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

Deno.test("Day 4 - Part 1", () => {
  assertEquals(solvePart1(testInput), "18");
});

Deno.test("Day 4 - Part 2", () => {
  assertEquals(solvePart2(testInput), "expected output");
});
