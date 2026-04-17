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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <InlineStyle />
    <CssModules />
    <StyledJsx />
    <StyledComponents />
    <Emotion /> */}
    <BrowserRouter>
      <div className='App'>
        <Link to='/'>Home</Link>
        <Link to='/page1'>Page1</Link>
        <Link to='/page2'>Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  </StrictMode>,
);
