export function golfScore(par, strokes) {
  if (strokes === 1) return 'Hole-in-one!';
  else if (strokes <= par - 2) return 'Eagle';
  else if (strokes === par - 1) return 'Birdie';
  else if (strokes === par) return 'Par';
  else if (strokes === par + 1) return 'Bogey';
  else if (strokes === par + 2) return 'Double Bogey';
  else return 'Go Home!';
}

export const GOLF_SCORES = {
  HOLE_IN_ONE: 'Hole-in-one!',
  EAGLE: 'Eagle',
  BIRDIE: 'Birdie',
  PAR: 'Par',
  BOGEY: 'Bogey',
  DOUBLE_BOGEY: 'Double Bogey',
  GO_HOME: 'Go Home!',
};
