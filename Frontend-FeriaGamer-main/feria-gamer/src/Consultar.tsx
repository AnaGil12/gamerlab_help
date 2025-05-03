"use client"
import { useState } from "react"
import { Link } from 'react-router-dom';
import "./styles/styles-consultar.css"

export default function Consultar() {
  const [materia, setMateria] = useState("")
  const [nrc, setNrc] = useState("")

  return (
    <div className="feria-gamer">
      <header className="header">
        <div className="logo">III Feria Gamer</div>
        <nav className="navigation">
          <a href="#" className="nav-link">
            Jurado
          </a>
          <a href="#" className="nav-link">
            Administrador
          </a>
          <button className="login-button">Iniciar sesión</button>
        </nav>
      </header>

      <main className="main-content">
        <div className="card">
          <div className="card-content">
            <div className="text-section">
              <h1 className="main-heading">
                ¡Consulta el estado
                <div className="subheading">de tu equipo!</div>
              </h1>

              <p className="registration-text">
                ¿Aún no has registrado tu equipo?{" "}
                <Link to="/registrar" className="highlight-link">
                  Haz clic aquí
                </Link>
              </p>

              <div className="form-group">
                <select className="select-input" value={materia} onChange={(e) => setMateria(e.target.value)}>
                  <option value="" disabled selected>
                    Materia
                  </option>
                  <option value="option1">Opción 1</option>
                  <option value="option2">Opción 2</option>
                  <option value="option3">Opción 3</option>
                </select>
              </div>

              <div className="form-group">
                <select className="select-input" value={nrc} onChange={(e) => setNrc(e.target.value)}>
                  <option value="" disabled selected>
                    NRC
                  </option>
                  <option value="nrc1">NRC 1</option>
                  <option value="nrc2">NRC 2</option>
                  <option value="nrc3">NRC 3</option>
                </select>
              </div>

              <button className="search-button">Buscar</button>
            </div>

            <div className="image-section">
              <img
                src="/img/consulta.jpg"
                alt="Game controller"
                width={400}
                height={400}
                className="controller-image"
              />
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
