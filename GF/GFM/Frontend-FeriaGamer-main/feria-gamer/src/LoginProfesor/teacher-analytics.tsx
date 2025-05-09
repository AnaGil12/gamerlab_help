"use client"

import { useNavigate } from "react-router-dom"
import Sidebar from "./sidebar"
import styles from "./teacher-analytics.module.css"

export default function TeacherAnalytics() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/login")
  }

  return (
    <div className={styles.analyticsContainer}>
      <Sidebar onLogout={handleLogout} activeButton="analytics" />

      <main className={styles.mainContent}>
        <div className={styles.welcomeMessage}>
          <h1>Análisis y Estadísticas</h1>
          <p>Visualiza las estadísticas y análisis de tus materias</p>
        </div>

        <div className={styles.analyticsContent}>
          <p>Aquí se mostrarán los análisis y estadísticas de tus materias.</p>
        </div>
      </main>
    </div>
  )
} 