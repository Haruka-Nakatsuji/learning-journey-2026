import { ErrorBoundary } from 'react-error-boundary';
import { ThrowError } from './ThrowError';

export const RetryError = () => {
  const handleFallback = ({ error, resetErrorBoundary }) => {
    return (
      <>
        <h3>エラー発生！！！！！！</h3>
        <p>やり直せ！！！！</p>
        <button onClick={resetErrorBoundary}>やり直す</button>
      </>
    );
  };
  return (
    <>
      <h2>ニューエラ</h2>
      <ErrorBoundary onReset={console.log('resetされちゃた')} fallbackRender={handleFallback}>
        <ThrowError />
      </ErrorBoundary>
    </>
  );
};
