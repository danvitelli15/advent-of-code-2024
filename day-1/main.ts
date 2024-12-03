import { solve } from "./solution.ts";

const main = () => {
  const encoder = new TextEncoder();
  const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);
  const output = solve(input);
  Deno.writeFileSync(`${import.meta.dirname}/output.txt`, encoder.encode(output));
};

main();
