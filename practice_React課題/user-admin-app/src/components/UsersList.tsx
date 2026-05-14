import axios from 'axios';
import type { User } from '../types/api/user';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserCard } from './UserCard';

export const UsersList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const goBack = () => {
    navigate('/');
  };

  return (
    <>
      <ul className='divide-y divide-gray-100'>
        {users.map((data) => (
          <UserCard data={data} />
        ))}
      </ul>
      <button onClick={goBack}>TOPへ戻る</button>
    </>
  );
};
