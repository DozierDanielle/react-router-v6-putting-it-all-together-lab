import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
export default function DirectorContainer() {
  const [directors, setDirectors] = useState([])
  return <Outlet context={{ directors, setDirectors }} />
}
