import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
import AuthService from "../services/auth.service";

export default function UserMain() {
    function isChecked(){
        
    }
  return (
    <TransitionGroup
      transitionName="worksTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <table class="table">
          <thead>
          <tr>
            <th>Dokter</th>
            <th>Keluhan</th>
            <th>Submit</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Nama Dokter</td>
            <td>Keluhan</td>
            <td><button className="btn btn-primary">Booking Dokter</button></td>
          </tr>
          </tbody>
      </table>
    </TransitionGroup>
  );
}
