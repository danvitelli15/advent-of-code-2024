import { htmlToMd } from "./html-to-md.ts";

const convert = () => {
  const encoder = new TextEncoder();
  const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);
  const output = htmlToMd(input);
  Deno.writeFileSync(`${import.meta.dirname}/output.txt`, encoder.encode(output));
};

convert();
