"use client"

import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Toast from "./components/Toast"
import GamesList from "./components/GamesList"
import GameDetails from "./components/GameDetails"
import RatingForm from "./components/RatingForm"
import ViewRating from "./components/ViewRating"
import "./styles/App.css"

const JuradosDashboard: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [toastType, setToastType] = useState<"success" | "error" | null>(null)

  const showToast = (message: string, type: "success" | "error") => {
    setToastMessage(message)
    setToastType(type)
  }

  return (
    <div className="jurados-app">
      <Header showToast={showToast} />
      <Navigation />
      {toastMessage && (
        <Toast message={toastMessage} type={toastType!} onClose={() => setToastMessage(null)} />
      )}
      <main className="jurados-main-content">
        <Routes>
          <Route index element={<GamesList />} />
          <Route path="analytics" element={<div>Análisis y Estadísticas</div>} />
          <Route path="game/:id">
            <Route index element={<GameDetails />} />
            <Route path="rate/:id" element={<RatingForm showToast={showToast} />} />
            <Route path="view-rating/:id" element={<ViewRating />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default JuradosDashboard