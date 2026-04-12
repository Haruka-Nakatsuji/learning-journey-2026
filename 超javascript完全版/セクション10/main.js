const kyukkyu = ['apple', , 'banana', 'grape'];

for (const kyu of kyukkyu) {
  // undifindも出力される
  // console.log(kyu);
}

console.log(kyukkyu);

let kyukkyu2 = new Array('apple', 'banana', 'grape');
kyukkyu2 = new Array(4);
// empty x 4
console.log(kyukkyu2);

const kyukkyu3 = [...kyukkyu];
console.log(kyukkyu3);

const sum = (...nums) => {
  console.log(nums);
};
let nums = [567, 45, 543];
sum(1, 2, 3, 34, 4, ...nums, ...nums, 30, nums, 'あはは');

console.log(...kyukkyu);

// 分割代入
const ahaha = ['nae', 20, 'third', ['buriburi', 'becha'], { first: 'a', last: 'w' }];
let [, , naum, [oto, music], { first, last: last1 }] = ahaha;
console.log(oto, music, first, last1);

let userObject = { hobbies: ['music', 'travel'] };
let {
  hobbies: [, travelObject],
} = userObject;

console.log(travelObject);

for (const prop of Object.entries(userObject)) {
  console.log(prop);
}

const eggs = ['たまちゃん', 'タマゴロン', 'たまごっち', 'たままん', 'たまはら', '六三郎'];
const [a, b, c, ...rest] = eggs;
console.log(a, b, c, rest);

const user = {
  name: '中辻',
  age: 100,
  job: '魔法使い',
};

const { name, age, job } = user;
console.log(name, age, job);

function introduce({ name, age }) {
  console.log(`${name}さんは${age}さいです。`);
}

const eggsObj = [
  {
    name: 'たまちゃん',
    age: 45,
  },
  {
    name: 'タマゴロン',
    age: 40,
  },
  {
    name: 'たまごっち',
    age: 34,
  },
  {
    name: 'たままん',
    age: 20,
  },
  {
    name: 'たまはら',
    age: 12,
  },
  {
    name: '六三郎',
    age: 2,
  },
];

for (const egg of eggsObj) {
  introduce(egg);
}

let items = [0, 1, 2];
items.push(3, 4);
items.pop(); // =3 ぽ〜っぷ！
items.unshift(-1, -2); // 前に追加！
items.shift();
console.log(items);

items = [0, 1, 2];
items.splice(1, 1, '偽物', '影武者'); // 一つ目から一つ削除して偽物に置き換える
items.splice(1, 0, 'かげ'); // 1の前に追加
console.log(items);

console.log(items.toSpliced(1, 2, 'にこ'));

items = [0, 1, 2, 3, 4];
items.fill('増殖マン', 2, 4); // 2から3までを1にする
console.log(items);

items = [0, 1, 2, 3, 4];
items.copyWithin(3);
console.log(items);

items = [0, 1, 2, 3, 4];
items.reverse();
console.log(items);
console.log(items.toReversed());

items = [10, 0, 1, 2, 'uhaha', 3, undefined, 4];
items.sort((a, b) => {
  return a - b;
}); // 文字列に変換, undifinedのみ一番後ろ
console.log(items);

items = [0, 1, 2, 3, 4];
let result = items.slice(2, 4); //そこだけを取り出す
console.log(result);

items = [0, 1, 2, 3, 4];
result = items.concat([5, 6, 7], 2, [3, 4, 5]); // 付け足せる！
console.log(result);

items = ['a', 'b', 'c'];
result = items.join(''); // 配列を結合して文字に！
console.log(result);

items = ['apple', 'banana', 'carry'];
result = items.indexOf('carry', 2); // 当てはまった番号を返す
result = items.lastIndexOf('banana', 1);
result = items.includes('bana'); // あるかないか
console.log(result);

items = [0, 1, 2];
result = items.map((item, index, array) => {
  console.log(item, index, array);
  return item * 10; // 配列それぞれの要素に処理を行うそして配列を返す
});
console.log(result);

items = [0, 1, [1, [1, 2]]];
result = items.flat(1); // 入れ子を解除,数値で深さを調整
console.log(result);

items = [0, 1, 2];
result = items.flatMap((item) => [item, item * 10]);
console.log(result);

items = [0, 1, 2, 3, 4, 5, 6];
result = items.filter((item) => {
  return item % 2 === 0; // trueのみreturn
});
console.log(result);

items = [0, 1, 2, 3, 4, 5, 6];
result = items.reduce((previousItem, item) => {
  return previousItem + item;
}, 0);
console.log(result);

items = ['apple', 'banana', 'grape', 'banana'];
result = items.find((item) => {
  return item === 'banana';
});
console.log(result); //そこを出力して終わり banana

items = [0, 1, 2];
result = items.every((item) => {
  return item < 2; // 全てがtrueならtrueを返すよ
});
console.log(result); // false

items = [0, 1, 2];
result = items.some((item) => {
  return item < 2; // 一つでもtrueならtrueを返すよ
});
console.log(result); // true

items = ['apple', 'banana', 'grape', 'banana'];
items.forEach(
  function (item) {
    console.log(this);
    console.log(item);
  },
  { hello: 'hello' } // これがthisとなる！！！ bindと同じ
);

items = ['apple', 'banana', 'grape', 'banana'];
console.log(items.at(-2));
console.log(items.with(-2, '影武者')); // 要素を変更したいときにマイナスが使える

items = [0, 1, 2, 3, 4, 5];
const obj = Object.groupBy(items, (item) => {
  if (item % 2 === 0) {
    return 'even'; // プロパティがreturnされる
  }
  return 'odd';
});
console.log(obj);
