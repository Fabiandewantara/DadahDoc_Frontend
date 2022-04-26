import React from 'react'
import { TransitionGroup } from 'react-transition-group';
import '../styles/worksStyle.css'

const Works = () => {
  return (
    <TransitionGroup 
      transitionName="worksTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div>
        Works
        </div>
    </TransitionGroup>
  )
}

export default Works