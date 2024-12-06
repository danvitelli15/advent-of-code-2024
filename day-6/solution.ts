const directions: Record<string, { x: number; y: number }> = {
  "^": { x: 1, y: 0 },
  v: { x: -1, y: 0 },
  "<": { x: 0, y: 1 },
  ">": { x: 0, y: -1 },
};

const directionIndicators = "^>v<";

const turnRight = (direction: string) => directionIndicators[(directionIndicators.indexOf(direction) + 1) % 4];

interface MapCell {
  blocked: boolean;
  visited: boolean;
}

const parseInput = (input: string): [MapCell[][], string] => {
  const characterGrid = input.split("\n").map((line) => line.split(""));
  let startingDirection = "";
  const map = characterGrid.map((row) =>
    row.map((cell) => {
      const visited = directionIndicators.includes(cell);
      if (visited) {
        startingDirection = cell;
      }
      return { blocked: cell === "#", visited } as MapCell;
    })
  );
  return [map, startingDirection];
};

const mapPath = (startingMap: MapCell[][], startingDirection: string) => {
  const map = startingMap.slice();
  let x = map.findIndex((row) => row.some((cell) => cell.visited));
  let y = map[x].findIndex((cell) => cell.visited);
  let direction = startingDirection;

  let nextX = x;
  let nextY = y;

  while (nextX >= 0 && nextX < map.length && nextY >= 0 && nextY < map[nextX].length) {
    if (map[nextX][nextY].blocked) {
      direction = turnRight(direction);
      nextX = x - directions[direction].x;
      nextY = y - directions[direction].y;
    }

    x = nextX;
    y = nextY;

    map[x][y].visited = true;

    nextX = x - directions[direction].x;
    nextY = y - directions[direction].y;
  }

  return map;
};

export const solvePart1 = (input: string) => {
  const [map, startingDirection] = parseInput(input);
  const mappedPath = mapPath(map, startingDirection);
  const totalVisitedLocations = mappedPath.reduce((sum, row) => sum + row.filter((cell) => cell.visited).length, 0);
  return totalVisitedLocations.toString();
};

export const solvePart2 = (input: string) => {
  return "output";
};
