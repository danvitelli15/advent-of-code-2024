import { solvePart1, solvePart2 } from "./solution.ts";

const main = () => {
  const encoder = new TextEncoder();
  const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);
  const outputPart1 = solvePart1(input);
  const outputPart2 = solvePart2(input);
  Deno.writeFileSync(
    `${import.meta.dirname}/output.txt`,
    encoder.encode(`Part 1: ${outputPart1}\nPart 2: ${outputPart2}`)
  );
};

main();
