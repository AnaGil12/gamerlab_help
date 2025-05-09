import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import EvaluacionDetallePage from './pages/EvaluacionDetallePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="evaluaciones/dashboard" element={<DashboardPage />} />
          <Route path="evaluaciones/detalle" element={<EvaluacionDetallePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 