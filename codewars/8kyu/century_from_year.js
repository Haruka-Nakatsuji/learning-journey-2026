// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/solutions/javascript
// 西暦から世紀を調べる

function century(year) {
  return year % 100 ? Math.floor(year / 100) + 1 : Math.floor(year / 100);
}

//　そもそも繰り上げすれば+1はいらんかった
const century = (year) => Math.ceil(year / 100);
