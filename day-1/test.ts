import { assertEquals } from "@std/assert";
import { solve } from "./solution.ts";

const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

Deno.test("Day 1", () => {
  assertEquals(solve(testInput), "11");
});
