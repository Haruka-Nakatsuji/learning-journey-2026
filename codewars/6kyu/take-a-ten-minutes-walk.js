function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  const initPosition = [0, 0];

  for (way of walk) {
    switch (way) {
      case 'n':
        initPosition[0] += 1;
        break;
      case 's':
        initPosition[0] -= 1;
        break;
      case 'e':
        initPosition[1] += 1;
        break;
      case 'w':
        initPosition[1] -= 1;
        break;
        break;
    }
  }
  return initPosition.every((val) => val === 0) ? true : false;
}

// こっちの方が短いし直感的
function isValidWalk(walk) {
  var dx = 0;
  var dy = 0;
  var dt = walk.length;

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        dy--;
        break;
      case 's':
        dy++;
        break;
      case 'w':
        dx--;
        break;
      case 'e':
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}
