"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./ProfessorDetails.css"

interface Professor {
  id: string
  fullName: string
  email: string
  subject: string
  nrc: string
  teams: string[]
}

const ProfessorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [professor, setProfessor] = useState<Professor | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating API call to fetch professor details
    setLoading(true)

    // Mock data
    const mockProfessor: Professor = {
      id: id || "1",
      fullName: "Margarita Fernández",
      email: "marg@uninorte.edu.co",
      subject: "IST8391",
      nrc: "1521",
      teams: ["Los mejores gamers", "UniGamers", "Warriors"],
    }

    setTimeout(() => {
      setProfessor(mockProfessor)
      setLoading(false)
    }, 500)
  }, [id])

  const handleSave = () => {
    // Here you would typically make an API call to save the changes
    console.log("Saving professor data:", professor)
    alert("Cambios guardados con éxito")
  }

  const handleDelete = () => {
    // Here you would typically make an API call to delete the professor
    console.log("Deleting professor:", professor?.id)
    if (window.confirm("¿Estás seguro de que deseas eliminar este profesor?")) {
      alert("Profesor eliminado con éxito")
      // Navigate back to professor management
      window.location.href = "/professors"
    }
  }

  if (loading) {
    return <div className="loading">Cargando...</div>
  }

  if (!professor) {
    return <div className="error">No se encontró el profesor</div>
  }

  return (
    <div className="professor-details-container">
      <h1 className="professor-name">{professor.fullName}</h1>

      <div className="professor-info-card">
        <div className="form-group">
          <label className="form-label">Nombre Completo</label>
          <input type="text" className="form-input" value={professor.fullName} readOnly />
          <button className="edit-button">
            <span className="edit-icon">✏️</span>
          </button>
        </div>

        <div className="form-group">
          <label className="form-label">Correo Institucional</label>
          <input type="email" className="form-input" value={professor.email} readOnly />
          <button className="edit-button">
            <span className="edit-icon">✉️</span>
          </button>
        </div>

        <div className="form-group">
          <label className="form-label">Materia</label>
          <input type="text" className="form-input" value={professor.subject} readOnly />
        </div>

        <div className="form-group">
          <label className="form-label">NRC</label>
          <input type="text" className="form-input" value={professor.nrc} readOnly />
        </div>
      </div>

      <div className="teams-card">
        <h2 className="teams-title">Equipos asignados</h2>

        <div className="teams-list">
          {professor.teams.map((team, index) => (
            <div key={index} className="team-item">
              <div className="team-name">
                <span className="team-icon">🎮</span>
                {team}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="action-buttons">
        <button className="action-button delete" onClick={handleDelete}>
          Eliminar Profesor
        </button>
        <button className="action-button save" onClick={handleSave}>
          Guardar Cambios
        </button>
      </div>
    </div>
  )
}

export default ProfessorDetails
