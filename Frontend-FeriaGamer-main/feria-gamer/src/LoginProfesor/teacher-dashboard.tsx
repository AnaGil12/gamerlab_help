"use client"

import Sidebar from "./sidebar"
import styles from "./teacher-dashboard.module.css"

interface TeacherDashboardProps {
  onCourseSelect: (course: string) => void
  onLogout: () => void
}

export default function TeacherDashboard({ onCourseSelect, onLogout }: TeacherDashboardProps) {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar onLogout={onLogout} activeButton="visualizar" />

      <main className={styles.mainContent}>
        <div className={styles.welcomeMessage}>
          <h1>Bienvenido a tu apartado de Profesor</h1>
          <p>Visualiza tus materias y estadísticas referentes a estas</p>
        </div>

        <div className={styles.coursesGrid}>
          <button className={styles.courseCard} onClick={() => onCourseSelect("Estructura de Datos I")}>
            Estructura de Datos I
          </button>

          <button className={styles.courseCard} onClick={() => onCourseSelect("Optimizacion")}>
            Optimizacion
          </button>

          <button className={styles.courseCard} onClick={() => onCourseSelect("Algoritmia y Programacion II")}>
            Algoritmia y Programacion II
          </button>
        </div>
      </main>
    </div>
  )
}
