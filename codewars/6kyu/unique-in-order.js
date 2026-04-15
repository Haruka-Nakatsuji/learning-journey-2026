// https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript?filter=all&sort=best_practice&invalids=false
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = function (iterable) {
  const iterableArr = Array.isArray(iterable) ? iterable : iterable.split('');
  const uniqueArr = iterableArr.filter((char, index) => {
    if (iterableArr[index] !== iterableArr[index + 1]) return char;
  });
  return uniqueArr;
};

// 数字の配列でも、文字の配列でも、スプレッド構文で配列にできる！splitはもはや不要・・・
// filterの省略忘れた
uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
