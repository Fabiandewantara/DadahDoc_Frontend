import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/works">Works</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/AdminMain">Buat cek aja Admin nya Sebelum ada fungsi login</Link></li>
    </ul>
  )
}

export default Menu