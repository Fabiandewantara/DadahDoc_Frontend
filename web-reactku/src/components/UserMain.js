import React from "react";
import { TransitionGroup } from "react-transition-group";

export default function UserMain(){
    <TransitionGroup
      transitionName="worksTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <table>
          <ul>
            <th>Jadwal</th>
            <th>Dokter</th>
            <th>Status</th>
            <th>Pasien</th>
            <th>Keluhan</th>
          </ul>
      </table>
      </TransitionGroup>
}