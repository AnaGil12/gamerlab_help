"use client"

import type React from "react"

import { useState } from "react"
import styles from "./login-page.module.css"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedRole, setSelectedRole] = useState("")

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedRole === "jurado") {
      window.location.href = "/profesor"
    } else if (selectedRole === "admin") {
      window.location.href = "/admin"
    }
  }  

  return (
    <div className={styles.loginContainer}>
      <header className={styles.header}>
        <h1>III Feria Gamer</h1>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.loginCard}>
          <div className={styles.loginForm}>
            <h2>INICIA SESIÓN</h2>
            <p>Inicia sesión con tu correo electronico</p>

            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="person@uninorte.edu.co"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="password"
                  placeholder="************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className={styles.signupButton}>
                Sign up
              </button>

              <div className={styles.roleSelector}>
                <button
                  type="button"
                  className={`${styles.roleButton} ${selectedRole === "admin" ? styles.selected : ""}`}
                  onClick={() => handleRoleSelect("admin")}
                >
                  Admin
                </button>
                <button
                  type="button"
                  className={`${styles.roleButton} ${selectedRole === "jurado" ? styles.selected : ""}`}
                  onClick={() => handleRoleSelect("jurado")}
                >
                  Profesor
                </button>
              </div>
            </form>
          </div>

          <div className={styles.loginImage}>
            <img src="/images/gaming-controller.jpg" alt="Gaming controller with keyboard" />
          </div>
        </div>
      </main>
    </div>
  )
}
