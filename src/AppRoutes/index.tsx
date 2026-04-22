import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import HolidayTours from "../components/HolidayTours"

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAuthenticated = !!localStorage.getItem("token")
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />
}

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
        path="/holiday-tours"
        element={
          <PrivateRoute>
            <HolidayTours />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default AppRoutes
