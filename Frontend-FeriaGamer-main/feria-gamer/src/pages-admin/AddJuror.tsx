"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./AddJuror.css"
import Notification from "../components-admin/Notification"

const AddJuror: React.FC = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [showNotification, setShowNotification] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically make an API call to add the juror
    console.log("Adding juror:", { fullName, email })

    // Show success notification
    setShowNotification(true)
  }

  const handleCloseNotification = () => {
    setShowNotification(false)
    // Navigate back to jury management after closing notification
    navigate("/admin/jury")
  }

  return (
    <div className="add-juror-container">
      <h1 className="add-juror-title">Agrega un Jurado nuevo y envía un correo para que Acepte</h1>

      <div className="juror-form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Nombre Completo
            </label>
            <input
              type="text"
              id="fullName"
              className="form-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Correo Institucional
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="save-button">
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>

      <Notification
        message="Se ha enviado el correo de invitación al jurado con éxito."
        isVisible={showNotification}
        onClose={handleCloseNotification}
      />
    </div>
  )
}

export default AddJuror
