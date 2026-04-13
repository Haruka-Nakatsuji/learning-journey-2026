// 1
const makeGreeting = (greeting) => {
  return (name) => `${greeting}, ${name}`;
};

const sayHello = makeGreeting('Hello');
console.log(sayHello('Alice')); // "Hello, Alice" と表示される
console.log(sayHello('Bob')); // "Hello, Bob" と表示される

// 2
const createPowerCounter = (count = 1) => {
  return {
    increment: () => {
      count *= 2;
    },
    reset: () => {
      count = 1;
      return count;
    },
  };
};

const myCounter = createPowerCounter();
myCounter.increment(); // 1 * 2 = 2
myCounter.increment(); // 2 * 2 = 4
console.log(myCounter.reset()); // 1 に戻して 1 を表示

// 3
// この部分をIIFEで包んでください
const iife = (() => {
  var temp = '秘密のデータ';
  console.log(temp + 'を処理しました');
})();
// ここまで

console.log(typeof temp); // ここで "undefined" と表示されれば正解

// 4
function countDown(n) {
  console.log(n);
  n -= 1;
  if (n < 0) return;
  countDown(n);
}

countDown(3);
// 期待される出力:
// 3
// 2
// 1
// 0

// 5
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  })(i);
}
// 現状：1秒後に 3, 3, 3 と表示される
// 目標：1秒後に 0, 1, 2 と表示されるように修正
