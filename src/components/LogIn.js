import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import LoginForm from '../semantic-ui-components/LoginForm'
import { Header } from 'semantic-ui-react'

export default class LogIn extends Component {
  render(){
    if(!!sessionStorage.jwt) browserHistory.push('/')

    return (
      <div>
        <Header as='h2'>Log In</Header>
          <LoginForm />
        </div>
    )
  }
}
