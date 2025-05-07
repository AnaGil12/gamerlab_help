import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import FeriaGamer from './App';
import Consultar from './Consultar';
import Steps from './Stepts';

import Login from './LoginProfesor/login-page';
import TeacherDashboard from './LoginProfesor/teacher-dashboard';
import CourseDetail from './LoginProfesor/course-detail';
import './App2.css';


// Admin
import Sidebar from './components-admin/Sidebar';
import Dashboard from './pages-admin/Dashboard';
import JuryManagement from './pages-admin/JuryManagement';
import AddJuror from './pages-admin/AddJuror';
import JurorDetails from './pages-admin/JurorDetails';
import CriteriaManagement from './pages-admin/CriteriaManagement';
import PermissionsManagement from './pages-admin/PermissionsManagement';
import EventMonitoring from './pages-admin/EventMonitoring';
import ProfessorManagement from './pages-admin/ProfessorManagement';
import AddProfessor from './pages-admin/AddProfessor';
import ProfessorDetails from './pages-admin/ProfessorDetails';
import SubjectsManagement from "./pages-admin/SubjectsManagement"

// Layout con Outlet
const AdminLayout = () => (
  <div className="app-container">
    <Sidebar />
    <main className="content">
      <Outlet />
    </main>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<FeriaGamer />} />
        <Route path="/consultar" element={<Consultar />} />
        <Route path="/registrar" element={<Steps />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profesor" element={<TeacherDashboard />} />
        <Route path="/curso/:nombre" element={<CourseDetail />} />

        {/* Rutas protegidas */}

        {/* Rutas admin anidadas */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="jury" element={<JuryManagement />} />
          <Route path="jury/add" element={<AddJuror />} />
          <Route path="jury/:id" element={<JurorDetails />} />
          <Route path="criteria" element={<CriteriaManagement />} />
          <Route path="permissions" element={<PermissionsManagement />} />
          <Route path="monitoring" element={<EventMonitoring />} />
          <Route path="professors" element={<ProfessorManagement />} />
          <Route path="professors/add" element={<AddProfessor />} />
          <Route path="professors/:id" element={<ProfessorDetails />} />
          <Route path="subjects" element={<SubjectsManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

