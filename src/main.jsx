import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import LandinPage from './pages/LandinPage.jsx';
import About from '../src/pages/About.jsx';
import Login from './pages/Login.jsx';
import Contact from './pages/contaact.jsx';
import Info from './pages/info.jsx';
import Principal from './pages/Principal.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/landinPage" element={<LandinPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);