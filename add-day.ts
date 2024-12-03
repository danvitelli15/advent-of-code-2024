const encoder = new TextEncoder();
const day = Deno.args[0];

const dayDir = `./day-${day}`;

Deno.mkdirSync(dayDir);
const descriptionRespoinse = await fetch(`https://adventofcode.com/2024/day/${day}`).then((res) => res.text());

const description = descriptionRespoinse
  .match(/<article[^>]*>([\s\S]*?)<\/article>/)?.[1]
  .replaceAll(/<h2>/g, "# ")
  .replaceAll(/<\/h2>/g, "\n")
  .replaceAll(/<p>/g, "\n")
  .replaceAll(/<\/p>/g, "")
  .replaceAll(/<pre><code>/g, "```\n")
  .replaceAll(/<\/code><\/pre>/g, "```")
  .replaceAll(/<code>/g, "`")
  .replaceAll(/<\/code>/g, "`")
  .replaceAll(/<em>/g, "*")
  .replaceAll(/<\/em>/g, "*")
  .replaceAll(/<li>/g, "- ")
  .replaceAll(/<\/?[^>]+>/g, "");
Deno.writeTextFileSync(`${dayDir}/readme.md`, description || "");

Deno.writeFileSync(`${dayDir}/input.txt`, encoder.encode("input text here"));
Deno.writeFileSync(
  `${dayDir}/solution.ts`,
  encoder.encode(`export const solve = (input: string) => {
  const output = "";
  console.log(input);
  return output;
};

const main = () => {
  const encoder = new TextEncoder();
  const input = Deno.readTextFileSync('./input.txt');
  const output = solve(input);
  Deno.writeFileSync('./output.txt', encoder.encode(output));
}

main();`)
);

Deno.writeFileSync(
  `${dayDir}/test.ts`,
  encoder.encode(
    `import { assertEquals } from '@std/assert';
import { solve } from './solution.ts';

Deno.test('Day ${day}', () => {
  assertEquals(solve('example input'), 'expected output');
});`
  )
);
