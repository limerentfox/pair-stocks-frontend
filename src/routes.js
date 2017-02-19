import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './App'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Edit from './components/Edit'

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ Home }/>
    <Route path='/home' component={ Home }>
      <Route path='/edit' component={ Edit }/>
    </Route>
    <Route path='/login' component={ LogIn }/>
    <Route path='/signup' component={ SignUp }/>
  </Route>
)
