import React from 'react'
import { TransitionGroup } from 'react-transition-group';
import '../styles/homeStyle.css'
import authService from '../services/auth.service';

const Home = () => {
  return (
    <TransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div>
        Home
        <button onClick={authService.logout()}>Logout</button>
      </div>
    </TransitionGroup>
  )
}

export default Home