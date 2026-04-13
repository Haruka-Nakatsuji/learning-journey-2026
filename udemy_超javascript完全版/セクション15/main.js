let result = document.documentElement;
result = document.head;
result = document.body;
result = document.childNodes;
result = document.body.childNodes;
// result = document.body.childNodes[4].hasChildNodes();
result = document.body.firstChild;
result = document.body.lastChild;
result = document.body.parentNode;
result = document.head.nextSibling;
result = document.body.previousSibling;
result = document.body.children;
result = document.body.firstElementChild;
result = document.head.nextElementSibling;

result = document.querySelector('#title');
result = document.querySelector('p');
result = document.querySelectorAll('p');
result = document.body.matches('.unko') /* ←この中にマッチするか？cssで使えるか？ */;
result = document.contains(document.body);
result = document.body.contains(document.body);

document.body.innerHTML = '<h1>Hello!</h1><div>I am Ponta</div>';
document.querySelector('h1').innerHTML = 'Hello上書き';
// document.querySelector('div').innerHTML += 'ぽんぽんポン太'; // 付け足し
result = document.body.innerHTML;

document.querySelector('div').insertAdjacentHTML('beforeend', '<p>ぽんぽんポン太</p>'); // 付け足し

// createElemntの類
let p = document.createElement('p');
p.textContent = '追加したポン太';
// 子孫ノードまで全てコピーしたい場合trueをつける
let p2 = p.cloneNode(true);
document.querySelector('div').append('<h1>あはは</h1>', p, 'その後', '<!-- ただのテキスト -->', p2);

p2.replaceWith('a');
// document.querySelector('div').append(p2);

console.dir(p2.nodeType);

document.body.attributes.id = 'osaka';
result = document.body.getAttribute('class');
document.body.setAttribute('newattr', 'soft-cream');
result = document.body.hasAttribute('unko');
result = document.body.removeAttribute('unko');

result = document.body.dataset;

result = getComputedStyle(document.querySelector('p'));

console.dir(result);

// データ付きのイベント
const myEvent = new CustomEvent('haruchan', {
  detail: { message: 'こんにちは！', power: 100 },
});

// 受け取り側
document.addEventListener('haruchan', (e) => {
  console.log(e.detail.message); // 「こんにちは！」
  console.log(e.detail.power); // 100
});

// イベントを実行できる！
document.dispatchEvent(myEvent);

console.log(document.readyState);
