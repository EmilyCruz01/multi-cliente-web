import React from 'react';
import ReactDOM from 'react-dom'; // Importa ReactDOM desde 'react-dom' en lugar de 'react-dom/client'
import './index.css';
import LandinPage from './pages/LandinPage.jsx';
import Login from './pages/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/landinpage" element={<LandinPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
