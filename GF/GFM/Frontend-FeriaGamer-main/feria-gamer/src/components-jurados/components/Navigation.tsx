import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/Navigation.css"

const Navigation: React.FC = () => {
  return (
    <nav className="jurados-navigation">
      <NavLink 
        to="/jurados" 
        end
        className={({ isActive }) => isActive ? "jurados-nav-item active" : "jurados-nav-item"}
      >
        <span className="jurados-nav-icon">🎮</span>
        <span className="jurados-nav-text">Lista de Juegos</span>
      </NavLink>
      <NavLink 
        to="/jurados/analytics" 
        className={({ isActive }) => isActive ? "jurados-nav-item active" : "jurados-nav-item"}
      >
        <span className="jurados-nav-icon">📈</span>
        <span className="jurados-nav-text">Análisis y Estadísticas</span>
      </NavLink>
    </nav>
  )
}

export default Navigation 