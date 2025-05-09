import type React from "react"
import "./Dashboard.css"

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="welcome-section">
        <h1 className="welcome-title">¡Bienvenido a tu sesión como Administrador!</h1>
        <p className="welcome-subtitle">Mira todo lo que tenemos para ti; échale un vistazo a la barra izquierda</p>
      </div>
    </div>
  )
}

export default Dashboard
