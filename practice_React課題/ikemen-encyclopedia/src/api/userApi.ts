import axios from 'axios';

export const getUsers = async () => {
  const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  return data;
};

export const getUserById = async (id: string | undefined) => {
  const { data } = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  return data;
};
