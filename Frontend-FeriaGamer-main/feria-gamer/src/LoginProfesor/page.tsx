"use client"

import { useState } from "react"
import LoginPage from "./login-page"
import TeacherDashboard from "./teacher-dashboard"
import CourseDetail from "./course-detail"
import "./globals.css"

export default function App() {
  const [currentPage, setCurrentPage] = useState("login")
  const [selectedCourse, setSelectedCourse] = useState("")

  const handleLogin = () => {
    setCurrentPage("dashboard")
  }

  const handleCourseSelect = (course: string) => {
    setSelectedCourse(course)
    setCurrentPage("courseDetail")
  }

  const handleBackToDashboard = () => {
    setCurrentPage("dashboard")
  }

  const handleLogout = () => {
    setCurrentPage("login")
  }

  return (
    <div className="app-container">
      {currentPage === "login" && <LoginPage onLogin={handleLogin} />}
      {currentPage === "dashboard" && <TeacherDashboard onCourseSelect={handleCourseSelect} onLogout={handleLogout} />}
      {currentPage === "courseDetail" && (
        <CourseDetail courseName={selectedCourse} onBack={handleBackToDashboard} onLogout={handleLogout} />
      )}
    </div>
  )
}
