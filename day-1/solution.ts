export const solve = (input: string) => {
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
  left.sort((a, b) => a - b);
  right.sort();
  const sumDifference = left.reduce((sum, l, index) => sum + Math.abs(l - right[index]), 0);
  return sumDifference.toString();
};
