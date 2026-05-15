import { useState } from 'react';
import { useLoginUser } from '../components/providers/LoginUserProvider';
import { useNavigate } from 'react-router';

export const Settings = () => {
  const navigate = useNavigate();
  const { loginUser, setLoginUser } = useLoginUser();
  const [loginUserNameValue, setLoginUserNameValue] = useState(loginUser?.name);

  const handleUpdateName = () => {
    if (!loginUser) return;

    setLoginUser({
      ...loginUser,
      name: loginUserNameValue ?? '',
    });

    navigate('/');
  };

  return (
    <>
      <div className='shadow-md rounded-md bg-white w-full max-w-2xl p-10'>
        <input
          type='text'
          value={loginUserNameValue}
          onChange={(e) => setLoginUserNameValue(e.target.value)}
          className='block w-full sm:w-2/3 bg-gray-200 py-2 px-3 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white'
        />
        <button onClick={handleUpdateName}>変更</button>
      </div>
    </>
  );
};
