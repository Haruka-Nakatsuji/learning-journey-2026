// http://codewars.com/kata/556deca17c58da83c00002db/solutions/javascript

function tribonacci(signature, n) {
  const arr = [];
  if (n === 0) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    if (i < 3) {
      arr.push(signature[i]);
      continue;
    }
    const sumNum = arr.at(-1) + arr.at(-2) + arr.at(-3);
    arr.push(sumNum);
  }
  return arr;
}

// pushの中で計算している
// sliceで、n（出力数）が3未満だった場合に二つ出すようにしている
function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
