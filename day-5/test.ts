import { assertEquals } from "@std/assert";
import { solvePart1, solvePart2 } from "./solution.ts";

const testInput = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

Deno.test("Day 5 - Part 1", () => {
  assertEquals(solvePart1(testInput), "143");
});

Deno.test("Day 5 - Part 2", () => {
  assertEquals(solvePart2(testInput), "123");
});
