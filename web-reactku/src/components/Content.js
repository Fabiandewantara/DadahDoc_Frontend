import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Works from './Works'
import About from './About'
import Login from './Login'
import AdminMain from './AdminMain'
import DataDoctor from './DataDoctor'
import DataUser from './DataUser'
import RegisterDoctor from './RegisterDoctor'

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/works" component={Works} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/adminmain" component={AdminMain} />
      <Route path="/datadoctor" component={DataDoctor} />
      <Route path="/datauser" component={DataUser} />
      <Route path="/registerdoctor" component={RegisterDoctor} />
    </Switch>
  )
}

export default Content
