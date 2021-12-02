enum Direction {
    Up,
    Down,
    Left,
    Right,
}

export function getOppositeDirection(direction: Direction): Direction {
  switch (direction) {
    case Direction.Up:
      return Direction.Down;
    case Direction.Down:
      return Direction.Up;
    case Direction.Left:
      return Direction.Right;
    case Direction.Right:
      return Direction.Left;
    default:
      throw new Error('Invalid direction');
  }
}

export function getOffsetX(direction: Direction): number {
  switch (direction) {
    case Direction.Up:
    case Direction.Down:
      return 0;
    case Direction.Left:
      return -1;
    case Direction.Right:
      return 1;
    default:
      throw new Error('Invalid direction');
  }
}

export function getOffsetY(direction: Direction): number {
  switch (direction) {
    case Direction.Up:
      return -1;
    case Direction.Down:
      return 1;
    case Direction.Left:
    case Direction.Right:
      return 0;
    default:
      throw new Error('Invalid direction');
  }
}

export default Direction;
