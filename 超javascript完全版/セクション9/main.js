// 結局prototypeってなんだったんだ・・・。
const obj = {
  a: 1,
  b: 2,
};

// 使わにゃい
obj.__proto__ = {
  c: 3,
};

Object.setPrototypeOf(obj, {
  c: 3,
});
console.log(Object.getPrototypeOf(obj));

// これよく使う
const obj2 = Object.create({ c: 3 });
obj2.a = 1;
obj2.b = 2;

console.log(obj2);

// クラスってなに！？！？
// オブジェクトの設計図！？
// オブジェクトを作ってくれる関数、すなわちクラス！！

// ファクトリー関数（newを使わないobject生成術）
// let UserFactory = (name, age) => {
//   return {
//     name,
//     age,
//     greeting() {},
//   };
// };
// const user1 = UserFactory('Yoshiki', 30);
// const user2 = UserFactory('ninzaburou', 450);
// const user3 = UserFactory('furuhara', 10);

// アロー禁止
const UserConstructor = function (name, age) {
  // new で this = {} が登録されるよ
  // this = Object.create(UserConstructor.prototype) これになるらしい・・・・・
  this.name = name;
  this.age = age;
  // new で return this が勝手にしてくれる!!!!
};
// なんかprototype使う方が綺麗らしいで・・・。
UserConstructor.prototype.greeting = function () {
  return `こにゃにゃちわ ${this.name}は実は${this.age}さい`;
};
// にゅ〜
const user1 = new UserConstructor('Yoshiki', 30);
const user2 = new UserConstructor('ninzaburou', 450);
const user3 = new UserConstructor('furuhara', 10);

console.log(user1);
console.log(user2);
console.log(user3);
// ↑生み出されたオブジェクトをインスタンスという。

// ----------------------------

// ⭐︎プロトタイプの仕組み
// **コンストラクタ関数（金型）**が prototype という箱に「空を飛ぶ」というレシピを入れる。
// new で**インスタンス（実体）**が作られる。
// インスタンスの __proto__ が、金型の prototype とガッチャンコ（連結）される。

/*
⭐︎なぜ「prototype」を使うのか？（効率の話）
もし1,000人の「のび太」を作るとき、全員に「あやとり」のやり方を覚え込ませたら、メモリ（脳みそ）がいっぱいになってしまいます。
ダメな例（ファクトリ関数などで個別に作る）： 1,000人がそれぞれ「あやとり」のやり方をメモして持っている。（紙の無駄！）
良い例（prototypeを使う）： 1,000人はやり方を持たず、共通の「掲示板（prototype）」にやり方を書いておく。1,000人はそれを見に行くだけ。（効率的！）
*/

// 1. コンストラクタ関数（金型）を作る
function Nobita(name) {
  // if (!new.target) return new UserConstructor(name, age);
  this.name = name; // 個別の名前だけ持たせる
}

// 2. prototype（共通のレシピ）にメソッドを追加する
// これにより、すべての「のび太」がこの関数を共有できる
Nobita.prototype.shoot = function () {
  console.log(this.name + 'は、射撃で百発百中だ！');
};

// 3. インスタンス（実体）を作る
const nobita1 = new Nobita('のび太1号');
const nobita2 = new Nobita('のび太2号');

nobita1.shoot(); // 「のび太1号は、射撃で百発百中だ！」
nobita2.shoot(); // 「のび太2号は、射撃で百発百中だ！」

console.log(nobita1);

// ----------------------------

// class
class User {
  // フィールド宣言： 全員共通の「初期値（HPは100、名前は未設定など）」や「秘密の変数（#）」を書く。
  hp = 100;
  #mp = 10;
  // constructor： new User('haru') みたいに、作る瞬間に外から受け取ったデータをセットする時に使う。
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._unkoCount = 0;
  }
  // 勝手にprototypeに入っとるwww ↓
  get unkoCount() {
    if (this._unkoCount <= 0) {
      return '今日はうんをしておりません。';
    }
    return this._unkoCount + 'こ';
  }
  set unkoCount(value) {
    if (value < 0) {
      console.log('マイナスなんか入れるな！あほ！');
      return;
    }
    this._unkoCount = value;
  }
  // staticはprototypeやないんや
  // Userの中での世界・・。
  // のび太という概念そのものに持たせたい場合はstatic
  static unkoFunc() {
    return console.log('aho');
  }
}
const user = new User('中辻', 100);

user.unkoCount = 1;
console.log(user.unkoCount);

User.unkoFunc();

console.dir(new User('haru', 40));

class Animal {
  age = 0;
  constructor(age) {
    this.age = age;
  }
  eat() {}
}

// Bird.__proto__ に Animalが入っている！！
class Bird extends Animal {
  name = 'bird';
  constructor(age, name) {
    super(age);
    this.name = name;
  }
  fly() {}
}

const bird = new Bird(20, 'pi');
console.log(bird);

// 継承ではない。コンポジション
class Animal2 {
  age = 0;
  constructor(age) {
    this.age = age;
  }
  eat() {
    return console.log('もぐもぐ！');
  }
}

class Bird2 {
  name = 'bird';
  constructor(age, name) {
    this.animal = new Animal2(age);
    this.name = name;
  }
  eat() {
    this.animal.eat();
    console.log('もぐもぐ？');
  }
  fly() {}
}

const bird2 = new Bird2(29, 'pi');

console.log(bird2.animal.age);
bird2.eat();
