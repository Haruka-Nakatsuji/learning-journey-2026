import { BrowserRouter, Link } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { InlineStyle } from './components/InlineStyle.jsx';
import { CssModules } from './components/CssModules.jsx';
import { StyledJsx } from './components/StyledJsx.jsx';
import { StyledComponents } from './components/StyledComponents.jsx';
import { Emotion } from './components/Emotion.jsx';
import { Home } from './components/Home.jsx';
import { Page1 } from './components/Page1.jsx';
import { Page2 } from './components/Page2.jsx';
import { Page1DetailA } from './components/Page1DetailA.jsx';
import { Page1DetailB } from './components/Page1DetailB.jsx';
import { Router } from './router/Router.jsx';
import { PrimaryButton } from './components/atoms/button/PrimaryButton.jsx';
import { SecondaryButton } from './components/atoms/button/SecondaryButton.jsx';
import { SearchInput } from './components/molecules/SearchInput.jsx';
import { UserCard } from './components/organisms/user/UserCard.jsx';
import { HeaderOnly } from './components/templates/HeaderOnly.jsx';

const user = {
  name: 'うんこ',
  image:
    'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  email: 'unko@email.com',
  phone: '0120-444-444',
  company: {
    name: 'テスト株式会社',
  },
  website: 'https://google.com',
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <InlineStyle />
    <CssModules />
    <StyledJsx />
    <StyledComponents />
    <Emotion />
     <BrowserRouter>
      <div className='App'>
        <Link to='/'>Home</Link>
        <Link to='/page1'>Page1</Link>
        <Link to='/page2'>Page2</Link>
      </div>
      <Router />
    </BrowserRouter> */}
    <HeaderOnly>
      <SearchInput />
      <UserCard user={user} />
    </HeaderOnly>
  </StrictMode>,
);
