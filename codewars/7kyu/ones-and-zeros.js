// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/solutions/javascript
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6

binaryArrayToNumber = (arr) => {
  return arr.reverse().reduce((acc, cur, i) => acc + cur * 2 ** i, 0);
};

// parseIntの第二引数で２進すうに変換できたらしい・・・
binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);
