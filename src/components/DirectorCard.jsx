import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
export default function DirectorCard({ directorId }) {
  const { directors } = useOutletContext()
  const director = directors.find(d => d.id === directorId) || { name: 'Director', movies: [] }
  return (
    <div>
      <h2>{director.name}</h2>
      <Link to={`/directors/${directorId}/movies`}>Movies</Link>
    </div>
  )
}
