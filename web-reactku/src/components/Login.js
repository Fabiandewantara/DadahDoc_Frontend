import React, { Component, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import Form from "react-bootstrap/Form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";
import "../styles/worksStyle.css";
import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
export default class Login extends Component {
  constructor(props) {  
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });
    this.form.validateForm() 

    if (this.checkBtn.context._errors.length === 0){
      AuthService.login(
        this.state.username,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage = 
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }    
  }

  render(){
    return(
      <>
      <TransitionGroup
      transitionName="worksTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}></TransitionGroup>
      <div className="col-md-7">
        <div class="form-signup">
          <Form onSubmit={this.handleSubmit} ref={c => {
            this.form = c;
          }}>
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text" className="form-control" name="username"
                    value={this.state.username} onChange={this.onChangeUsername}
                    validations={[required, vusername]}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password" className="form-control" name="password"
                    value={this.state.password} onChange={this.onChangePassword}
                    validations={[required, vpassword]}/>
                </div>
                <div className="form-group">
                  <div class="btn-submit">
                    <button className="btn btn-primary btn-block">Sign In</button>
                  </div>
                </div>
              </div>
            )}
            {this.state.message && (
              <div className="form-group">
                <div className={this.state.successful
                  ? "alert alert-success" : "alert alert-danger"} role="alert">{this.state.message}
                </div>
              </div>
            )}
            <Button style={{ display:"none" }}
            ref={c => {
              this.checkBtn = c;
            }}/>
          </Form>
        </div>
      </div>
      </>
    )
  }
}