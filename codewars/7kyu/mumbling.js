// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/javascript?filter=all&sort=best_practice&invalids=false
function accum(s) {
  return [...s].map((c, i) => c.toUpperCase() + c.repeat(i).toLowerCase()).join('-');
}

function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}
