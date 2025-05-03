import type React from "react"
import ProgressBar from "./ProgressBar"
import "../styles/step-four.css"

interface StepFourProps {
  formData: {
    members: Array<{
      email: string
    }>
  }
}

const StepFour: React.FC<StepFourProps> = ({ formData }) => {
  const emails = formData.members.map((member) => member.email).filter(Boolean)

  return (
    <div className="step-container">
      <h2 className="step-title">¡Ya casi has terminado de registrar a tu equipo!</h2>
      <ProgressBar currentStep={4} />

      <div className="confirmation-section">
        <h3>Se ha enviado un correo de confirmacion a:</h3>
        <div className="email-box">
          {emails.map((email, index) => (
            <div key={index} className="email-item">
              {email}
            </div>
          ))}
        </div>

        <p className="confirmation-message">
          Revisa tu correo y haz clic en el enlace
          <br />
          que te enviamos para activar tu equipo y<br />
          completar el proceso de registro
        </p>

        <div className="resend-section">
          <span className="resend-question">¿Aún no has recibido tu correo?</span>
          <button className="resend-button">Haz clic aquí para reenviar</button>
        </div>
      </div>
    </div>
  )
}

export default StepFour
