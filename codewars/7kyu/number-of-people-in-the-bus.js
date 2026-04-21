// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/solutions/javascript?filter=all&sort=best_practice&invalids=false

// best practiceと同じだった
var number = function (busStops) {
  return busStops.reduce((acc, [on, off]) => acc - off + on, 0);
};
