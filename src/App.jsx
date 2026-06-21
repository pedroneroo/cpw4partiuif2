import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import About from './pages/About'
import Toast from './components/ui/Toast'
import { useApp } from './context/AppContext'

function App() {
  const { toast } = useApp()

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/cursos/:id" element={<CourseDetail />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </Layout>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </>
  )
}

export default App
