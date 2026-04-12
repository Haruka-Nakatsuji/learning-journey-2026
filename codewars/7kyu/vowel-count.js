// https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript
// 引数strに母音が入っているか、配列で出力

function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter((char) => vowels.includes(char)).length;
}

// best
// || []で0に対応
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
