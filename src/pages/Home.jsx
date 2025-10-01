import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="about">about</Link>
      <Link to="page">page</Link>
      
    </div>
  )
}

export default Home