import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import SignUpForm from '../semantic-ui-components/SignUpForm'
import { Header } from 'semantic-ui-react'

export default class SignUp extends Component {
  render(){
    if(!!sessionStorage.jwt) browserHistory.push('/')

    return (
      <div>
        <Header as='h2'>Sign Up</Header>
        <SignUpForm />
      </div>
    )
  }
}
