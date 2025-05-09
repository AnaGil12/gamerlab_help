"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./JurorDetails.css"

interface Team {
  id: string
  name: string
  canEvaluate: boolean
}

interface JurorData {
  id: string
  fullName: string
  email: string
  status: string
  lastConnection: string
  evaluationsCount: number
  teams: Team[]
}

const JurorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [juror, setJuror] = useState<JurorData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating API call to fetch juror details
    setLoading(true)

    // Mock data
    const mockJuror: JurorData = {
      id: id || "1",
      fullName: "Vanessa Diaz De La Hoz",
      email: "vanessadelahoz@uninorte.edu.co",
      status: "Pendiente por Aceptar",
      lastConnection: "No existe",
      evaluationsCount: 0,
      teams: [
        { id: "1", name: "losmejoresgaymers", canEvaluate: false },
        { id: "2", name: "kakakakakakakaka", canEvaluate: false },
        { id: "3", name: "Frank's team", canEvaluate: false },
        { id: "4", name: "CharipasoHeaven", canEvaluate: false },
        { id: "5", name: "teteteteaaambest", canEvaluate: false },
      ],
    }

    setTimeout(() => {
      setJuror(mockJuror)
      setLoading(false)
    }, 500)
  }, [id])

  const handleTeamToggle = (teamId: string) => {
    if (!juror) return

    setJuror({
      ...juror,
      teams: juror.teams.map((team) => (team.id === teamId ? { ...team, canEvaluate: !team.canEvaluate } : team)),
    })
  }

  const handleSave = () => {
    // Here you would typically make an API call to save the changes
    console.log("Saving juror data:", juror)
    alert("Cambios guardados con éxito")
  }

  const handleResendInvitation = () => {
    // Here you would typically make an API call to resend the invitation
    console.log("Resending invitation to:", juror?.email)
    alert("Invitación reenviada con éxito")
  }

  const handleDelete = () => {
    // Here you would typically make an API call to delete the juror
    console.log("Deleting juror:", juror?.id)
    if (window.confirm("¿Estás seguro de que deseas eliminar este jurado?")) {
      alert("Jurado eliminado con éxito")
      // Navigate back to jury management
      window.location.href = "/jury"
    }
  }

  if (loading) {
    return <div className="loading">Cargando...</div>
  }

  if (!juror) {
    return <div className="error">No se encontró el jurado</div>
  }

  return (
    <div className="juror-details-container">
      <h1 className="juror-name">{juror.fullName}</h1>

      <div className="juror-info-card">
        <div className="form-group">
          <label className="form-label">Nombre Completo</label>
          <input type="text" className="form-input" value={juror.fullName} readOnly />
          <button className="edit-button">
            <span className="edit-icon">✏️</span>
          </button>
        </div>

        <div className="form-group">
          <label className="form-label">Correo Institucional</label>
          <input type="email" className="form-input" value={juror.email} readOnly />
          <button className="edit-button">
            <span className="edit-icon">✉️</span>
          </button>
        </div>

        <div className="form-group">
          <label className="form-label">Estado</label>
          <input type="text" className="form-input" value={juror.status} readOnly />
        </div>

        <div className="form-group">
          <label className="form-label">Última conexión</label>
          <input type="text" className="form-input" value={juror.lastConnection} readOnly />
        </div>

        <div className="form-group">
          <label className="form-label"># De juegos evaluados</label>
          <input type="text" className="form-input" value={juror.evaluationsCount.toString()} readOnly />
        </div>
      </div>

      <div className="teams-card">
        <h2 className="teams-title">Selecciona los equipos que puede calificar</h2>

        <div className="teams-list">
          {juror.teams.map((team) => (
            <div key={team.id} className="team-item">
              <div className="team-name">
                <span className="team-icon">🎮</span>
                {team.name}
              </div>
              <div
                className={`team-toggle ${team.canEvaluate ? "active" : ""}`}
                onClick={() => handleTeamToggle(team.id)}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="action-buttons">
        <button className="action-button delete" onClick={handleDelete}>
          Eliminar Jurado
        </button>
        <button className="action-button resend" onClick={handleResendInvitation}>
          Reenviar Invitación
        </button>
        <button className="action-button save" onClick={handleSave}>
          Guardar Cambios
        </button>
      </div>
    </div>
  )
}

export default JurorDetails
