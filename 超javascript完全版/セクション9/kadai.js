class Character {
  hp = 100;
  recoveryQuantity = 10;
  static count = 0;

  constructor(name) {
    this.name = name;
    Character.count++;
  }

  rest() {
    this.hp += this.recoveryQuantity;
    console.log(`${this.name}は休んでHPが${this.recoveryQuantity}回復した！`);
  }
}

class Wizard extends Character {
  #mp = 50;

  constructor(name, magicPower) {
    super(name);
    this.magicPower = magicPower;
  }

  get mp() {
    return this.#mp;
  }

  attack() {
    this.#mp -= 5;
    return console.log(`${this.name}の魔法攻撃！${this.magicPower}のダメージ！`);
  }
}

const wizard1 = new Wizard('魔法使い1', 40);
const wizard2 = new Wizard('魔法使い2', 50);
const character1 = new Character('キャラクタ1');

const { name, magicPower } = wizard1;
console.log(name, magicPower);

wizard1.attack();
wizard2.attack();
character1.rest();
wizard1.rest();

console.log(wizard1.mp);
console.log(Character.count);

console.log(character1 instanceof Wizard); // false
