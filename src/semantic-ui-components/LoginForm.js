import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange( event ){
    const field = event.target.name
    const credentials = this.state.credentials
    credentials[field] = event.target.value
    return this.setState({ credentials })
  }

  handleSubmit( event ){
    event.preventDefault()
    this.props.login( this.state.credentials )
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input name='email' onChange={this.handleChange} placeholder='email' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name='password' onChange={this.handleChange} type='password' placeholder='password' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    login: function( credentials ){
      let action = login( credentials )
      dispatch( action )
    }
  }
}


export default connect( null, mapDispatchToProps )( LoginForm )
