// src/components/Header.tsx

import React from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Header.css"

interface HeaderProps {
  showToast: (message: string, type: "success" | "error") => void
}

const Header: React.FC<HeaderProps> = ({ showToast }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    showToast("Sesión cerrada", "success")
    // Espera 1.5 segundos antes de redirigir
    setTimeout(() => {
      navigate("/")
    }, 1500)
  }  

  return (
    <header className="jurados-header">
      <h1 className="jurados-header-title">III Feria Gamer</h1>
      <button className="jurados-logout-button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </header>
  )
}

export default Header
