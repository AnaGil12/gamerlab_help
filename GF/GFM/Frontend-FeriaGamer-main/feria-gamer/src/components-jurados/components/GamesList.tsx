"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/GamesList.css"
import type { Game } from "../types/types"
import { mockGames } from "../data/mockData"

const GamesList: React.FC = () => {
  const [games, setGames] = useState<Game[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [ratingSortOrder, setRatingSortOrder] = useState<"asc" | "desc">("asc")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const navigate = useNavigate()

  // Get unique subjects for the filter dropdown
  const subjects = ["all", ...Array.from(new Set(mockGames.map((game) => game.subject)))]

  // Initial load
  useEffect(() => {
    applyFiltersAndSort()
  }, [])

  const applyFiltersAndSort = () => {
    let filteredGames = [...mockGames]
  
    // Filtrar por búsqueda
    if (searchTerm) {
      filteredGames = filteredGames.filter(
        (game) =>
          game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.teamName.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }
  
    // Filtrar por materia
    if (selectedSubject !== "all") {
      filteredGames = filteredGames.filter((game) => game.subject === selectedSubject)
    }
  
    // Ordenar: primero sin calificación, luego por nombre de equipo
    filteredGames.sort((a, b) => {
      // Juegos sin calificación van primero
      if (a.rating === null && b.rating !== null) return -1
      if (a.rating !== null && b.rating === null) return 1
  
      // Si ambos tienen (o no tienen) calificación, ordenar por nombre
      return sortOrder === "asc"
        ? a.teamName.localeCompare(b.teamName)
        : b.teamName.localeCompare(a.teamName)
    })
  
    setGames(filteredGames)
  }  
  
  const handleSearch = () => {
    applyFiltersAndSort()
  }

  // Fix the A-Z filter to work immediately when clicked
  const toggleSortOrder = () => {
    // Toggle the sort order
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc"
    setSortOrder(newSortOrder)

    // Sort the current games array directly
    const sortedGames = [...games].sort((a, b) => {
      return newSortOrder === "asc" ? a.teamName.localeCompare(b.teamName) : b.teamName.localeCompare(a.teamName)
    })

    setGames(sortedGames)
  }

  const toggleRatingSortOrder = () => {
    const newRatingSortOrder = ratingSortOrder === "asc" ? "desc" : "asc"
    setRatingSortOrder(newRatingSortOrder)

    // Sort by rating immediately
    const sortedGames = [...games].sort((a, b) => {
      // Always put unrated teams first
      if (a.rating === null && b.rating !== null) return -1
      if (a.rating !== null && b.rating === null) return 1
      if (a.rating === null && b.rating === null) return 0

      // Then sort by rating according to ratingSortOrder
      return newRatingSortOrder === "asc" ? (a.rating || 0) - (b.rating || 0) : (b.rating || 0) - (a.rating || 0)
    })

    setGames(sortedGames)
  }

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSubject = e.target.value
    setSelectedSubject(newSubject)

    // Filter by subject immediately
    let filteredGames = [...mockGames]

    // Filter by search term if present
    if (searchTerm) {
      filteredGames = filteredGames.filter(
        (game) =>
          game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.teamName.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by the newly selected subject if not "all"
    if (newSubject !== "all") {
      filteredGames = filteredGames.filter((game) => game.subject === newSubject)
    }

    // Apply current sort order
    filteredGames.sort((a, b) => {
      return sortOrder === "asc" ? a.teamName.localeCompare(b.teamName) : b.teamName.localeCompare(a.teamName)
    })

    setGames(filteredGames)
  }

  const handleRowClick = (gameId: string) => {
    navigate(`game/${gameId}`); // Ruta relativa: /jurados/game/3
  }

  const renderStars = (rating: number | null) => {
    if (rating === null) return <span className="jurados-no-rating">-</span>

    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "jurados-star filled" : "jurados-star"}>
          ★
        </span>,
      )
    }
    return <div className="jurados-stars-container">{stars}</div>
  }

  return (
    <div className="jurados-games-list-container">
      <h2 className="jurados-games-list-title">¡Mira los juegos que han publicado hasta ahora!</h2>

      <div className="jurados-search-container">
        <div className="jurados-search-input-wrapper">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="jurados-search-input"
          />
          <button className="jurados-search-button" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        <div className="jurados-filters-container">
          <div className="jurados-filter-label-container">
            <span className="jurados-filter-label">Filtrar por</span>
          </div>
          <div className="jurados-filter-buttons">
            <div className="jurados-filter-dropdown">
              <button className="jurados-filter-button" onClick={toggleSortOrder}>
                {sortOrder === "asc" ? "a - z" : "z - a"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="jurados-dropdown-arrow"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            <div className="jurados-filter-dropdown">
              <button className="jurados-filter-button materia-button">
                Materia
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="jurados-dropdown-arrow"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <select className="jurados-subject-select" value={selectedSubject} onChange={handleSubjectChange}>
                <option value="all">Todas las materias</option>
                {subjects
                  .filter((s) => s !== "all")
                  .map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="jurados-table-container">
        <table className="jurados-games-table">
          <thead>
            <tr>
              <th className="jurados-logos-column">Logos</th>
              <th className="jurados-team-column">Nombre del equipo</th>
              <th className="jurados-game-column">Nombre del juego</th>
              <th className="jurados-subject-column">Materia</th>
              <th className="jurados-rating-column" onClick={toggleRatingSortOrder}>
                Calificación
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="jurados-rating-sort-arrow"
                  style={{ transform: ratingSortOrder === "asc" ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id} onClick={() => handleRowClick(game.id)}>
                <td className="jurados-logo-cell">
                  <img src={game.logo || "/placeholder.svg"} alt={`${game.name} logo`} className="jurados-game-logo" />
                </td>
                <td>{game.teamName}</td>
                <td>{game.name}</td>
                <td>{game.subject}</td>
                <td className="jurados-rating-cell">{renderStars(game.rating)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GamesList
