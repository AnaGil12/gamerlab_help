"use client"

import Sidebar from "./sidebar"
import styles from "./course-detaile.module.css"

interface CourseDetailProps {
  courseName: string
  onBack: () => void
  onLogout: () => void
}

export default function CourseDetail({ courseName, onBack, onLogout }: CourseDetailProps) {
  return (
    <div className={styles.courseDetailContainer}>
      <Sidebar onLogout={onLogout} activeButton="visualizar" />

      <main className={styles.mainContent}>
        <h1 className={styles.courseTitle}>{courseName}</h1>

        <div className={styles.dropdownSection}>
          <button className={styles.nrcDropdown}>
            NRC <span className={styles.dropdownArrow}>▼</span>
          </button>
        </div>

        <div className={styles.chartSection}>
          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <h3>Item approvals in</h3>
              <div className={styles.chartFilter}>
                This week <span className={styles.dropdownArrow}>▼</span>
              </div>
            </div>

            <div className={styles.chartContent}>
              <div className={styles.chartLabels}>
                <div className={styles.chartLabel}>Interfaz de Usuario</div>
                <div className={styles.chartLabel}>Interacción</div>
                <div className={styles.chartLabel}>Resultados</div>
                <div className={styles.chartLabel}>Presentación del Proyecto</div>
                <div className={styles.chartLabel}>Presentación del Prototipo</div>
                <div className={styles.chartLabel}>Personal del Equipo</div>
              </div>

              <div className={styles.chartBars}>
                <div className={styles.chartBar} style={{ width: "80%" }}></div>
                <div className={styles.chartBar} style={{ width: "85%" }}></div>
                <div className={styles.chartBar} style={{ width: "65%" }}></div>
                <div className={styles.chartBar} style={{ width: "90%" }}></div>
                <div className={styles.chartBar} style={{ width: "50%" }}></div>
                <div className={styles.chartBar} style={{ width: "35%" }}></div>
              </div>
            </div>

            <div className={styles.chartScale}>
              <span>1</span>
              <span>1.5</span>
              <span>2</span>
              <span>2.5</span>
              <span>3</span>
              <span>3.5</span>
              <span>4</span>
              <span>4.5</span>
              <span>5</span>
            </div>
          </div>
        </div>

        <div className={styles.navigationControls}>
          <button className={styles.navButton}>◀</button>
          <div className={styles.navIndicator}>
            <div className={styles.navDot} style={{ backgroundColor: "#333" }}></div>
          </div>
          <button className={styles.navButton}>▶</button>
        </div>

        <div className={styles.tableSection}>
          <table className={styles.studentsTable}>
            <thead>
              <tr>
                <th>Equipo</th>
                <th>Nombre Estudiante</th>
                <th>Correo Institucional</th>
                <th>Materia</th>
                <th>NRC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="/images/team-logo-1.png" alt="Team Logo" className={styles.teamLogo} />
                </td>
                <td>Zharick Oviedo</td>
                <td>zharick@uninorte.edu.co</td>
                <td>EDO1234</td>
                <td>2288</td>
              </tr>
              <tr>
                <td>
                  <img src="/images/team-logo-2.png" alt="Team Logo" className={styles.teamLogo} />
                </td>
                <td>Vanessa Diaz</td>
                <td>van@uninorte.edu.co</td>
                <td>EDO1234</td>
                <td>2288</td>
              </tr>
              <tr>
                <td>
                  <img src="/images/team-logo-1.png" alt="Team Logo" className={styles.teamLogo} />
                </td>
                <td>Andy Diaz</td>
                <td>and@uninorte.edu.co</td>
                <td>EDO1234</td>
                <td>2288</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
