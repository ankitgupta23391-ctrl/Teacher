import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './webteacher/Pages/HomePage'
import AdminDashboard from './Admin/Pages/AdminDashboard'
import AddTeacher from './Admin/Pages/AddTeacher'
import AllTeachers from './Admin/Pages/AllTeachers'
import { ToastContainer } from "react-toastify";
import EditTeacher from './Admin/Pages/EditTeacher'
import TeacherDetails from './Admin/Pages/TeacherDetails'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/allteachers" element={<AllTeachers />} />
         <Route path="/editteacher/:id" element={<EditTeacher />} />
         <Route path="/viewteacher/:id" element={<TeacherDetails />} />
      </Routes>

      <ToastContainer />
    </>
  )
}

export default App
