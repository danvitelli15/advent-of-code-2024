export const solve = (input: string) => {
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

main();