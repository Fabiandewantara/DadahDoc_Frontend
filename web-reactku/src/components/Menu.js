import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../logonavbar.png"
import "../styles/Menu.css"

const Menu = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="logo">
        <img src={Logo} />
      </div>
    </nav>
    // <ul>
    //   <li><Link to="/">Home</Link></li>
    //   <li><Link to="/works">Works</Link></li>
    //   <li><Link to="/about">About</Link></li>
    //   <li><Link to="/login">Login</Link></li>
    //   <li><Link to="/AdminMain">Buat cek aja Admin main nya Sebelum ada fungsi login</Link></li>
    //   <li><Link to="/DoctorMain">Buat cek aja Doctor main nya Sebelum ada fungsi login</Link></li>
    // </ul>
  )
}

export default Menu