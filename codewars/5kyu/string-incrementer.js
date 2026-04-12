// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/solutions/javascript

// replaceの第二引数で関数を入れられる！！
// 該当した文字に加工できる
function incrementString(strng) {
  return strng.replace(/(\d*)$/, (num) => String(Number(num) + 1).padStart(num.length, '0'));
}
