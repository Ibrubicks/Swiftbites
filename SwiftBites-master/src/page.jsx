import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SignUp from './components/SignUp.jsx';
import './components/login.css'; 
import Home from './components/Home.jsx';
import './components/home.css';
import Checkout from './components/Checkout.jsx';
import './components/checkout.css';
function Page() {
  return (
    <StrictMode>
      <Checkout />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Page />);

export default Page;