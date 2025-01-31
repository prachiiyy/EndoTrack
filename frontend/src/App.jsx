import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import Dashboard from "./components/Dashboard.jsx"
import Forum from "./components/Forum.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  )
}

export default App
