'use strict';

const list = document.querySelector('#list');

try {
  const response = await fetch('9-practice-2.json');

  if (!response.ok) {
    throw new Error('読み込めてないよ〜ん');
  }

  const comments = await response.json();

  const popularComments = comments.filter((comment) => comment.likes >= 10);
  console.log('popularComments: ', popularComments);

  const userListCountAndLikes = comments.reduce((prev, cur) => {
    // 1. 今の引き出しの中身（または初期値の 0 セット）を取り出す
    // 初期値の時はこれ使う！！！！！！
    const currentStatus = prev[cur.userId] || { count: 0, totalLikes: 0 };

    // 2. その中身をアップデートする
    //   ここ、自分で書いてみて！ count は +1、totalLikes は今回のいいね数を足す
    currentStatus.count += 1;
    currentStatus.totalLikes += cur.likes;
    // 3. アップデートしたものを、また引き出し（prev）にガシャンと戻す
    prev[cur.userId] = currentStatus;

    // 4. 箱を次の人にパス！
    return prev;
  }, {});
  console.log(userListCountAndLikes);

  const userListCountAndLikesEntries = Object.entries(userListCountAndLikes);
  const overThree = userListCountAndLikesEntries.filter((entry) => entry.at(-1).count >= 3);
  const overThreeUsers = Object.keys(overThree);
  console.log(overThree);
} catch (error) {}
