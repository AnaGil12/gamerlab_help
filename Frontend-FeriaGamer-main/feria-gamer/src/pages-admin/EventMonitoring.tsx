"use client"

import type React from "react"
import { useState, useEffect } from "react"
import "./EventMonitoring.css"

interface TeamRanking {
  position: number
  teamName: string
  gameName: string
  subject: string
  score: number | string
}

interface EventStats {
  totalTeams: number
  totalGames: number
  evaluationsDone: number
  evaluationsExpected: number
  globalAverage: number
}

const EventMonitoring: React.FC = () => {
  const [stats, setStats] = useState<EventStats>({
    totalTeams: 3,
    totalGames: 3,
    evaluationsDone: 2,
    evaluationsExpected: 3,
    globalAverage: 4.5,
  })

  const [rankings, setRankings] = useState<TeamRanking[]>([
    {
      position: 1,
      teamName: "Los mejores gamers",
      gameName: "Shadow pulse",
      subject: "IST2103",
      score: 5,
    },
    {
      position: 2,
      teamName: "UniGamers",
      gameName: "Puffle pop",
      subject: "MAT222",
      score: 4,
    },
    {
      position: 3,
      teamName: "Warriors",
      gameName: "IronHowl",
      subject: "MAT333",
      score: "-",
    },
  ])

  // Simulating real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // This would typically be an API call to get the latest data
      // For demo purposes, we're just randomly changing the global average
      const newAverage = Math.round((4 + Math.random()) * 10) / 10
      setStats((prevStats) => ({
        ...prevStats,
        globalAverage: newAverage,
      }))
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="monitoring-container">
      <h1 className="monitoring-title">¡Bienvenido al apartado de monitoreo!</h1>
      <p className="monitoring-subtitle">Acá podrás ver el resumen general del evento</p>

      <div className="stats-card">
        <div className="stat-item">
          <div className="stat-label">Número total de equipos inscritos</div>
          <div className="stat-value">{stats.totalTeams}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Número de videojuegos registrados</div>
          <div className="stat-value">{stats.totalGames}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Número de evaluaciones hechas/esperadas</div>
          <div className="stat-value">
            {stats.evaluationsDone}/{stats.evaluationsExpected}
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Promedio global del evento</div>
          <div className="stat-value">{stats.globalAverage}</div>
        </div>
      </div>

      <h2 className="ranking-title">Ranking en tiempo real de los equipos</h2>

      <div className="ranking-table-container">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Puesto</th>
              <th>Nombre del equipo</th>
              <th>Nombre del juego</th>
              <th>Materia</th>
              <th>Calificación</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((team) => (
              <tr key={team.position}>
                <td>{team.position}</td>
                <td>{team.teamName}</td>
                <td>{team.gameName}</td>
                <td>{team.subject}</td>
                <td>{team.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EventMonitoring
