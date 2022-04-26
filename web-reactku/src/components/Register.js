import React, { useEffect, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import '../styles/worksStyle.css'
import Logo from "../logo.png"
import axios from 'axios';

<<<<<<< HEAD
export default function Register() {
    const[fullname,setFullname]=useState('')
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
    const[birthDate,setbirthDate]=useState('')
    const[students,setStudents]=useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const student={fullname,username,password,email,birthDate}
    console.log(student)
    fetch("http://localhost:8080/api/auth/signup",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
=======
const Register = () => {
  return (
    <TransitionGroup
      transitionName="worksTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="#">DADAH DOC</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="navbar-brand" href="#">Register</a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand" href="#">Login</a>
            </li>
          </ul>
          <span class="navbar-text">
          </span>
        </div>
      </nav> */}
>>>>>>> d5598dbac5fa3c8c38066e8061ca956c5dae1818

  }).then(()=>{
    console.log("Data Berhasil")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/student/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
},[])
return (
  <TransitionGroup 
  transitionName="worksTransition"
  transitionAppear={true}
  transitionAppearTimeout={500}
  transitionEnter={false}
  transitionLeave={false}>
<nav class="navbar navbar-expand-lg navbar-light bg-primary">
<a class="navbar-brand" href="#">DADAH DOC</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarText">
<ul class="navbar-nav mr-auto">
  <li class="nav-item">
  <a class="navbar-brand" href="#">Register</a>
  </li>
  <li class="nav-item">
  <a class="navbar-brand" href="#">Login</a>
  </li>
</ul>
<span class="navbar-text">
</span>
</div>
</nav>

<div class="logo">
<img src={Logo} alt="Girl in a jacket"/>
</div>
<div class="container">
<h2>Register Patient</h2>
<form class="form-horizontal" onSubmit={this.handleSubmit}>
<div class="form-group">
  <label class="control-label col-sm-2" for="fullname">Full Name</label>
  <div class="col-sm-7">
    <input type="text" class="form-control" id="fullname" placeholder="Enter Fullname" name="fullname" value={fullname}  onChange={(e)=>setFullname(e.target.value)}/>
  </div>
</div>
<div class="form-group">
  <label class="control-label col-sm-2" for="fullname">Email</label>
  <div class="col-sm-7">
    <input type="email" class="form-control" id="email" placeholder="Enter Email" name="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
  </div>
</div>
{/* <label class="control-label col-sm-2" for="gender">Gender</label>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Female
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Male
  </label>
</div> */}
  <div class="form-group"> 
  <div class="col-sm-7">
  <label class="control-label" for="date">Date</label>
    <input class="form-control" id="birthDate" name="birthDate" placeholder="MM/DD/YYY" type="date" value={birthDate}  onChange={(e)=>setbirthDate(e.target.value)}/>
  </div>
  </div>
<div class="form-group">
  <label class="control-label col-sm-2" for="username">Username</label>
  <div class="col-sm-7">
    <input type="text" class="form-control" id="username" placeholder="Enter Fullname" name="username" value={username}  onChange={(e)=>setUsername(e.target.value)}/>
  </div>
</div>
<div class="form-group">
  <label class="control-label col-sm-2" for="password">Password</label>
  <div class="col-sm-7">
    <input type="password" class="form-control" id="password" placeholder="Enter Password" name="password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
  </div>
</div>
<div class="form-group-btn">        
<button type="submit" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Submit
</button>
</div>
</form>
</div>
</TransitionGroup>
);
}