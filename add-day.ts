import { htmlToMd } from "./html-to-md/html-to-md.ts";

const encoder = new TextEncoder();
const day = Deno.args[0];

const dayDir = `./day-${day}`;

Deno.mkdirSync(dayDir);
const descriptionRespoinse = await fetch(`https://adventofcode.com/2024/day/${day}`).then((res) => res.text());

const description = htmlToMd(descriptionRespoinse);
Deno.writeTextFileSync(`${dayDir}/readme.md`, description || "");

Deno.writeFileSync(`${dayDir}/input.txt`, encoder.encode("input text here"));
Deno.writeFileSync(
  `${dayDir}/solution.ts`,
  encoder.encode(`export const solvePart1 = (input: string) => {
  const output = "";
  console.log(input);
  return output;
};

export const solvePart2 = (input: string) => {
  const output = "";
  console.log(input);
  return output;
};`)
);
Deno.writeFileSync(
  `${dayDir}/main.ts`,
  encoder.encode(`import { solvePart1, solvePart2 } from './solution.ts';
    
const main = () => {
  const encoder = new TextEncoder();
  const input = Deno.readTextFileSync(\`${import.meta.dirname}/input.txt\`);
  const outputPart1 = solvePart1(input);
  const outputPart2 = solvePart2(input);
  Deno.writeFileSync(\`${
    import.meta.dirname
  }/output.txt\`, encoder.encode(\`Output Part 1: \${outputPart1}\\nOutput Part 2: \${outputPart2}\`));
}

main();`)
);

Deno.writeFileSync(
  `${dayDir}/test.ts`,
  encoder.encode(
    `import { assertEquals } from '@std/assert';
import { solvePart1, solvePart2 } from './solution.ts';

const testInput = \`\`;

Deno.test('Day ${day} - Part 1', () => {
  assertEquals(solvePart1(testInput), 'expected output');
});

Deno.test('Day ${day} - Part 2', () => {
  assertEquals(solvePart2(testInput), 'expected output');
});`
  )
);
