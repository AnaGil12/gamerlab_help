"use client";

import "./styles/styles.css";
import { LightbulbIcon, ScaleIcon, GearIcon } from "./icons";
import { Link } from 'react-router-dom';

export default function FeriaGamer() {
  return (
    <div className="feria-gamer-container">
      <header className="header">
        <div className="logo">III Feria Gamer</div>
        <nav className="nav">
          <a href="#" className="nav-link">Jurado</a>
          <a href="#" className="nav-link">Administrador</a>
          <Link to="/login" className="button-link">
            Iniciar sesión
          </Link>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h1 className="main-title">
            ¡Bienvenidos a la <span className="highlight">III Feria Gamer</span>
            <br />de la Universidad del Norte!
          </h1>

          <p className="subtitle">
            Una experiencia donde la <strong>pasión por los videojuegos</strong> se
            convierte en aprendizaje, creatividad y colaboración.
          </p>

          <div className="buttons-container">
            <Link to="/registrar" className="register-button">
              Registra tu equipo
            </Link>
            <Link to="/consultar" className="register-button">
              Consulta tu equipo
            </Link>
            <Link to="/reportes" className="register-button">
              Ver reportes
            </Link>
          </div>
        </section>

        <section className="banner-section">
          <div className="purple-banner">
            <p className="banner-text">
              ¡Prepárate para jugar, aprender y conectar en
              esta <strong>nueva edición de la Feria Gamer 2025</strong>!
            </p>
          </div>
        </section>

        <section className="roles-section">
          <h2 className="roles-title">Conoce los roles dentro de la feria</h2>

          <div className="roles-container">
            <div className="role-card">
              <div className="icon-container">
                <LightbulbIcon />
              </div>
              <h3 className="role-name">Estudiantes</h3>
              <p className="role-description">
                Registra y consulta tu equipo en el evento.
              </p>
            </div>

            <div className="role-card">
              <div className="icon-container">
                <ScaleIcon />
              </div>
              <h3 className="role-name">Jurados</h3>
              <p className="role-description">
                Explora y califica cada videojuego.
              </p>
            </div>

            <div className="role-card">
              <div className="icon-container">
                <GearIcon />
              </div>
              <h3 className="role-name">Administradores</h3>
              <p className="role-description">
                Supervisa y gestiona todo el evento.
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="code-background">
        <div className="code-text">
          public class PlayerController {'{'}
          <br />MotionState
          <br />[Header("Movement")]
          <br />public float moveSpeed;
          <br />public float rotationSpeed;
          <br />[Header("Stats")]
          <br />public float jumpForce;
          <br />public LayerMask
        </div>
      </div>
    </div>
  );
}