import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeriaGamer from './App';
import Consultar from './Consultar';
import Steps from './Stepts';
import './styles/styles.css';
import Login from './LoginProfesor/login-page'; // Importa el nuevo componente
import App from './LoginProfesor/page';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeriaGamer />} />
        <Route path="/consultar" element={<Consultar />} />
        <Route path="/registrar" element={<Steps />} />
        <Route
          path="/login"
          element={
            <Login onLogin={() => window.location.href = "/profesor"} />
          }
        />
        <Route path="/profesor" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
