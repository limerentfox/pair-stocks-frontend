import React, { Component } from 'react'

import { List, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { fetchOtherUser } from '../actions/stockActions'

class LinkedFriendCard extends Component {

  handleClick(username) {
    browserHistory.push(`/profile/${username}`)
    this.props.fetchOtherUser(username)
  }

  // TODO implement feature to stop following someone

  // handleUnfollow(){
  //   this.props.unfollowStock(
  //     { ticker: this.props.stock.ticker }
  //   )
  // }

  render() {
    return (
      <List.Item className='link' onClick={ this.handleClick.bind(this, this.props.following.username) }>
        <Image avatar src='http://semantic-ui.com/images/avatar/small/helen.jpg' />
        <List.Content>
          <List.Header>{`${this.props.following.first_name} ${this.props.following.last_name}`}</List.Header>
          <List.Description>{this.props.following.username}</List.Description>
        </List.Content>
      </List.Item>
    )
  }

  // render(){
  //   return (
  //     <Card>
  //       <Card.Content onClick={this.handleClick}>
  //         <Card.Header as='h5'>{`${this.props.following.first_name} ${this.props.following.last_name}`}</Card.Header>
  //         <Card.Description as='p'>{this.props.following.username}</Card.Description>
  //
  //         </Card.Content>
  //     </Card>
  //   )
  // }
}

// const mapStateToProps = (state) => {
//   return {
//     stocks: state.stocks
//   }
// }
//
function mapDispatchToProps(dispatch){
  return {
    fetchOtherUser: ( username ) => {
      let action = fetchOtherUser( username )
      dispatch(action)
    }
  }
}

export default connect( null, mapDispatchToProps )( LinkedFriendCard )
