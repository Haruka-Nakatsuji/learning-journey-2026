// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/solutions/javascript
// いちばん小さい数字を出す

function findSmallestInt(arr) {
  return arr.reduce((acc, cur) => (acc > cur ? cur : acc));
}

// Math.minがあった
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
