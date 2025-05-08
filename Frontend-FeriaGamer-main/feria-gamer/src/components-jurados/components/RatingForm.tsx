"use client"

import type React from "react"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "../styles/RatingForm.css"
import { mockGames, ratingCriteria } from "../data/mockData"

interface RatingFormProps {
  showToast: (message: string, type: "success" | "error") => void
}

const RatingForm: React.FC<RatingFormProps> = ({ showToast }) => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const game = mockGames.find((g) => g.id === id)

  const [ratings, setRatings] = useState<{ [key: string]: number | null }>(
    ratingCriteria.reduce(
      (acc, criterion) => {
        acc[criterion.id] = null
        return acc
      },
      {} as { [key: string]: number | null }
    )
  )

  const [comment, setComment] = useState("")

  if (!game) {
    return <div className="jurados-error-message">Juego no encontrado</div>
  }

  const handleRatingChange = (criterionId: string, value: number) => {
    setRatings((prev) => ({
      ...prev,
      [criterionId]: value,
    }))
  }

  const handleSubmit = () => {
    // Llamamos al Toast cuando se envía la calificación
    showToast("Calificación enviada con éxito", "success")
    navigate("/jurados") // Redirigir a la página principal después de enviar
  }

  const renderRatingOptions = (criterionId: string) => {
    const options = []
    for (let i = 1; i <= 5; i++) {
      options.push(
        <div
          key={i}
          className={`jurados-rating-option ${ratings[criterionId] === i ? "selected" : ""}`}
          onClick={() => handleRatingChange(criterionId, i)}
        >
          {i}
        </div>
      )
    }
    return options
  }

  const renderStars = (criterionId: string) => {
    const rating = ratings[criterionId]
    const stars = []

    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`jurados-star ${i < (rating || 0) ? "filled" : ""}`}>
          ★
        </span>
      )
    }

    return <div className="jurados-stars-container">{stars}</div>
  }

  return (
    <div className="jurados-rating-form-container">
      <h2 className="jurados-rating-form-title">¡Puntua el juego según estos criterios!</h2>

      <div className="jurados-rating-table-container">
        <table className="jurados-rating-table">
          <thead>
            <tr>
              <th className="jurados-criterion-column">Criterio</th>
              <th className="jurados-description-column">Descripción</th>
              <th className="jurados-valoration-column">Valoración</th>
              <th className="jurados-stars-column">Calificación</th>
            </tr>
          </thead>
          <tbody>
            {ratingCriteria.map((criterion) => (
              <tr key={criterion.id}>
                <td className="jurados-criterion-cell">{criterion.name}</td>
                <td className="jurados-description-cell">{criterion.description}</td>
                <td className="jurados-valoration-cell">
                  <div className="jurados-rating-options">{renderRatingOptions(criterion.id)}</div>
                </td>
                <td className="jurados-stars-cell">{renderStars(criterion.id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="jurados-comments-section">
        <label className="jurados-comments-label">
          Comentarios: <span className="jurados-optional-text">Opcional</span>
        </label>
        <textarea
          className="jurados-comments-textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe tus comentarios aquí..."
        />
      </div>

      <div className="jurados-submit-container">
        <button className="jurados-submit-button" onClick={handleSubmit}>
          Enviar Calificación
        </button>
      </div>
    </div>
  )
}

export default RatingForm
