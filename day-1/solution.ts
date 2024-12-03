const getLeftAndRightLists = (input: string) => {
  const inputRows = input.split("\n");
  const [left, right] = inputRows.reduce(
    ([left, right], row) => {
      const [l, r] = row.split("   ").map((n) => parseInt(n));
      return [
        [...left, l],
        [...right, r],
      ];
    },
    [new Array<number>(), new Array<number>()]
  );
  return [left, right];
};

export const solvePart1 = (input: string) => {
  const [left, right] = getLeftAndRightLists(input);
  left.sort((a, b) => a - b);
  right.sort();
  const sumDifference = left.reduce((sum, l, index) => sum + Math.abs(l - right[index]), 0);
  return sumDifference.toString();
};

export const solvePart2 = (input: string) => {
  const [left, right] = getLeftAndRightLists(input);
  const appearencesInRight = right.reduce((appearencesInRight, r) => {
    if (r in appearencesInRight) {
      appearencesInRight[r]++;
    } else {
      appearencesInRight[r] = 1;
    }
    return appearencesInRight;
  }, {} as Record<string, number>);
  const result = left.reduce((sum, l) => {
    if (l in appearencesInRight) {
      return sum + l * appearencesInRight[l];
    }
    return sum;
  }, 0);
  return result.toString();
};
