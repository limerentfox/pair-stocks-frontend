import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import LoginForm from '../semantic-ui-components/LoginForm'

export default class LogIn extends Component {
  render(){
    if(!!sessionStorage.jwt){
      browserHistory.push('/')
    }

    return (
      <div>
        <h4>Log In</h4>
        <LoginForm />
      </div>
    )
  }
}
