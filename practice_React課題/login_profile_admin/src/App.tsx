import { Suspense, useActionState } from 'react';
import { SubmitButton } from './components/SubmitButton';
import { Profile } from './components/Profile';

// Promise,それはフードコートの呼び出しベルじゃ。この変数には呼び出しベルが入っているぞい！
const fetchUserProfile = new Promise((resolve) => {
  setTimeout(() => resolve({ name: 'たかし', rank: 'ゴールド' }), 2000);
});

function App() {
  const loginAction = async (previousState: string | null, formData: FormData): Promise<string> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return '違うよ〜';
  };

  // Pending = 保留中
  const [error, submitAction] = useActionState(loginAction, null);

  return (
    <>
      <form action={submitAction}>
        <h1>ログイン</h1>
        <label htmlFor='username'>ユーザーネーム</label>
        <input type='text' name='username' id='username' />
        <label htmlFor='password'>パスワード</label>
        <input type='password' name='password' id='password' />
        <SubmitButton />
      </form>
      <Suspense fallback={<p>ラーメンを茹でています・・・</p>}>
        <Profile userPromise={fetchUserProfile} />
      </Suspense>
    </>
  );
}

export default App;
