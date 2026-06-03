let flag = false;

export const ThrowPromise = () => {
  if (flag) {
    return <p>正しく表示できました</p>;
  }

  throw new Promise((resolve, reject) => {
    setTimeout(() => {
      flag = true;
      resolve('success!'); // ここでpromiseが解決する。ここで「Suspense」の中身が再レンダリングされ、flagはtrueとなっている！！！;
    }, 3000);
  });
};
