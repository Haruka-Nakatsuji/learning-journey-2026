import { useState } from 'react';
import { AddPage } from './Components/AddPage';
import { DetailPage } from './Components/DetailPage';
import { Home } from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  const [siteData, setSiteData] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={siteData} />} />
          <Route path='add' element={<AddPage data={siteData} setData={setSiteData} />} />
          <Route path='site'>
            <Route path=':id' element={<DetailPage data={siteData} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
