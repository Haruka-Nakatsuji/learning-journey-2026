// JSカフェ・レシートジェネレーター

const user = prompt('あなたの名前を教えてね！') || 'ゲスト';
const userReceipt = [];
let sum = 0;
let taxSum = 0;
const menus = [
  {
    name: 'おっさん',
    price: 150,
  },
  {
    name: 'この笑顔',
    price: 100,
  },
  {
    name: 'エハラマサヒロ',
    price: 120,
  },
];

let staffMessage = '';
let menuMessage = '';
let menuCount = 0;

for (const menu of menus) {
  menuMessage += `${++menuCount}: ${menu.name}（${menu.price}円）\n`;
}
staffMessage = `ご注文は何になさいますかぁ〜?\n${menuMessage}`;

function writeReceipt(menuNumber) {
  const pickMenu = menus[menuNumber];
  userReceipt.push(pickMenu);
  sum += pickMenu.price;
  console.log(pickMenu);
}

// 注文
let userInput;
while (userInput !== '注文を終了する') {
  userInput = prompt(staffMessage);
  if (userInput - 1 < menus.length) {
    writeReceipt(userInput - 1);
  }
}

// トッピング
if (confirm('トッピング（+100円）しますか')) {
  sum += 100;
  userReceipt.push({
    name: 'トッピング',
    price: 100,
  });
}

// 割引
if (sum >= 1500) {
  sum -= 200;
}

// 税
taxSum = sum * 1.1;

const userReceiptString = '';

const alertMessage = `ユーザー名: ${user}様

合計: ${sum}
注文合計: ${taxSum}`;
alert(alertMessage);
