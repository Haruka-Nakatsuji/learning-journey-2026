export const ThrowError = () => {
  if (Math.random() < 0.6) {
    throw new Error('エラーでちゅよ。');
  }
  return <p>実装されたぜ。</p>;
};
