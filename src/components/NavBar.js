import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { browserHistory } from 'react-router'
import SearchBar from './SearchBar'

export default class NavBar extends Component {
  constructor() {
    super()

    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleLogOut() {
    sessionStorage.removeItem('jwt')
    browserHistory.push('/login')
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    if(!sessionStorage.jwt){
      return (
        <Menu secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >
            <img src='feather.png' alt='logo'/>
          </Menu.Item>
        </Menu>
      )
    }

    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >
          <img src='feather.png' alt='logo'/>
        </Menu.Item>
        <Menu.Menu position='center'>
          <Menu.Item>
            <SearchBar />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleLogOut} />
        </Menu.Menu>
      </Menu>
    )
  }
}
