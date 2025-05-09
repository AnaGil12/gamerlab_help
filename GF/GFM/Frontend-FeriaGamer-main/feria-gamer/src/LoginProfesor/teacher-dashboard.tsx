"use client"

import { useNavigate } from "react-router-dom"
import Sidebar from "./sidebar"
import styles from "./teacher-dashboard.module.css"

export default function TeacherDashboard() {
  const navigate = useNavigate()

  const handleCourseSelect = (course: string) => {
    navigate(`/curso/${encodeURIComponent(course)}`)
  }

  const handleLogout = () => {
    navigate("/login")
  }

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar onLogout={handleLogout} activeButton="visualizar" />

      <main className={styles.mainContent}>
        <div className={styles.welcomeMessage}>
          <h1>Bienvenido a tu apartado de Profesor</h1>
          <p>Visualiza tus materias y estadísticas referentes a estas</p>
        </div>

        <div className={styles.coursesGrid}>
          <button className={styles.courseCard} onClick={() => handleCourseSelect("Estructura de Datos I")}>
            Estructura de Datos I
          </button>

          <button className={styles.courseCard} onClick={() => handleCourseSelect("Optimizacion")}>
            Optimizacion
          </button>

          <button className={styles.courseCard} onClick={() => handleCourseSelect("Algoritmia y Programacion II")}>
            Algoritmia y Programacion II
          </button>
        </div>
      </main>
    </div>
  )
}
