// https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript

function findOdd(A) {
  const obj = A.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  for (let [i, v] of Object.entries(obj)) {
    if (v % 2 !== 0) return Number(i);
  }
}

//天才的
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
