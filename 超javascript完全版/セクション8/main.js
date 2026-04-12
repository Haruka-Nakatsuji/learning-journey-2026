const unko = 'unko';
const obj = {
  name: 'うんぽっぽ',
  age: 20,
  'konnixhi wa': 'ahaha',
  greeting: () => {
    return 'hello';
  },
  [unko]: ['music', 'travel'],
  3: 30,
  1: 10,
};

for (const key in obj) {
  // 全部文字列ぢゃん　キーを取得する 整数がまず最初に出てくるらしい！！！「1」が一番最初次に「3」 きめえ
  console.log(typeof key);
}

obj['name'] = 'うんぽ２';
delete obj.age;

// 配列でキーの一覧を出すよん
console.log(Object.keys(obj));
// 配列で valuesの一覧を出すよん
console.log(Object.values(obj));
// 配列で keyとvaluesの一覧を出すよん
// ["name", "konnixhi wa"]
// ["うんぽっぽ", "ahaha"]
console.log(Object.entries(obj));

const name = 'espresso';
const size = 340;
const coffee = {
  name, // = : name
  size,
  obj: {
    temprature: 10000,
  },
};

const coffee2 = {
  ...coffee,
  name: 'latte', // したに代入されているのでlatteが優先される
  isHot: true,
};
coffee2.obj.temprature = 10; // coffeeの方も変えてしまうらしい・・・あっさいコピーなんや・・・
console.log(coffee2 === coffee); // false
console.log(coffee);

const coffee3 = {
  ...coffee,
  obj: {
    ...coffee.obj.temprature, // 深いコピーができる。
  },
};
coffee3.obj.temprature = 50; // coffeeの方も変えてしまうらしい・・・あっさいコピーなんや・・・
console.log(coffee3 === coffee); // false
console.log(coffee);

// 既存のオブジェクト同士の合体(コピーされない)
const o1 = { a: 1 };
const o2 = { b: 2 };
Object.assign(o1, o2); // = o1
console.log(o1);

// 分割代入
const book = {
  title: 'js',
  price: 9.99,
  author: {
    firstName: 'arusawa',
    lastName: 'takushiS',
  },
  unko: 'unko',
  sonotaUnko: 'inko',
};

// const title = book.title; と同じ意味
const {
  title: bookTitle,
  price,
  author: { firstName, lastName },
  ...etc
} = book;
console.log(bookTitle, price, lastName, etc);

// 関数でbookを分割代入、上のことを引数ないでしてるだけやね
const sayBook = ({ title: bookTitle, price, author: { firstName, lastName }, ...etc }) => {
  console.log(bookTitle);
};
sayBook(book);

// IN演算子
// プロパティが存在しているか。　valueがundifinedでも存在していればtrueである
console.log('unko' in book);

// オプショナルチェーン
const unkokko = {
  address: 'osaka',
  edge: {
    color: 'red',
    material: 'gunyo',
  },
};
console.log(unkokko.edge?.color);

// thisとは
console.log(this);

// 基本的にメソッドの中でメソッドを指す場合はthisが好ましい
// thisの一つ隣のオブジェクトを指しているよ！
const ichigo = {
  color: 'red',
  changeColor: function () {
    return function (c) {
      console.log(this.color);
    };
  },
};
const change = ichigo.changeColor();
change(); // undifind - thisの中身は呼び出した人。change()の左に誰もおらんからundifindになる

const arrowIchigo = {
  color: 'white',
  changeColor: function () {
    return (c) => {
      console.log(this.color);
    };
  },
};
const change2 = arrowIchigo.changeColor();
change2(); // white - thisの中身は関数が書かれた場所の外側のthis

const shouryakuIchigo = {
  color: 'blue',
  changeColor() {
    return (c) => {
      console.log(this.color);
    };
  },
};
const change3 = shouryakuIchigo.changeColor();
change3(); // blue - thisの中身は関数が書かれた場所の外側のthis

let logging = (cb) => {
  console.log(cb());
};

const car = {
  color: 'red',
  changeColor: function (color) {
    logging(function () {
      return this.color;
    });
    this.color = color;
  },
};
car.changeColor('white');

// thisを指定
let sayThis = function (a, b) {
  console.log(this, a, b);
};
// sayThis.call({ hello: 'hello' }, 1, 2);
// sayThis.apply({ hello: 'hello' }, [1, 2]);

sayThis = sayThis.bind({ hello: 'hello' }, 1, 2); // 引数ごと固めちゃう
sayThis();

const pastaCalculator = {
  size: 60,
  member: 4,
  get total() {
    // ()を省略！！！！！
    return this.size * this.member;
  },
  set total(newValue) {
    this.member = newValue / this.size;
  },
};
pastaCalculator.total = 200;
console.log(pastaCalculator.total); // getのおかげで関数なのにプロパティみたいになってる！
