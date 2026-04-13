// new promiseされた瞬間に実装
let promise = new Promise((resolve, reject) => {
  reject('unko');
});

promise.then((value) => {
  console.log('then', value); // fullfilledの時のみ
});
promise.catch((value) => {
  console.log('catch', value); // refectの時のみ
});
promise.finally(() => {
  console.log('finally');
});

console.log(promise);
