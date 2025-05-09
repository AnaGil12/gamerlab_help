"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./ProfessorManagement.css"

interface Professor {
  id: string
  name: string
  email: string
  subject: string
  nrc: string
}

const ProfessorManagement: React.FC = () => {
  const [professors, setProfessors] = useState<Professor[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    // Simulating API call to fetch professors
    const mockProfessors = [
      {
        id: "1",
        name: "Margarita",
        email: "marg@uninorte.edu.co",
        subject: "IST8391",
        nrc: "1521",
      },
      {
        id: "2",
        name: "Carolina",
        email: "carol@uninorte.edu.co",
        subject: "ISN7828",
        nrc: "4021",
      },
      {
        id: "3",
        name: "Rocío",
        email: "rocio@uninorte.edu.co",
        subject: "IST2040",
        nrc: "2140",
      },
    ]

    setProfessors(mockProfessors)
  }, [])

  const handleAddProfessor = () => {
    navigate("/admin/professors/add")
  }

  const handleProfessorClick = (id: string) => {
    navigate(`/admin/professors/${id}`)
  }

  return (
    <div className="professor-management-container">
      <h1 className="professor-title">¡Bienvenido al apartado de Gestionar profesores!</h1>

      {professors.length === 0 ? (
        <div className="empty-state">
          <p className="empty-message">Los profesores que agregues aparecerán en esta sección</p>
          <button className="add-button" onClick={handleAddProfessor}>
            +
          </button>
        </div>
      ) : (
        <>
          <div className="table-container">
            <table className="professors-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo institucional</th>
                  <th>Materia</th>
                  <th>NRC</th>
                </tr>
              </thead>
              <tbody>
                {professors.map((professor) => (
                  <tr key={professor.id} onClick={() => handleProfessorClick(professor.id)}>
                    <td>{professor.name}</td>
                    <td>{professor.email}</td>
                    <td>{professor.subject}</td>
                    <td>{professor.nrc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="add-button" onClick={handleAddProfessor}>
            +
          </button>
        </>
      )}
    </div>
  )
}

export default ProfessorManagement
