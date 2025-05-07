"use client"

import type React from "react"
import { useEffect } from "react"
import "./Notification.css"

interface NotificationProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

const Notification: React.FC<NotificationProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="notification-overlay">
      <div className="notification">
        <div className="notification-icon">
          <div className="success-icon">✓</div>
        </div>
        <div className="notification-message">{message}</div>
        <button className="notification-button" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>
  )
}

export default Notification
