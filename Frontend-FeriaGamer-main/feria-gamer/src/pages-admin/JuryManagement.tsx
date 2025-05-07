"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./JuryManagement.css"

interface Juror {
  id: string
  name: string
  email: string
  status: string
  lastConnection: string
  evaluations: number
}

const JuryManagement: React.FC = () => {
  const [jurors, setJurors] = useState<Juror[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    // Simulating API call to fetch jurors
    const mockJurors = [
      {
        id: "1",
        name: "Margarita",
        email: "marg@uninorte.edu.co",
        status: "Activo",
        lastConnection: "10/05/2025 2:46pm",
        evaluations: 5,
      },
      {
        id: "2",
        name: "Carolina",
        email: "carol@uninorte.edu.co",
        status: "Activo",
        lastConnection: "08/05/2025 3:55pm",
        evaluations: 4,
      },
      {
        id: "3",
        name: "Rocío",
        email: "rocio@uninorte.edu.co",
        status: "No Existe",
        lastConnection: "-",
        evaluations: 0,
      },
    ]

    setJurors(mockJurors)
  }, [])

  const handleAddJuror = () => {
    navigate("/admin/jury/add")
  }

  const handleJurorClick = (id: string) => {
    navigate(`/admin/jury/${id}`)
  }

  return (
    <div className="jury-management-container">
      <h1 className="jury-title">¡Bienvenido al apartado de Gestionar Jurados</h1>

      {jurors.length === 0 ? (
        <div className="empty-state">
          <p className="empty-message">Los jurados que agregues aparecerán en esta sección</p>
          <button className="add-button" onClick={handleAddJuror}>
            +
          </button>
        </div>
      ) : (
        <>
          <div className="table-container">
            <table className="jurors-table">
              <thead>
                <tr>
                  <th>Nombre Jurado</th>
                  <th>Correo Institucional</th>
                  <th>Estado</th>
                  <th>Última Conexión</th>
                  <th># Evaluaciones</th>
                </tr>
              </thead>
              <tbody>
                {jurors.map((juror) => (
                  <tr key={juror.id} onClick={() => handleJurorClick(juror.id)}>
                    <td>{juror.name}</td>
                    <td>{juror.email}</td>
                    <td>{juror.status}</td>
                    <td>{juror.lastConnection}</td>
                    <td>{juror.evaluations === 0 ? "-" : juror.evaluations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="add-button" onClick={handleAddJuror}>
            +
          </button>
        </>
      )}
    </div>
  )
}

export default JuryManagement
