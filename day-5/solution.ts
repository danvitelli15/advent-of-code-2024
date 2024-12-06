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

const mergeRules = (rules: number[][]) => {
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

const fixSet = (set: number[], rules: number[][]) => {
  const relevantRules = rules.filter(([before]) => set.includes(before));
  const correctOrderForSet = mergeRules(relevantRules);
  const correctedSet = correctOrderForSet.filter((number) => set.includes(number));
  return correctedSet;
};

export const solvePart2 = (input: string) => {
  const [rules, pages] = parseInput(input);
  const invalidSets = pages.filter((set) => !validateSet(set, rules));
  const fixedSets = invalidSets.map((set) => fixSet(set, rules));
  const centerNumbers = fixedSets.map((set) => set[Math.floor(set.length / 2)]);
  const sumOfCenterNumbers = centerNumbers.reduce((sum, number) => sum + number, 0);
  return sumOfCenterNumbers.toString();
};
