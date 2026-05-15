import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { UserDetail } from './pages/UserDetail';
import { Settings } from './pages/Settings';
import { Navbar } from './components/organisms/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoginUserProvider } from './components/providers/LoginUserProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <LoginUserProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/:id' element={<UserDetail />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </LoginUserProvider>
  );
}

export default App;
