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
  return "output";
};