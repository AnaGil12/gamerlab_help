"use client"

import { Routes, Route } from "react-router-dom"
import LoginPage from "./login-page"
import TeacherDashboard from "./teacher-dashboard"
import CourseDetail from "./course-detail"
import "./globals.css"

export default function Page() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profesor" element={<TeacherDashboard />} />
        <Route path="/curso/:nombre" element={<CourseDetail />} />
      </Routes>
    </div>
  )
}

