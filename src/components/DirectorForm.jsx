import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
export default function DirectorForm() {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const { directors, setDirectors } = useOutletContext()
  const handleSubmit = e => {
    e.preventDefault()
    const newDirector = { id: directors.length + 1, name, movies: [] }
    setDirectors([...directors, newDirector])
    navigate(`/directors/${newDirector.id}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Director Name" />
      <button type="submit">Add Director</button>
    </form>
  )
}
