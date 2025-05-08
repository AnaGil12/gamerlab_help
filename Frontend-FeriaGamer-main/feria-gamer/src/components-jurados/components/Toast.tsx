"use client"

import React, { useEffect, useState } from "react"
import "../styles/Toast.css"

interface ToastProps {
  message: string
  type: "success" | "error" | "info"
  onClose: () => void
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false) // Oculta el Toast después de 3 segundos
    }, 3000)

    return () => clearTimeout(timer) // Limpiar el temporizador cuando el componente se desmonta
  }, [])

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        onClose() // Llama a onClose después de que la animación termine
      }, 500) // Duración de la animación de salida
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  return (
    <div className="jurados-toast-container">
      <div
        className={`jurados-toast ${type} ${isVisible ? "jurados-fade-in" : "jurados-fade-out"}`}
      >
        <span>{message}</span>
        <button onClick={() => { setIsVisible(false); onClose() }}>×</button>
      </div>
    </div>
  )
}

export default Toast
