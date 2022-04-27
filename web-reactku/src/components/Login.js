import React, { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../styles/worksStyle.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <TransitionGroup
      transitionName="worksTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div class="col-sm-6">
        <div class="login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="username">
          <label htmlFor="fullname">Username</label>
            <Form.Control
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          
          <Button block size="lg" type="submit" disabled={!validateForm()} name="btn">
            Sign In
          </Button>
        
          <Form.Group>
            <p>
              Dont have Account? <Link to="/Register">Sign Up!</Link>
            </p>
          </Form.Group>
        </Form>
        </div>
        <nav class="navbar fixed-bottom navbar-light bg-light">
          <div class="container-fluid">
            <p>Copyrigth ©1997-2022 Hanif Group™.All Right Reserved</p>
          </div>
        </nav>
      </div>
    </TransitionGroup>
  );
}
