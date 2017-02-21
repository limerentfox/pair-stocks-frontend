import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { browserHistory } from 'react-router'
import Search from './Search'

import '../../public/stylesheets/master.css'

export default class NavBar extends Component {
  constructor() {
    super()

    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleLogOut() {
    sessionStorage.removeItem('jwt')
    browserHistory.push('/login')
  }



  render() {
    if(!sessionStorage.jwt){
      return (
        <Menu secondary attached='top'>
          <Menu.Item name='home'  >
            <img src={require('../../public/feather.png')} alt='logo'/>
          </Menu.Item>
        </Menu>
      )
    }


    return (
      <Menu secondary attached='top'>
        <Menu.Item name='home' >
          <img src={require('../../public/feather.png')} alt='logo'/>

        </Menu.Item>
        <Menu.Item >
          <div className='hover'>

            <Search />

          </div>
        </Menu.Item>

        <Menu.Item position='right' name='logout' onClick={this.handleLogOut} >
          Logout
        </Menu.Item>

      </Menu>


    )
  }
}
