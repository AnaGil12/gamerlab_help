"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./AddProfessor.css"
import Notification from "../components-admin/Notification"

interface NRCOption {
  id: string
  value: string
  subject: string
}

const AddProfessor: React.FC = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [selectedNRC, setSelectedNRC] = useState("")
  const [isNRCDropdownOpen, setIsNRCDropdownOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const navigate = useNavigate()

  // Mock NRC options
  const nrcOptions: NRCOption[] = [
    { id: "1", value: "1521", subject: "IST8391" },
    { id: "2", value: "4021", subject: "ISN7828" },
    { id: "3", value: "2140", subject: "IST2040" },
    { id: "4", value: "3050", subject: "IST1010" },
    { id: "5", value: "6070", subject: "MAT2020" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically make an API call to add the professor
    console.log("Adding professor:", { fullName, email, selectedNRC })

    // Show success notification
    setShowNotification(true)
  }

  const toggleNRCDropdown = () => {
    setIsNRCDropdownOpen(!isNRCDropdownOpen)
  }

  const selectNRC = (nrc: string) => {
    setSelectedNRC(nrc)
    setIsNRCDropdownOpen(false)
  }

  const handleCloseNotification = () => {
    setShowNotification(false)
    // Navigate back to professor management after closing notification
    navigate("/admin/professors")
  }

  return (
    <div className="add-professor-container">
      <h1 className="add-professor-title">Agrega un nuevo profesor</h1>

      <div className="professor-form-card">
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

          <div className="form-group">
            <label htmlFor="nrc" className="form-label">
              NRC
            </label>
            <div className="dropdown">
              <button
                type="button"
                className="dropdown-toggle"
                onClick={toggleNRCDropdown}
                aria-haspopup="listbox"
                aria-expanded={isNRCDropdownOpen}
              >
                {selectedNRC || "Selecciona un NRC"}
                <span className="dropdown-arrow">▼</span>
              </button>
              {isNRCDropdownOpen && (
                <ul className="dropdown-menu" role="listbox">
                  {nrcOptions.map((option) => (
                    <li
                      key={option.id}
                      className="dropdown-item"
                      onClick={() => selectNRC(option.value)}
                      role="option"
                      aria-selected={selectedNRC === option.value}
                    >
                      {option.value} - {option.subject}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="save-button">
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>

      <Notification
        message="Profesor agregado con éxito."
        isVisible={showNotification}
        onClose={handleCloseNotification}
      />
    </div>
  )
}

export default AddProfessor
