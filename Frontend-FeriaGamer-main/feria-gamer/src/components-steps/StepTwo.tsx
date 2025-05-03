"use client"

import type React from "react"
import ProgressBar from "./ProgressBar"
import "../styles/step-two.css"

interface Member {
  fullName: string
  email: string
  github: string
  subject: string
  nrc: string
}

interface StepTwoProps {
  formData: {
    members: Member[]
  }
  updateMember: (index: number, data: Partial<Member>) => void
  addMember: () => void
  nextStep: () => void
  prevStep: () => void
}

const StepTwo: React.FC<StepTwoProps> = ({ formData, updateMember, addMember, nextStep, prevStep }) => {
  return (
    <div className="step-container">
      <h2 className="step-title">Añade los integrantes de tu equipo</h2>
      <ProgressBar currentStep={2} />

      {formData.members.map((member, index) => (
        <div key={index} className="member-form">
          <div className="form-group">
            <label htmlFor={`fullName-${index}`}>Nombre Completo</label>
            <input
              type="text"
              id={`fullName-${index}`}
              value={member.fullName}
              onChange={(e) => updateMember(index, { fullName: e.target.value })}
              placeholder="Vanessa Díaz De La Hoz"
            />
          </div>

          <div className="form-group">
            <label htmlFor={`email-${index}`}>Correo Institucional</label>
            <input
              type="email"
              id={`email-${index}`}
              value={member.email}
              onChange={(e) => updateMember(index, { email: e.target.value })}
              placeholder="vanessadelahoz@uninorte.edu.co"
            />
          </div>

          <div className="form-group">
            <label htmlFor={`github-${index}`}>@github</label>
            <input
              type="text"
              id={`github-${index}`}
              value={member.github}
              onChange={(e) => updateMember(index, { github: e.target.value })}
              placeholder="@user"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor={`subject-${index}`}>Materia</label>
              <select
                id={`subject-${index}`}
                value={member.subject}
                onChange={(e) => updateMember(index, { subject: e.target.value })}
              >
                <option value="">Seleccionar</option>
                <option value="Programación">Programación</option>
                <option value="Diseño">Diseño</option>
                <option value="Animación">Animación</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor={`nrc-${index}`}>NRC</label>
              <select
                id={`nrc-${index}`}
                value={member.nrc}
                onChange={(e) => updateMember(index, { nrc: e.target.value })}
              >
                <option value="">Seleccionar</option>
                <option value="1234">1234</option>
                <option value="5678">5678</option>
                <option value="9012">9012</option>
              </select>
            </div>

            {index === formData.members.length - 1 && (
              <button className="add-member-button" onClick={addMember}>
                <span>+</span>
              </button>
            )}
          </div>
        </div>
      ))}

      <div className="navigation">
        <button className="back-button" onClick={prevStep}>
          <span>&lt;</span> Atrás
        </button>
        <button className="next-button" onClick={nextStep}>
          Siguiente <span>&gt;</span>
        </button>
      </div>
    </div>
  )
}

export default StepTwo
