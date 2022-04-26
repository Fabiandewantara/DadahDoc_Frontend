import React from 'react'
import { TransitionGroup } from 'react-transition-group';
import '../styles/aboutStyle.css'

const About = () => {
  return (
    <TransitionGroup
      transitionName="aboutTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div className="about">
        About
        </div>
    </TransitionGroup>
  )
}

export default About