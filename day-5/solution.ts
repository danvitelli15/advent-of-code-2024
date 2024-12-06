const parseInput = (input: string) => {
  const [rules, pages] = input.split("\n\n");
  const ruleLines = rules.split("\n");
  const pageLines = pages.split("\n");
  const ruleParts = ruleLines.map((line) => {
    const numbers = line.split("|");
    return numbers.map((n) => parseInt(n));
  });
  const pageNumbers = pageLines.map((line) => {
    const numbers = line.split(",");
    return numbers.map((n) => parseInt(n));
  });
  return [ruleParts, pageNumbers];
};

/*
The 2functions preceeded with DOES_NOT_WORK were a first attempt at solving the problem that assumed 
that the full dataset would include a comprehensive list of rules like the small example did.
If the rules do describe every possible comparison, it is possible to generate a correct order of all the numbers
and compare the sets to validate to that. However, the full dataset does not include a comprehensive list of rules
and the rules are only a small subset of the possible comparisons. This means that the rules cannot be used to generate
a correct order of all the numbers and the sets cannot be compared to that order to validate them.
*/

const DOES_NOT_WORK_mergeRules = (rules: number[][]) => {
  const groupedByAfter: Record<number, number[]> = {};
  rules.forEach(([before, after]) => {
    if (!(before in groupedByAfter)) {
      groupedByAfter[before] = [];
    }
    if (!(after in groupedByAfter)) {
      groupedByAfter[after] = [];
    }
    groupedByAfter[after].push(before);
  });
  const afterLengths = Object.entries(groupedByAfter)
    .sort((first, second) => first[1].length - second[1].length)
    .map(([number]) => parseInt(number));
  return afterLengths;
};

const DOES_NOT_WORK_validateSet = (set: number[], correctOrder: number[]) => {
  let isValid = true;
  const setInOrder = correctOrder.filter((number) => set.includes(number));
  set.forEach((number, index) => {
    if (number !== setInOrder[index]) {
      isValid = false;
    }
  });
  return isValid;
};

const validateSet = (set: number[], rules: number[][]) => {
  const getValidFollowers = (number: number) =>
    rules.filter(([before]) => before === number).map(([_, after]) => after);

  const isValid = set.every((number, index) => {
    if (index === set.length - 1) {
      return true;
    }
    const followers = getValidFollowers(number);
    const nextNumber = set[index + 1];
    return followers.includes(nextNumber);
  });

  return isValid;
};

export const solvePart1 = (input: string) => {
  const [rules, pages] = parseInput(input);
  const validSets = pages.filter((set) => validateSet(set, rules));
  const centerNumbers = validSets.map((set) => set[Math.floor(set.length / 2)]);
  const sumOfCenterNumbers = centerNumbers.reduce((sum, number) => sum + number, 0);
  return sumOfCenterNumbers.toString();
};

export const solvePart2 = (input: string) => {
  return "output";
};
