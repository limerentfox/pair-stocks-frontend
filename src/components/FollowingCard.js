import React, { Component } from 'react'
import {connect} from 'react-redux'


export default class FollowingCard extends Component {

  handleClick(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="card-following" onClick={ this.handleClick.bind(this) }>
        <div className="inline">
          <img src="profile_pic.png" alt="profile_pic" className='sidepanel__avatar' />
        </div>
        <div className="inline ">
            <p>{ this.props.following.username}</p>
            <p>{ `${this.props.following.first_name} ${this.props.following.last_name}` }</p>
        </div>
      </div>
    )
  }
}
