import type React from "react"
import "../styles/header.css"
import { Link } from "react-router-dom"

interface HeaderProps {
  currentStep: number
}

const Header: React.FC<HeaderProps> = ({ currentStep }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>III Feria Gamer</h1>
      </div>
      <div className="header-right">
        <button className="header-button">Jurado</button>
        <button className="header-button">Administrador</button>
        <Link to="/login" className="header-button primary">
            Iniciar sesión
        </Link>
      </div>
    </header>
  )
}

export default Header
