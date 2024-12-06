import { assertEquals } from "@std/assert";
import { solvePart1, solvePart2 } from "./solution.ts";

const testInput = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

Deno.test("Day 6 - Part 1", () => {
  assertEquals(solvePart1(testInput), "41");
});

Deno.test("Day 6 - Part 2", () => {
  assertEquals(solvePart2(testInput), "expected output");
});
