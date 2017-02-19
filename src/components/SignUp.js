import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import SignUpForm from '../semantic-ui-components/SignUpForm'

export default class SignUp extends Component {
  render(){
    if(!!sessionStorage.jwt) browserHistory.push('/')

    return (
      <div>
        <h4>Sign Up</h4>
        <SignUpForm />
      </div>
    )
  }
}
