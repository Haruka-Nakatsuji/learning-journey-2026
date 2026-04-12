// ビルトイン(ブラウザでもNodeでもなんでも使えるglobal) -> ECMAに定義されている
console.log(globalThis);

const coffee = {
  name: 'caffe',
}; // オブジェクトは住所200番地
const coffee2 = coffee; // 200番地というオブジェクトが入った住所を渡しているに過ぎない
coffee2.name = 'matcha';
// なので・・・coffee2を指定したはずなのに変わっている！！！ オブジェクトは同じだから！！
console.log(coffee);

const coffee3 = {
  name: 'caffe',
};
const coffee4 = {
  name: 'caffe',
};
// 住所が違うのでfalse
console.log(coffee3 === coffee4);

/*

  x = {name: unko}      x 300番地
  y = {name: anko}      y 300番地
  x = y　
  　　       　　　　　　200 {name: unko}
                      300 {name: anko}

*/
