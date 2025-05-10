"use client"

import { useState } from "react"
import "./styles/Steps.css"
import StepOne from "./components-steps/StepOne"
import StepTwo from "./components-steps/StepTwo"
import StepThree from "./components-steps/StepThree"
import StepFour from "./components-steps/StepFour"
import Header from "./components-steps/header"

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

const Steps = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [formData, setFormData] = useState({
    teamName: "",
    teamLogo: null as File | null,
    members: [
      {
        fullName: "",
        email: "",
        github: "",
        subjects: [{ subject: "", nrc: "" }],
      },
    ],
    gameName: "",
    gameDescription: "",
    recaptchaVerified: false,
  })

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const addMember = () => {
    setFormData((prev) => ({
      ...prev,
      members: [
        ...prev.members,
        {
          fullName: "",
          email: "",
          github: "",
          subjects: [{ subject: "", nrc: "" }],
        },
      ],
    }))
  }

  const removeMember = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index),
    }))
  }

  const updateMember = (index: number, data: Partial<Member>) => {
    setFormData((prev) => {
      const newMembers = [...prev.members]
      newMembers[index] = { ...newMembers[index], ...data }
      return { ...prev, members: newMembers }
    })
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne formData={formData} updateFormData={updateFormData} nextStep={nextStep} />
      case 2:
        return (
          <StepTwo
            formData={formData}
            updateMember={updateMember}
            addMember={addMember}
            removeMember={removeMember}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      case 3:
        return <StepThree formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
      case 4:
        return <StepFour formData={formData} />
      default:
        return null
    }
  }

  return (
    <div className="app">
      <Header currentStep={currentStep} />
      <div className="form-container">{renderStep()}</div>
    </div>
  )
}

export default Steps
