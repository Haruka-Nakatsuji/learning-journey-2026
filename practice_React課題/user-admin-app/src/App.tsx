import { BrowserRouter, Route, Routes } from 'react-router';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path='/' element={<p>Home</p>} />
          <Route path='/users' element={<p>a</p>} />
          <Route path='/users/:id' element={<p>aaa</p>} />
          <Route path='*' element={<p>404</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
