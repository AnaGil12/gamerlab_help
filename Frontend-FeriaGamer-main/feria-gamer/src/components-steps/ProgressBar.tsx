import React from "react"
import "../styles/progress-bar.css"

interface ProgressBarProps {
  currentStep: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, label: "Equipo" },
    { number: 2, label: "Integrantes" },
    { number: 3, label: "Videojuego" },
    { number: 4, label: "¡Terminaste!" },
  ]

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className={`step ${currentStep >= step.number ? "active" : ""}`}>
            <div className="step-number">{step.number}</div>
            <div className="step-label">{step.label}</div>
          </div>
          {index < steps.length - 1 && <div className={`step-line ${currentStep > step.number ? "active" : ""}`}></div>}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ProgressBar
