import type React from "react"
import { NavLink } from "react-router-dom"
import "./Sidebar.css"

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>III Feria Gamer</h3>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/admin/jury" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          <span className="nav-icon">👥</span>
          <span className="nav-text">Gestionar Jurados</span>
        </NavLink>
        <NavLink to="/admin/materials" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          <span className="nav-icon">📚</span>
          <span className="nav-text">Gestionar Materias y NRC</span>
        </NavLink>
        <NavLink to="/admin/professors" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          <span className="nav-icon">👨‍🏫</span>
          <span className="nav-text">Gestionar Profesores</span>
        </NavLink>
        <NavLink to="/admin/criteria" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          <span className="nav-icon">📋</span>
          <span className="nav-text">Gestionar Criterios de Calificación</span>
        </NavLink>
        <NavLink to="/admin/monitoring" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          <span className="nav-icon">📊</span>
          <span className="nav-text">Monitoreo del evento</span>
        </NavLink>
        <NavLink to="/admin/permissions" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          <span className="nav-icon">🔒</span>
          <span className="nav-text">Gestionar Permisos</span>
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <button className="logout-button">
          <span className="nav-icon">🚪</span>
          <span className="nav-text">Cerrar sesión</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
