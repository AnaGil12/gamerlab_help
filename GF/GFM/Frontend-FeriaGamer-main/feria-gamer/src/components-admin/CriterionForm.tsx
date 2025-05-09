"use client"

import type React from "react"
import { useState, useEffect } from "react"
import "./CriterionForm.css"

interface Criterion {
  id: string
  name: string
  description: string
  percentage: number
}

interface CriterionFormProps {
  criterion: Criterion | null
  onSave: (criterion: Criterion) => void
  onCancel: () => void
  existingPercentage: number
}

const CriterionForm: React.FC<CriterionFormProps> = ({ criterion, onSave, onCancel, existingPercentage }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [percentage, setPercentage] = useState(10)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (criterion) {
      setName(criterion.name)
      setDescription(criterion.description)
      setPercentage(criterion.percentage)
    } else {
      // For new criterion, suggest a percentage that would make the total 100%
      const suggestedPercentage = Math.max(5, 100 - existingPercentage)
      setPercentage(suggestedPercentage)
    }
  }, [criterion, existingPercentage])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      setError("El nombre del criterio es obligatorio")
      return
    }

    if (!description.trim()) {
      setError("La descripción es obligatoria")
      return
    }

    if (percentage <= 0) {
      setError("El porcentaje debe ser mayor que 0")
      return
    }

    if (percentage + existingPercentage > 100) {
      setError(`El porcentaje total no puede superar el 100%. Máximo disponible: ${100 - existingPercentage}%`)
      return
    }

    onSave({
      id: criterion?.id ?? '', // o undefined, según cómo manejes eso
      name,
      description,
      percentage,
    })    
  }

  const increasePercentage = () => {
    if (percentage + existingPercentage < 100) {
      setPercentage(percentage + 5)
    }
  }

  const decreasePercentage = () => {
    if (percentage > 5) {
      setPercentage(percentage - 5)
    }
  }

  return (
    <div className="criterion-form-container">
      <div className="criterion-form-card">
        <h2 className="form-title">{criterion ? "Editar Criterio" : "Agregar Criterio"}</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="criterionName" className="form-label">
              Criterio
            </label>
            <input
              type="text"
              id="criterionName"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Presentación personal del equipo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="criterionDescription" className="form-label">
              Descripción breve
            </label>
            <textarea
              id="criterionDescription"
              className="form-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Lenguaje corporal, presencia, orden y seguridad al exponer."
              rows={3}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Valoración</label>
            <div className="percentage-selector">
              <button
                type="button"
                className="percentage-button"
                onClick={decreasePercentage}
                aria-label="Disminuir porcentaje"
              >
                −
              </button>
              <div className="percentage-value">{percentage}%</div>
              <button
                type="button"
                className="percentage-button"
                onClick={increasePercentage}
                aria-label="Aumentar porcentaje"
              >
                +
              </button>
            </div>
          </div>

          {error && <div className="form-error">{error}</div>}

          <div className="form-actions">
            <button type="submit" className="save-button">
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
      <button className="cancel-button" onClick={onCancel}>
        Cancelar
      </button>
    </div>
  )
}

export default CriterionForm
