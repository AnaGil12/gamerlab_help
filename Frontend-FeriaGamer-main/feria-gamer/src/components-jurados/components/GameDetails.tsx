"use client"

import type React from "react"
import { useParams, useNavigate } from "react-router-dom"
import "../styles/GameDetails.css";
import { mockGames } from "../data/mockData"

const GameDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const game = mockGames.find((g) => g.id === id)

  if (!game) {
    return <div className="jurados-error-message">Juego no encontrado</div>
  }

  const handleRateClick = () => {
    navigate(`rate/${id}`); // Ruta relativa: /jurados/game/3/rate/3
  };
  
  const handleViewRatingClick = () => {
    navigate(`view-rating/${id}`); // Ruta relativa: /jurados/game/3/view-rating/3
  };

  return (
    <div className="jurados-game-details-container">
      <div className="jurados-game-details-content">
        <div className="jurados-game-header">
          <h2 className="jurados-team-title">Los mejores gamers</h2>
          <h3 className="jurados-game-subtitle">
            Nombre del juego: <span className="jurados-game-name">{game.name}</span>
          </h3>
        </div>

        <div className="jurados-game-info">
          <div className="jurados-game-logo-container">
            <div className="jurados-quote-icon">❝</div>
            <img src={game.logo || "/placeholder.svg"} alt={`${game.name} logo`} className="jurados-game-detail-logo" />
          </div>

          <div className="jurados-game-description">
            <p>{game.description}</p>

            <div className="jurados-game-metadata">
              <div className="jurados-metadata-item">
                <span className="jurados-metadata-label">Materia:</span>
                <span className="jurados-metadata-value">{game.subject}</span>
              </div>

              <div className="jurados-metadata-item">
                <span className="jurados-metadata-label">NRC:</span>
                <span className="jurados-metadata-value">{game.nrc}</span>
              </div>
            </div>

            <div className="jurados-team-members">
              {game.teamMembers.map((member, index) => (
                <div key={index} className="jurados-team-member">
                  <div className="jurados-member-icon">●</div>
                  <span className="jurados-member-name">{member}</span>
                </div>
              ))}
            </div>

            <div className="jurados-action-buttons">
              {game.rating === null ? (
                <button className="jurados-rate-button" onClick={handleRateClick}>
                  Calificar
                </button>
              ) : (
                <button className="jurados-view-rating-button" onClick={handleViewRatingClick}>
                  Ver Calificación
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetails
