"use client"

import type React from "react"
import { useState, useRef } from "react"
import ProgressBar from "./ProgressBar"
import "../styles/step-one.css"

interface StepOneProps {
  formData: {
    teamName: string
    teamLogo: File | null
  }
  updateFormData: (data: Partial<{ teamName: string; teamLogo: File | null }>) => void
  nextStep: () => void
}

const StepOne: React.FC<StepOneProps> = ({ formData, updateFormData, nextStep }) => {
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      updateFormData({ teamLogo: e.dataTransfer.files[0] })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateFormData({ teamLogo: e.target.files[0] })
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="step-container">
      <h2 className="step-title">Dinos el nombre de tu equipo</h2>
      <ProgressBar currentStep={1} />

      <div className="form-group">
        <label htmlFor="teamName">Nombre del equipo</label>
        <input
          type="text"
          id="teamName"
          value={formData.teamName}
          onChange={(e) => updateFormData({ teamName: e.target.value })}
          placeholder="Los mejores gamers"
        />
      </div>

      <div
        className={`file-upload-area ${dragActive ? "drag-active" : ""}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.png"
          style={{ display: "none" }}
        />
        <button className="upload-button" onClick={handleButtonClick}>
          Cargar logo del equipo
        </button>
        <p className="upload-text">o arrastra aquí un archivo (JPG o PNG)</p>
        {formData.teamLogo && <p className="file-name">Archivo seleccionado: {formData.teamLogo.name}</p>}
      </div>

      <div className="navigation">
        <div></div> {/* Empty div for spacing */}
        <button className="next-button" onClick={nextStep}>
          Siguiente <span>&gt;</span>
        </button>
      </div>
    </div>
  )
}

export default StepOne
