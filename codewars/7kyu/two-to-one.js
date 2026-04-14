// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions/javascript
// ２つの文字列から重複のない文字を生み出す

function longest(s1, s2) {
  return [...new Set([...s1.split(''), ...s2.split('')])].sort().join('');
}

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');
