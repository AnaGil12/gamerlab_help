"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Plus, Trash2, X } from "lucide-react"
import "./SubjectsManagement.css"

// Define types for our data
interface NRC {
  code: string
  professor: string
}

interface Subject {
  id: string
  name: string
  code: string
  nrcs: NRC[]
}

const SubjectsManagement: React.FC = () => {
  const [currentView, setCurrentView] = useState<
    "welcome" | "addSubject" | "subjectsList" | "addNRC" | "selectSubject"
  >("welcome")
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [previousView, setPreviousView] = useState<string>("welcome")
  const [shouldScrollToSubject, setShouldScrollToSubject] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [confirmAction, setConfirmAction] = useState<() => void>(() => {})
  const [confirmMessage, setConfirmMessage] = useState("")

  // Generate a unique ID
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  // Navigate to a new view and store the current view as previous
  const navigateTo = (view: string) => {
    setPreviousView(currentView)
    setCurrentView(view as any)
  }

  // Go back to the previous view
  const goBack = () => {
    setCurrentView(previousView as any)
  }

  // Handle form submission for adding a new subject
  const handleAddSubject = (name: string, code: string) => {
    // Validate fields
    const newErrors: { [key: string]: string } = {}

    if (!name.trim()) {
      newErrors.name = "Por favor, ingrese el nombre de la materia"
    }

    if (!code.trim()) {
      newErrors.code = "Por favor, ingrese el código único"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const newId = generateId()
    const newSubject: Subject = {
      id: newId,
      name,
      code,
      nrcs: [],
    }

    setSubjects([...subjects, newSubject])
    setSelectedSubjectId(newId) // Select the new subject
    setShouldScrollToSubject(true) // Activate auto-scroll
    navigateTo("subjectsList")
    setErrors({})
  }

  // Handle adding a new NRC
  const handleAddNRC = (code: string, professor: string) => {
    // Validate fields
    const newErrors: { [key: string]: string } = {}

    // Validate that the NRC code is numeric and has exactly 4 digits
    if (!code.trim()) {
      newErrors.nrcCode = "Por favor, ingrese el código NRC"
    } else if (!/^\d{4}$/.test(code)) {
      newErrors.nrcCode = "El código NRC debe ser un número de exactamente 4 dígitos"
    }

    if (!professor.trim()) {
      newErrors.professor = "Por favor, ingrese el nombre del profesor"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    if (selectedSubjectId) {
      const updatedSubjects = subjects.map((subject) => {
        if (subject.id === selectedSubjectId) {
          return {
            ...subject,
            nrcs: [...subject.nrcs, { code, professor }],
          }
        }
        return subject
      })

      setSubjects(updatedSubjects)
      setShouldScrollToSubject(true) // Activate auto-scroll
      navigateTo("subjectsList")
      setErrors({})
    }
  }

  // Get the selected subject
  const getSelectedSubject = () => {
    return subjects.find((subject) => subject.id === selectedSubjectId) || null
  }

  // Handle selecting a subject from the grid view
  const handleSelectSubject = (subjectId: string) => {
    setSelectedSubjectId(subjectId)
    setShouldScrollToSubject(true)
    navigateTo("subjectsList")
  }

  // Handle deleting an NRC from a subject
  const handleDeleteNRC = (subjectId: string, nrcIndex: number) => {
    setConfirmMessage("¿Estás seguro que deseas eliminar este NRC?")
    setConfirmAction(() => () => {
      const updatedSubjects = subjects.map((subject) => {
        if (subject.id === subjectId) {
          const updatedNRCs = [...subject.nrcs]
          updatedNRCs.splice(nrcIndex, 1)
          return {
            ...subject,
            nrcs: updatedNRCs,
          }
        }
        return subject
      })
      setSubjects(updatedSubjects)
      setShowConfirmDialog(false)
    })
    setShowConfirmDialog(true)
  }

  // Handle deleting a subject
  const handleDeleteSubject = (subjectId: string) => {
    setConfirmMessage("¿Estás seguro que deseas eliminar esta materia y todos sus NRCs?")
    setConfirmAction(() => () => {
      const updatedSubjects = subjects.filter((subject) => subject.id !== subjectId)
      setSubjects(updatedSubjects)
      setShowConfirmDialog(false)
    })
    setShowConfirmDialog(true)
  }

  // Load initial data
  useEffect(() => {
    // Mock data for demonstration
    const mockSubjects: Subject[] = [
      {
        id: "1",
        name: "Programación Web",
        code: "IST8391",
        nrcs: [
          { code: "1521", professor: "Margarita" },
          { code: "1522", professor: "Carlos Pérez" },
        ],
      },
      {
        id: "2",
        name: "Estructuras de Datos",
        code: "ISN7828",
        nrcs: [{ code: "4021", professor: "Carolina" }],
      },
      {
        id: "3",
        name: "Algoritmos",
        code: "IST2040",
        nrcs: [{ code: "2140", professor: "Rocío" }],
      },
    ]

    setSubjects(mockSubjects)
  }, [])

  return (
    <div className="subjects-management-container">
      {currentView === "welcome" && (
        <WelcomeView
          onAddSubject={() => navigateTo("addSubject")}
          onViewSubjects={() => navigateTo("selectSubject")}
          subjects={subjects}
        />
      )}

      {currentView === "addSubject" && (
        <AddSubjectView onConfirm={handleAddSubject} errors={errors} onCancel={goBack} />
      )}

      {currentView === "subjectsList" && (
        <SubjectsListView
          subjects={subjects}
          selectedSubjectId={selectedSubjectId}
          shouldScrollToSubject={shouldScrollToSubject}
          onScrollComplete={() => setShouldScrollToSubject(false)}
          onAddSubject={() => navigateTo("addSubject")}
          onAddNRC={(subjectId) => {
            setSelectedSubjectId(subjectId)
            navigateTo("addNRC")
          }}
          onDeleteNRC={handleDeleteNRC}
          onDeleteSubject={handleDeleteSubject}
          onBack={() => navigateTo("welcome")}
        />
      )}

      {currentView === "addNRC" && selectedSubjectId && (
        <AddNRCView subject={getSelectedSubject()} onConfirm={handleAddNRC} errors={errors} onCancel={goBack} />
      )}

      {currentView === "selectSubject" && (
        <SelectSubjectView
          subjects={subjects}
          onSelectSubject={handleSelectSubject}
          onAddSubject={() => navigateTo("addSubject")}
          onDeleteSubject={handleDeleteSubject}
          onBack={goBack}
        />
      )}

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <ConfirmDialog
          message={confirmMessage}
          onConfirm={confirmAction}
          onCancel={() => setShowConfirmDialog(false)}
        />
      )}
    </div>
  )
}

