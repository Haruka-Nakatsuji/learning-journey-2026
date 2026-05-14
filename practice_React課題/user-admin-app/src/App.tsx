import { Router } from './router/Router';
import { UserProvider } from './store/userState';

function App() {
  return (
    <>
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  );
}

export default App;
