const parseReports = (input: string) => {
  const reports = input.split("\n");
  const reportValues = reports.map((r) => r.split(" "));
  const reportValuesAsNumbers = reportValues.map((r) => r.map((n) => parseInt(n)));
  return reportValuesAsNumbers;
};

export const reportIsSafe = (report: number[]) => {
  let isSafe = true;

  report.reduce((previousDifference, value, index, report) => {
    if (index + 1 < report.length) {
      const next = report[index + 1];
      const difference = value - next;

      // if the previous change was an increase and the current change is a decrease
      // or vice versa, the mutiplication will result in a negative number
      if (previousDifference * difference < 0) {
        isSafe = false;
      }

      const absoluteDiffernece = Math.abs(difference);
      if (absoluteDiffernece <= 0 || absoluteDiffernece > 3) {
        isSafe = false;
      }

      return difference;
    }
    return previousDifference;
  }, 0);

  return isSafe;
};

export const solvePart1 = (input: string) => {
  const reports = parseReports(input);

  const safeCount = reports.reduce((safeCount, report) => {
    if (reportIsSafe(report)) {
      return (safeCount += 1);
    } else {
      return safeCount;
    }
  }, 0);

  return safeCount.toString();
};

export const solvePart2 = (input: string) => {
  const reports = parseReports(input);
  return "output";
};
