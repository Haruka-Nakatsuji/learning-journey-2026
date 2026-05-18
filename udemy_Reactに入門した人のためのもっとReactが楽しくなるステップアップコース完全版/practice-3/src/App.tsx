import axios from 'axios';
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';

function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p>データの取得失敗</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        userProfiles.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
}

export default App;