interface WelcomeViewProps {
  onAddSubject: () => void
  onViewSubjects: () => void
  subjects: Subject[]
}

const WelcomeView: React.FC<WelcomeViewProps> = ({ onAddSubject, onViewSubjects, subjects }) => {
  return (
    <div className="welcome-view">
      <h1 className="welcome-title">¡Bienvenido al apartado de Materias y NRC!</h1>
      <p className="welcome-text">
        Aquí puedes agregar y editar las Materias y NRC
        <br />
        que hayas creado
      </p>
      <div className="button-container">
        <button onClick={onAddSubject} className="button">
          Agregar Materia
        </button>
        <button onClick={onViewSubjects} className="button">
          Ver Materias
        </button>
      </div>

      {subjects.length > 0 && (
        <div className="welcome-subjects-count">
          <p>
            Tienes {subjects.length} materia{subjects.length !== 1 ? "s" : ""} registrada
            {subjects.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}
    </div>
  )
}

interface AddSubjectViewProps {
  onConfirm: (name: string, code: string) => void
  errors: { [key: string]: string }
  onCancel: () => void
}

const AddSubjectView: React.FC<AddSubjectViewProps> = ({ onConfirm, errors, onCancel }) => {
  const [nombre, setNombre] = useState("")
  const [codigo, setCodigo] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onConfirm(nombre, codigo)
  }

  return (
    <div className="form-view">
      <div className="form-card">
        <h1 className="form-title">Agrega una Nueva Materia</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Nombre de la Materia</label>
            <input
              type="text"
              className={`form-input ${errors.name ? "form-input-error" : ""}`}
              placeholder="Escribe el nombre de la materia aquí"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">Codigo Unico</label>
            <input
              type="text"
              className={`form-input ${errors.code ? "form-input-error" : ""}`}
              placeholder="Escribe el código único aquí (ej. IIN1234)"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
            {errors.code && <div className="error-message">{errors.code}</div>}
          </div>

          <div className="form-buttons-container">
            <button type="button" className="button button-secondary" onClick={onCancel}>
              Cancelar
            </button>
            <button type="submit" className="button">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

interface SubjectsListViewProps {
  subjects: Subject[]
  selectedSubjectId: string | null
  shouldScrollToSubject: boolean
  onScrollComplete: () => void
  onAddSubject: () => void
  onAddNRC: (subjectId: string) => void
  onDeleteNRC: (subjectId: string, nrcIndex: number) => void
  onDeleteSubject: (subjectId: string) => void
  onBack: () => void
}

const SubjectsListView: React.FC<SubjectsListViewProps> = ({
  subjects,
  selectedSubjectId,
  shouldScrollToSubject,
  onScrollComplete,
  onAddSubject,
  onAddNRC,
  onDeleteNRC,
  onDeleteSubject,
  onBack,
}) => {
  // Create refs for each subject
  const subjectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Effect to scroll to the selected subject
  useEffect(() => {
    if (shouldScrollToSubject && selectedSubjectId && subjectRefs.current[selectedSubjectId]) {
      // Scroll to the selected subject with a small delay to ensure the DOM is ready
      setTimeout(() => {
        subjectRefs.current[selectedSubjectId]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
        onScrollComplete()
      }, 100)
    }
  }, [shouldScrollToSubject, selectedSubjectId, onScrollComplete])

  return (
    <div className="subjects-list-view">
      <h1 className="subjects-list-title">Materias y NRC</h1>

      {subjects.length === 0 ? (
        <div className="no-subjects">
          <p>No hay materias registradas. Agrega una nueva materia para comenzar.</p>
        </div>
      ) : (
        <div className="subjects-list">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className={`subject-card ${selectedSubjectId === subject.id ? "subject-card-selected" : ""}`}
              ref={(el) => {
                subjectRefs.current[subject.id] = el;
              }}
              id={`subject-${subject.id}`}
            >
              <div className="subject-info">
                <div className="subject-row">
                  <div className="subject-label">Nombre de la Materia</div>
                  <div className="subject-value">{subject.name}</div>
                </div>

                <div className="subject-row">
                  <div className="subject-label">Codigo Unico</div>
                  <div className="subject-value">{subject.code}</div>
                </div>
              </div>

              {subject.nrcs.length > 0 && <div className="divider"></div>}

              <div className="nrc-list">
                {subject.nrcs.map((nrc, index) => (
                  <div key={index}>
                    <div className="nrc-row">
                      <div className="nrc-label">Profesor Responsable</div>
                      <div className="nrc-value">{nrc.professor}</div>
                      <div className="nrc-label" style={{ width: "auto", marginLeft: "20px" }}>
                        NRC
                      </div>
                      <div className="nrc-number">{nrc.code}</div>
                      <button
                        className="delete-nrc-button"
                        onClick={(e) => {
                          e.stopPropagation()
                          onDeleteNRC(subject.id, index)
                        }}
                        title="Eliminar NRC"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    {index < subject.nrcs.length - 1 && <div className="divider"></div>}
                  </div>
                ))}
              </div>

              {/* Additional space to separate NRCs from buttons */}
              <div className="subject-actions-spacer"></div>

              <div className="subject-actions">
                <button className="add-button" onClick={() => onAddNRC(subject.id)}>
                  <Plus size={24} />
                </button>
                <button
                  className="delete-subject-button"
                  onClick={() => onDeleteSubject(subject.id)}
                  title="Eliminar Materia"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="bottom-buttons-container">
        <button className="button button-secondary" onClick={onBack}>
          Volver
        </button>
        <button className="button" onClick={onAddSubject}>
          Agregar Materia
        </button>
      </div>
    </div>
  )
}

interface AddNRCViewProps {
  subject: Subject | null
  onConfirm: (code: string, professor: string) => void
  errors: { [key: string]: string }
  onCancel: () => void
}

const AddNRCView: React.FC<AddNRCViewProps> = ({ subject, onConfirm, errors, onCancel }) => {
  const [codigo, setCodigo] = useState("")
  const [profesor, setProfesor] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onConfirm(codigo, profesor)
  }

  // Validate that only numbers are entered in the NRC field
  const handleNRCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Only allow digits
    if (value === "" || /^\d+$/.test(value)) {
      setCodigo(value)
    }
  }

  return (
    <div className="form-view">
      <div className="form-card">
        <h1 className="form-title">Agrega un Nuevo NRC</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Codigo NRC</label>
            <input
              type="text"
              className={`form-input ${errors.nrcCode ? "form-input-error" : ""}`}
              placeholder="Escribe el código NRC aquí (4 dígitos)"
              value={codigo}
              onChange={handleNRCChange}
              maxLength={4}
            />
            {errors.nrcCode && <div className="error-message">{errors.nrcCode}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">Relacion con la Materia</label>
            <select className="form-select" defaultValue={subject?.code || ""}>
              <option value={subject?.code || ""}>{subject?.code || ""}</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Profesor Responsable</label>
            <input
              type="text"
              className={`form-input ${errors.professor ? "form-input-error" : ""}`}
              placeholder="Escribe el nombre del profesor responsable"
              value={profesor}
              onChange={(e) => setProfesor(e.target.value)}
            />
            {errors.professor && <div className="error-message">{errors.professor}</div>}
          </div>

          <div className="form-buttons-container">
            <button type="button" className="button button-secondary" onClick={onCancel}>
              Cancelar
            </button>
            <button type="submit" className="button">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

interface SelectSubjectViewProps {
  subjects: Subject[]
  onSelectSubject: (subjectId: string) => void
  onAddSubject: () => void
  onDeleteSubject: (subjectId: string) => void
  onBack: () => void
}

const SelectSubjectView: React.FC<SelectSubjectViewProps> = ({
  subjects,
  onSelectSubject,
  onAddSubject,
  onDeleteSubject,
  onBack,
}) => {
  return (
    <div className="select-subject-view">
      <h1 className="select-subject-title">Seleccionar Materia</h1>

      {subjects.length === 0 ? (
        <div className="no-subjects">
          <p>No hay materias registradas. Agrega una nueva materia para comenzar.</p>
        </div>
      ) : (
        <div className="subjects-grid">
          {subjects.map((subject) => (
            <div key={subject.id} className="subject-select-card">
              <div className="subject-select-content" onClick={() => onSelectSubject(subject.id)}>
                <h3 className="subject-select-name">{subject.name}</h3>
                <p className="subject-select-code">{subject.code}</p>
                <p className="subject-select-nrcs">
                  {subject.nrcs.length} NRC{subject.nrcs.length !== 1 ? "s" : ""} registrado
                  {subject.nrcs.length !== 1 ? "s" : ""}
                </p>
              </div>
              <button
                className="delete-subject-button-small"
                onClick={(e) => {
                  e.stopPropagation()
                  onDeleteSubject(subject.id)
                }}
                title="Eliminar Materia"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="bottom-buttons-container">
        <button className="button button-secondary" onClick={onBack}>
          Volver
        </button>
        <button className="button" onClick={onAddSubject}>
          Agregar Materia
        </button>
      </div>
    </div>
  )
}

interface ConfirmDialogProps {
  message: string
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirm-dialog-overlay">
      <div className="confirm-dialog">
        <p className="confirm-message">{message}</p>
        <div className="confirm-buttons">
          <button className="button button-secondary" onClick={onCancel}>
            Cancelar
          </button>
          <button className="button button-danger" onClick={onConfirm}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubjectsManagement
