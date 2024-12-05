const parseInput = (input: string) => {
  const lines = input.split("\n");
  const grid = lines.map((line) => line.split(""));
  return grid;
};

const directions: Record<string, [number, number]> = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1],
  upLeft: [-1, -1],
  upRight: [-1, 1],
  downLeft: [1, -1],
  downRight: [1, 1],
};

const pullStringFromGrid = (grid: string[][], cords: [number, number], direction: [number, number], maxLength = 4) => {
  let [x, y] = cords;
  const [dx, dy] = direction;
  let string = "";
  while (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && string.length < maxLength) {
    string += grid[x][y];
    x += dx;
    y += dy;
  }
  return string;
};

export const solvePart1 = (input: string) => {
  const searchGrid = parseInput(input);

  const letterXCords = searchGrid.reduce((cords, row, rowIndex) => {
    const xIndexes = row.reduce((yCords, cell, cellIndex) => {
      if (cell === "X") {
        yCords.push(cellIndex);
      }
      return yCords;
    }, new Array<number>());
    return cords.concat(xIndexes.map((y) => [rowIndex, y]));
  }, new Array<[number, number]>());

  const stringOccurances = letterXCords.reduce((stringOccurances, cords) => {
    const stringsOriginatingAtCords = Object.values(directions).map((direction) =>
      pullStringFromGrid(searchGrid, cords, direction)
    );
    stringOccurances += stringsOriginatingAtCords.filter((string) => string === "XMAS").length;
    return stringOccurances;
  }, 0);

  return stringOccurances.toString();
};

export const solvePart2 = (input: string) => {
  const searchGrid = parseInput(input);

  const letterACords = searchGrid.reduce((cords, row, rowIndex) => {
    const xIndexes = row.reduce((yCords, cell, cellIndex) => {
      if (cell === "A") {
        yCords.push(cellIndex);
      }
      return yCords;
    }, new Array<number>());
    return cords.concat(xIndexes.map((y) => [rowIndex, y]));
  }, new Array<[number, number]>());

  const xStringSets = letterACords.reduce((xStringSets, aCords) => {
    const [centerX, centerY] = aCords;
    const downLeft = pullStringFromGrid(
      searchGrid,
      [centerX + directions.upRight[0], centerY + directions.upRight[1]],
      directions.downLeft,
      3
    );
    const downRight = pullStringFromGrid(
      searchGrid,
      [centerX + directions.upLeft[0], centerY + directions.upLeft[1]],
      directions.downRight,
      3
    );
    xStringSets.push([downLeft, downRight]);
    return xStringSets;
  }, new Array<[string, string]>());

  const masXs = xStringSets.filter(
    (set) => (set[0] === "MAS" || set[0] === "SAM") && (set[1] === "MAS" || set[1] === "SAM")
  ).length;

  return masXs.toString();
};
