const ok = 'hello' && 'hi';
console.log(ok); // これは「hi」
// 左側がtrusyだったら右の値を返す、左がfalsyなら左の値を返す！？！？

const userInput = '';
const ok2 = userInput || 'User';
console.log(ok2);
// userInput(左)がfalsy(空文字)なら、右を返す！！　デフォルト設定て感じ。

const x = 15;

//            false       true    'User'
const ok3 = x === 10 || (x > 12 && ok2);
console.log(ok3);
// 結果は「User」

const ok4 = !true;
console.log(ok4);
// 流石にfalse

const ok5 = !!x;
console.log(ok5);
// trueになる。!は右から左に計算されるんだよ。
// つまり・・・ 15 -> false -> trueと真偽値に型変換しとるんや！！！

// 評価した結果を変数に代入できるもの = 式
if (true);
// 上でも別にいける。なぜなら、ifの後ろにはどんな式を入れても良いからだ、我々はブロック文を後ろに入れていたにすぎないのであった・・・・。

if (!x) {
  console.log('trueやで');
} else {
  console.log('falseやで');
  // let unpoName = prompt();
  // 名前を入れると強制的に古畑にされる、入れないと無視
  //            一番左がfalseならその時点で終了。右に繰り越さずfalseのまま。
  // unpoName = unpoName && '古畑任三郎';

  // 名前を入れないとデフォルトで古畑にされる
  let unpoName = false;
  //         一番左が「false」なら・・左を切って、右に繰り越すイメージ！
  //         falseを繰り越しまくって最終的にtrueが１つでもあればそれはtrueになる！
  unpoName = unpoName || false;
  console.log('あなたは' + unpoName + 'です');
}

if (12 > 10 && 30 > 3) {
  console.log(30 > 3);
}

// null or undifind の場合のみ右に繰り越す！
let username = '' ?? 'User';
console.log(username);

// 三項演算子
let ok6 = false;
ok6 = ok6 ? '古畑' : '任三郎';
console.log(ok6);

// do-while文
let count1 = 0;
do {
  // 0のみ出力
  console.log(count1);
  count1++;
} while (count1 > 10);

//                             こっち↓ が先に処理されるお
for (let i = 0, j = 0; i < 10; i++, j += 2) {
  console.log(i, j);
}

const tanteis = ['古畑', 'ホームズ', '福山'];
//                   「配列」を取れるというよりかは、文字も取れちゃう！けどほぼ配列にしか使わないにょ。
for (const tantei of tanteis) {
  console.log(tantei);
}

const aibou = {
  hero: 'ukyo',
  buddy: '亀山',
  nextBuddy: 'かんべくん',
  // key: と思われちゃう
};
for (const key in aibou) {
  if (aibou[key] === '亀山') {
    continue;
  }
  // aibou.key だと、aibouの中のkeyというキーだと思われてしまうから使えないよ。
  console.log(key + ': ' + aibou[key]);
}

// 構文を読んでからのエラーのみ対応。構文エラー→シンタックスエラー それ以外のエラーは「**例外**」というんじゃああ
// どうしてもエラーを消せない時に使うらしいにょ！
try {
  console.log('try');
  console.log(huruhata);
} catch (error) {
  console.error('古畑任三郎がいません', error);
  try {
    throw aibou; // 一気にcatchに移動
    console.log(huruhata);
  } catch (aibou) {
    console.error('畑任三郎がいません2', aibou);
  }
} finally {
  // return, breakなど何があってもfinallyは実行される！！
  // returnの戻り値も変えちゃえる！！ エラーごと上書きできちゃうううう
  console.log('finally');
}
console.log('hello~~~');

// throwは、エラーを作り出す！？！？！？？？！？！？！！！！？
