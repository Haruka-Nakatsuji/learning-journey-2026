let result = Number.parseInt('101.101', 2);
console.log(result);

result = Number.isNaN(NaN);
console.log(result);

result = Math.round(Math.random() * 100);
console.log(result);

const unkoTime = new Date('2026-02-14T16:00:20.123+09:00');
console.log(unkoTime);
unkoTime.setFullYear('2040');
unkoTime.setDate(unkoTime.getDate() + 1);
console.log(unkoTime);

console.log(Date.now() > unkoTime); // 今の方が最近なのか比較

// 正規表現！！！！！
let regexp = new RegExp('apples');
regexp = /\s/; // なんとオブジェクト！！！！！
result = regexp.test('I ke apples0 l');
console.dir(result);
