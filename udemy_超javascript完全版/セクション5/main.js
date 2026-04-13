// 関数はオブジェクトだ！！！function()は、変数にオブジェクトを代入しているにすぎない！？！？
// let add = {}
//

// 関数宣言
function add(a, b, c) {
  return a + b;
}

// chromeがわかりやすく表示しているのを本質的な情報にできる
console.dir(add);

console.log(add.name); // add
console.log(add.length);

const newAdd = add;
console.log(newAdd(3, 4));

// 関数式
// nameプロパティはhi
let seyHi = function hi() {
  return 'hi';
};
// 無名関数
// nameプロパティは空文字 だが。。。代入するとseyHiになる！
seyHi = function () {
  return 'hix2';
};
// 巻き上げられないので下に
console.log(seyHi);

const furuhata = {
  name: 'ninzaburou',
  sayHi: function () {
    return 'hi';
  },
};
// メソッド呼び出し！！！
console.log(furuhata.sayHi);

// アロー関数,無名関数と同じ働きだが・・・
const ahaha = (name = '任三郎') => {
  return 'hello,' + name;
};
console.log(ahaha(undefined)); // undefinedもdefault扱い
// たった一つの式を「リターン」する時は1行にできる
// 引数が１の時のみ()を省略できる！
const ahaha2 = (name) => 'hello,' + name;
console.log(ahaha2('aha2'));

// デフォルトパラメータの中で前の引数が使える！！！！！
const sayHi3 = (name, message = `I kimey ${name}`) => {
  return `hi ${name}! ${message}.`;
};
console.log(sayHi3('harupi'));

// 引数を無限個取るぞ〜〜
let sum = (a, b, ...nums) => {
  // nums = [3, 6, 7, 84, 4, 2, 3]
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return console.log(total);
};
sum(1, 5, 3, 6, 7, 84, 4, 2, 3);

// コールバック関数！！！大事！！！！！
const add2 = (a, callback) => {
  let result = a - 10;
  callback('a', 'b', result, 7, 1, 2, 3);
};
add2(100, sum);

console.log(typeof furuhata);
console.log(typeof sayHi3);
