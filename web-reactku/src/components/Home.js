import React from 'react'
import { TransitionGroup } from 'react-transition-group';
import '../styles/homeStyle.css'


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
      </div>
    </TransitionGroup>
  )
}

export default Home