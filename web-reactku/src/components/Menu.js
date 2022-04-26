import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../logonavbar.png"

const Menu = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <span><h1>DADAH DOC</h1></span>
      <Link to="/">Home</Link>
      <Link to="/works">Works </Link>
      <Link to="/about"> About </Link>
      <Link to="/login"> Login </Link>
      <Link to="/AdminMain"> Admin Main </Link>
      <Link to="/DoctorMain"> Doctor Main</Link>
        <img src={Logo} />
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