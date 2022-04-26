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
      <div className="App container">
        <h1 className="text-danger">About</h1>
        <button className="btn btn-primary">Submit</button>
    </div>
    </TransitionGroup>
  )
}

export default About