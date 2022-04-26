import React from "react";
import { TransitionGroup } from "react-transition-group";

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
            <th>Jadwal</th>
            <th>Dokter</th>
            <th>Status</th>
            <th>Pasien</th>
            <th>Keluhan</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Test</td>
            <td>Test</td>
            <td><input type="radio"></input></td>
            <td>Test</td>
            <td>Test</td>
          </tr>
          </tbody>
      </table>
    </TransitionGroup>
  );
}
