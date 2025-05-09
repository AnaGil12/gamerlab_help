"use client"
import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CriteriaManagement.css"
import CriterionForm from "../components-admin/CriterionForm"

interface Criterion {
  id: string
  name: string
  description: string
  percentage: number
}

const CriteriaManagement: React.FC = () => {
  const [criteria, setCriteria] = useState<Criterion[]>([
    {
      id: "1",
      name: "Interfaz de Usuario",
      description: "Diseño, colores, usabilidad",
      percentage: 10,
    },
    {
      id: "2",
      name: "Interacción",
      description: "Controles, guía al usuario, intuitividad",
      percentage: 20,
    },
    {
      id: "3",
      name: "Resultados",
      description: "Reacciones, recompensas, retroalimentación visual",
      percentage: 15,
    },
    {
      id: "4",
      name: "Presentación del Proyecto",
      description: "Claridad, coherencia, comunicación del objetivo",
      percentage: 15,
    },
    {
      id: "5",
      name: "Funcionamiento del Programa",
      description: "Que no tenga errores y cumpla su propósito",
      percentage: 30,
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingCriterion, setEditingCriterion] = useState<Criterion | null>(null)
  const navigate = useNavigate()

  const handleAddCriterion = () => {
    setEditingCriterion(null)
    setShowForm(true)
  }

  const handleEditCriterion = (criterion: Criterion) => {
    setEditingCriterion(criterion)
    setShowForm(true)
  }

  const handleDeleteCriterion = (id: string) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este criterio?")) {
      setCriteria(criteria.filter((criterion) => criterion.id !== id))
    }
  }

  const handleSaveCriterion = (criterion: Criterion) => {
    if (editingCriterion) {
      // Update existing criterion
      setCriteria(criteria.map((c) => (c.id === editingCriterion.id ? { ...criterion, id: editingCriterion.id } : c)))
    } else {
      // Add new criterion
      const newId = (Math.max(...criteria.map((c) => Number.parseInt(c.id))) + 1).toString()
      setCriteria([...criteria, { ...criterion, id: newId }])
    }
    setShowForm(false)
  }

  const handleCancelForm = () => {
    setShowForm(false)
    setEditingCriterion(null)
  }

  const totalPercentage = criteria.reduce((sum, criterion) => sum + criterion.percentage, 0)

  return (
    <div className="criteria-management-container">
      {!showForm ? (
        <>
          <h1 className="criteria-title">¡Bienvenido al apartado de Gestionar los Criterios de Calificación!</h1>

          <div className="qualification-range">
            <span>Rango de calificación de</span>
            <div className="range-value">0</div>
            <span>hasta</span>
            <div className="range-value">5</div>
          </div>

          <div className="criteria-table-container">
            <table className="criteria-table">
              <thead>
                <tr>
                  <th className="criterion-column">Criterio</th>
                  <th className="description-column">Descripción breve</th>
                  <th className="percentage-column">%</th>
                  <th className="actions-column"></th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((criterion) => (
                  <tr key={criterion.id}>
                    <td>{criterion.name}</td>
                    <td>{criterion.description}</td>
                    <td>{criterion.percentage}%</td>
                    <td className="actions-cell">
                      <button
                        className="action-icon delete-icon"
                        onClick={() => handleDeleteCriterion(criterion.id)}
                        aria-label="Eliminar criterio"
                      >
                        🗑️
                      </button>
                      <button
                        className="action-icon edit-icon"
                        onClick={() => handleEditCriterion(criterion)}
                        aria-label="Editar criterio"
                      >
                        ✏️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPercentage !== 100 && (
            <div className="percentage-warning">
              <p>
                La suma de los porcentajes debe ser 100%. Actualmente: <strong>{totalPercentage}%</strong>
              </p>
            </div>
          )}

          <button className="add-button" onClick={handleAddCriterion} aria-label="Agregar criterio">
            +
          </button>
        </>
      ) : (
        <CriterionForm
          criterion={editingCriterion}
          onSave={handleSaveCriterion}
          onCancel={handleCancelForm}
          existingPercentage={totalPercentage - (editingCriterion?.percentage || 0)}
        />
      )}
    </div>
  )
}

export default CriteriaManagement
