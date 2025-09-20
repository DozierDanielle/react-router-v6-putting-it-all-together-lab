import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import DirectorContainer from "./components/DirectorContainer"
import DirectorCard from "./components/DirectorCard"
import DirectorForm from "./components/DirectorForm"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/directors" element={<DirectorContainer />}>
          <Route index element={<div>Select a director or add one</div>} />
          <Route path="new" element={<DirectorForm />} />
          <Route path=":id" element={<DirectorCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
