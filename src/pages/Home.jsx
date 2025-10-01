import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/banner/Banner'

function Home() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="about">about</Link>
      <Link to="page">page</Link>
      <Banner/>
    </div>
  )
}

export default Home