"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./sidebar.module.css"

interface SidebarProps {
  onLogout: () => void
  activeButton?: string
}

export default function Sidebar({ onLogout, activeButton }: SidebarProps) {
  const [isActive, setIsActive] = useState(activeButton === "visualizar")
  const [isAnalyticsActive, setIsAnalyticsActive] = useState(activeButton === "analytics")
  const navigate = useNavigate()

  const handleVisualizarClick = () => {
    setIsActive(true)
    setIsAnalyticsActive(false)
    navigate("/profesor")
  }

  const handleAnalyticsClick = () => {
    setIsActive(false)
    setIsAnalyticsActive(true)
    navigate("/profesor/analytics")
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>III Feria Gamer</h2>
      </div>

      <div className={styles.menuItems}>
        <button className={`${styles.menuItem} ${isActive ? styles.active : ""}`} onClick={handleVisualizarClick}>
          <span className={styles.icon}>○</span>
          Visualizar Materias
        </button>
        <button className={`${styles.menuItem} ${isAnalyticsActive ? styles.active : ""}`} onClick={handleAnalyticsClick}>
          <span className={styles.icon}>📈</span>
          Análisis y Estadísticas
        </button>
      </div>

      <div className={styles.logoutContainer}>
        <button className={styles.logoutButton} onClick={onLogout}>
          <span className={styles.icon}>←</span>
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}
