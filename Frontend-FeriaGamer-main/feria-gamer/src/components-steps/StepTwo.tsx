"use client"

import type React from "react"
import ProgressBar from "./ProgressBar"
import { Trash2, Plus } from "lucide-react"
import "../styles/step-two.css"

interface Subject {
  subject: string
  nrc: string
}

interface Member {
  fullName: string
  email: string
  github: string
  subjects: Subject[]
}

interface StepTwoProps {
  formData: {
    members: Member[]
  }
  updateMember: (index: number, data: Partial<Member>) => void
  addMember: () => void
  nextStep: () => void
  prevStep: () => void
  removeMember: (index: number) => void
}

const StepTwo: React.FC<StepTwoProps> = ({ formData, updateMember, addMember, nextStep, prevStep, removeMember }) => {
  // Aseguramos que formData.members sea un array
  const members = Array.isArray(formData.members) ? formData.members : []

  // Inicializar miembros si no hay ninguno
  if (members.length === 0) {
    addMember()
  }

  // Aseguramos que cada miembro tenga un array de subjects
  members.forEach((member, index) => {
    if (!Array.isArray(member.subjects) || member.subjects.length === 0) {
      const updatedMember = { ...member, subjects: [{ subject: "", nrc: "" }] }
      updateMember(index, updatedMember)
    }
  })

  const handleMemberChange = (memberIndex: number, field: string, value: string) => {
    const updatedMember = { ...members[memberIndex], [field]: value }
    updateMember(memberIndex, updatedMember)
  }

  const handleSubjectChange = (memberIndex: number, subjectIndex: number, field: string, value: string) => {
    const updatedMember = { ...members[memberIndex] }
    updatedMember.subjects[subjectIndex] = {
      ...updatedMember.subjects[subjectIndex],
      [field]: value,
    }
    updateMember(memberIndex, updatedMember)
  }

  const addSubject = (memberIndex: number) => {
    const updatedMember = { ...members[memberIndex] }
    updatedMember.subjects = [...updatedMember.subjects, { subject: "", nrc: "" }]
    updateMember(memberIndex, updatedMember)
  }

  const removeSubject = (memberIndex: number, subjectIndex: number) => {
    const updatedMember = { ...members[memberIndex] }
    updatedMember.subjects = updatedMember.subjects.filter((_, index) => index !== subjectIndex)
    updateMember(memberIndex, updatedMember)
  }

  return (
    <div className="step-container">
      <h2 className="step-title">Añade los integrantes de tu equipo</h2>
      <ProgressBar currentStep={2} />

      {members.map((member, memberIndex) => (
        <div key={memberIndex} className="member-form">
          <div className="form-group">
            <label htmlFor={`fullName-${memberIndex}`}>Nombre Completo</label>
            <input
              type="text"
              id={`fullName-${memberIndex}`}
              value={member.fullName || ""}
              onChange={(e) => handleMemberChange(memberIndex, "fullName", e.target.value)}
              placeholder="Vanessa Díaz De La Hoz"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor={`email-${memberIndex}`}>Correo Institucional</label>
            <input
              type="email"
              id={`email-${memberIndex}`}
              value={member.email || ""}
              onChange={(e) => handleMemberChange(memberIndex, "email", e.target.value)}
              placeholder="vanessadelahoz@uninorte.edu.co"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor={`github-${memberIndex}`}>@github</label>
            <input
              type="text"
              id={`github-${memberIndex}`}
              value={member.github || ""}
              onChange={(e) => handleMemberChange(memberIndex, "github", e.target.value)}
              placeholder="@user"
              className="form-input"
            />
          </div>

          {member.subjects.map((subject, subjectIndex) => (
            <div key={subjectIndex} className="subject-row">
              <div className="subject-field">
                <label htmlFor={`subject-${memberIndex}-${subjectIndex}`}>Materia</label>
                <select
                  id={`subject-${memberIndex}-${subjectIndex}`}
                  value={subject.subject}
                  onChange={(e) => handleSubjectChange(memberIndex, subjectIndex, "subject", e.target.value)}
                  className="form-select"
                >
                  <option value="">Seleccionar</option>
                  <option value="Programación">Programación</option>
                  <option value="Diseño">Diseño</option>
                  <option value="Animación">Animación</option>
                </select>
              </div>

              <div className="subject-field">
                <label htmlFor={`nrc-${memberIndex}-${subjectIndex}`}>NRC</label>
                <select
                  id={`nrc-${memberIndex}-${subjectIndex}`}
                  value={subject.nrc}
                  onChange={(e) => handleSubjectChange(memberIndex, subjectIndex, "nrc", e.target.value)}
                  className="form-select"
                >
                  <option value="">Seleccionar</option>
                  <option value="1234">1234</option>
                  <option value="5678">5678</option>
                  <option value="9012">9012</option>
                </select>
              </div>

              {subjectIndex === member.subjects.length - 1 && (
                <div className="action-buttons">
                  {member.subjects.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeSubject(memberIndex, subjectIndex)}
                        aria-label="Eliminar materia"
                      >
                        <Trash2 size={18} />
                      </button>
                      <div className="purple-line"></div>
                    </>
                  )}
                  <button
                    type="button"
                    className="add-button"
                    onClick={() => addSubject(memberIndex)}
                    aria-label="Añadir materia"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              )}
            </div>
          ))}

          {memberIndex > 0 && (
            <button
              type="button"
              className="remove-member"
              onClick={() => removeMember(memberIndex)}
              aria-label="Eliminar integrante"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      ))}

      <button type="button" className="add-member" onClick={addMember} aria-label="Añadir integrante">
        <Plus size={24} />
      </button>

      <div className="navigation">
        <button type="button" className="back-button" onClick={prevStep}>
          <span>&lt;</span> Atrás
        </button>
        <button type="button" className="next-button" onClick={nextStep}>
          Siguiente <span>&gt;</span>
        </button>
      </div>
    </div>
  )
}

export default StepTwo
