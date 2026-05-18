import { useState } from 'react';
import type { UserProfile } from '../types/userProfile';
import type { User } from '../api/user';
import axios from 'axios';

// 全ユーザー一覧を取得するカスタムフック
export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    setError(false);

    try {
      const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      const useData = data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`,
      }));
      setUserProfiles(useData);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { getUsers, userProfiles, loading, error };
};
