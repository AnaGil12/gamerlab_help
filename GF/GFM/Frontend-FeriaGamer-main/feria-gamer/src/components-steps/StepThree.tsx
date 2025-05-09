"use client"

import type React from "react"
import { useState } from "react"
import ProgressBar from "./ProgressBar"
import "../styles/step-three.css"

interface StepThreeProps {
  formData: {
    gameName: string
    gameDescription: string
    recaptchaVerified: boolean
  }
  updateFormData: (
    data: Partial<{
      gameName: string
      gameDescription: string
      recaptchaVerified: boolean
    }>,
  ) => void
  nextStep: () => void
  prevStep: () => void
}

const StepThree: React.FC<StepThreeProps> = ({ formData, updateFormData, nextStep, prevStep }) => {
  const [charCount, setCharCount] = useState(formData.gameDescription.length)
  const maxChars = 300

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    if (text.length <= maxChars) {
      updateFormData({ gameDescription: text })
      setCharCount(text.length)
    }
  }

  const handleRecaptchaChange = () => {
    updateFormData({ recaptchaVerified: true })
  }

  return (
    <div className="step-container">
      <h2 className="step-title">Cuentanos sobre tu videojuego</h2>
      <ProgressBar currentStep={3} />

      <div className="form-group">
        <label htmlFor="gameName">Nombre del videojuego</label>
        <input
          type="text"
          id="gameName"
          value={formData.gameName}
          onChange={(e) => updateFormData({ gameName: e.target.value })}
          placeholder="Shadow Pulse"
        />
      </div>

      <div className="form-group">
        <label htmlFor="gameDescription">Descripcion Breve</label>
        <textarea
          id="gameDescription"
          value={formData.gameDescription}
          onChange={handleDescriptionChange}
          placeholder="Sumergete en una apasionante aventura..."
          rows={5}
        />
        <div className="char-counter">
          {charCount}/{maxChars}
        </div>
      </div>

      <div className="recaptcha-container">
        <div className="recaptcha-box">
          <input
            type="checkbox"
            id="recaptcha"
            checked={formData.recaptchaVerified}
            onChange={() => handleRecaptchaChange()}
          />
          <label htmlFor="recaptcha">I'm not a robot</label>
          <div className="recaptcha-logo">
            <div className="recaptcha-badge">reCAPTCHA</div>
            <div className="recaptcha-text">Privacy - Terms</div>
          </div>
        </div>
      </div>

      <div className="navigation">
        <button className="back-button" onClick={prevStep}>
          <span>&lt;</span> Atrás
        </button>
        <button className="next-button" onClick={nextStep} disabled={!formData.recaptchaVerified}>
          Siguiente <span>&gt;</span>
        </button>
      </div>
    </div>
  )
}

export default StepThree
