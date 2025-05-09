"use client"

import type React from "react"
import { useParams } from "react-router-dom"
import "../styles/ViewRating.css"
import { mockGames, mockRatings, ratingCriteria } from "../data/mockData"

const ViewRating: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const game = mockGames.find((g) => g.id === id)
  const rating = mockRatings.find((r) => r.gameId === id)

  if (!game || !rating) {
    return <div className="jurados-error-message">Calificación no encontrada</div>
  }

  const renderStars = (value: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`jurados-star ${i < value ? "filled" : ""}`}>
          ★
        </span>,
      )
    }
    return <div className="jurados-stars-container">{stars}</div>
  }

  return (
    <div className="jurados-view-rating-container">
      <h2 className="jurados-view-rating-title">Resultados de evaluación</h2>

      <div className="jurados-rating-results-container">
        <div className="jurados-rating-table-container">
          <table className="jurados-rating-results-table">
            <thead>
              <tr>
                <th className="jurados-criterion-column">
                  <div className="jurados-column-header">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3.01" y2="6"></line>
                      <line x1="3" y1="12" x2="3.01" y2="12"></line>
                      <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                    Criterio
                  </div>
                </th>
                <th className="jurados-valoration-column">
                  <div className="jurados-column-header">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20V10"></path>
                      <path d="M18 20V4"></path>
                      <path d="M6 20v-4"></path>
                    </svg>
                    Valoración
                  </div>
                </th>
                <th className="jurados-stars-column">
                  <div className="jurados-column-header">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    Calificación
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {ratingCriteria.map((criterion) => {
                const criterionRating = rating.criteria[criterion.id] || 0
                return (
                  <tr key={criterion.id}>
                    <td className="jurados-criterion-cell">{criterion.name}</td>
                    <td className="jurados-valoration-cell">{criterionRating}</td>
                    <td className="jurados-stars-cell">{renderStars(criterionRating)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="jurados-comments-section">
          <h3 className="jurados-comments-title">Comentarios:</h3>
          <div className="jurados-comments-content">
            <p>{rating.comments}</p>
          </div>

          <div className="jurados-rating-timestamp">Fecha y hora de calificación: {rating.timestamp}</div>
        </div>
      </div>
    </div>
  )
}

export default ViewRating
