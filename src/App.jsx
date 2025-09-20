import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import DirectorContainer from './components/DirectorContainer'
import DirectorCard from './components/DirectorCard'
import DirectorForm from './components/DirectorForm'
import MovieForm from './components/MovieForm'
import ErrorPage from './components/ErrorPage'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/directors" element={<DirectorContainer />}>
          <Route path="new" element={<DirectorForm />} />
          <Route path=":id" element={<DirectorCard />}>
            <Route path="movies/new" element={<MovieForm />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
