// https://www.codewars.com/kata/56747fd5cb988479af000028/solutions/javascript

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

// best practice
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
