export const solvePart1 = (input: string) => {
  const validCommandRegex = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;

  const matches = input.match(validCommandRegex);

  if (!matches) {
    return "0";
  }

  const resultTotal = matches.reduce((total, match) => {
    const numbers = match.match(/[0-9]{1,3}/g);
    if (!numbers) {
      return total;
    }
    const [a, b] = numbers;
    return total + parseInt(a) * parseInt(b);
  }, 0);

  return resultTotal.toString();
};

// export const solvePart2 = (input: string) => {
//   const validMulCommandRegex = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
//   const enabledStretchesRegex = /(^|do\(\))(.*?)(don't\(\)|$)/g;

//   const enabledStretches = input.match(enabledStretchesRegex);

//   if (!enabledStretches) {
//     return "0";
//   }

//   console.log(enabledStretches);

//   const enabledCommands = "".concat(...enabledStretches);

//   console.log(enabledCommands);

//   const matches = enabledCommands.match(validMulCommandRegex);

//   if (!matches) {
//     return "0";
//   }

//   console.log(matches);

//   const resultTotal = matches.reduce((total, match) => {
//     const numbers = match.match(/[0-9]{1,3}/g);
//     if (!numbers) {
//       return total;
//     }
//     const [a, b] = numbers;
//     return total + parseInt(a) * parseInt(b);
//   }, 0);

//   return resultTotal.toString();
// };

export const solvePart2 = (input: string) => {
  const validMulCommandRegex = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;

  const splitOnDos = input.split("do()");

  const enabledStretches = splitOnDos.map((stretch) => {
    const splitOnDonts = stretch.split("don't()");
    return splitOnDonts[0];
  });

  const enabledCommands = enabledStretches.join();

  const matches = enabledCommands.match(validMulCommandRegex);

  if (!matches) {
    return "0";
  }

  const resultTotal = matches.reduce((total, match) => {
    const numbers = match.match(/[0-9]{1,3}/g);
    if (!numbers) {
      return total;
    }
    const [a, b] = numbers;
    return total + parseInt(a) * parseInt(b);
  }, 0);

  return resultTotal.toString();
};
