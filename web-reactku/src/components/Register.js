import React from 'react'
import { TransitionGroup } from 'react-transition-group';
import '../styles/worksStyle.css'
import Logo from "../logo.png"


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

      <div class="logo">
        <img src={Logo} alt="Girl in a jacket" />
      </div>
      <div class="container">
        <h2>Register Patient</h2>
        <form class="form-horizontal" action="">
          <div class="form-group">
            <label class="control-label col-sm-2" for="fullname">Full Name</label>
            <div class="col-sm-7">
              <input type="email" class="form-control" id="fullname" placeholder="Enter Fullname" name="fullname" />
            </div>
          </div>
          <label class="control-label col-sm-2" for="gender">Gender</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1">
              Female
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2">
              Male
            </label>
          </div>
          <div class="form-group">
            <div class="col-sm-7">
              <label class="control-label" for="date">Date</label>
              <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="date" />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="username">Username</label>
            <div class="col-sm-7">
              <input type="email" class="form-control" id="username" placeholder="Enter Fullname" name="username" />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="password">Password</label>
            <div class="col-sm-7">
              <input type="password" class="form-control" id="password" placeholder="Enter Password" name="password" />
            </div>
          </div>
          <div class="form-group-btn">
            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
              Submit
            </button>
          </div>
        </form>
      </div>
    </TransitionGroup>
  )
}

export default Register