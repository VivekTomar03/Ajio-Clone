import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Components/Admin'

export default function Main() {
  return (
    <Routes>
        <Route path='/admin' element={<Admin/>}/>
    </Routes>
  )
}
