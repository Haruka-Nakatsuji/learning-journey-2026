console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.clipboard);
console.log(navigator.geolocation.watchPosition);
console.log(screen);
console.log(location.href);
console.log(location.port);
console.log(history.length);
console.log(new URL('https://google.com')); // location→今いる URL->なんでも

let timerId = setTimeout(() => {
  console.log('hello');
}, 1000);
clearTimeout(timerId);
console.log('apple'); // またない!!!

let interval = setInterval(() => {
  console.log('hello');
}, 1000);
setTimeout(() => {
  clearInterval(interval);
}, 3000);
