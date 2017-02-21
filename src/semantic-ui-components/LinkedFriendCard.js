import React, { Component } from 'react'

import { Card, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { unfollowStock } from '../actions/stockActions'

class LinkedFriendCard extends Component {
  constructor() {
    super()

    this.handleUnfollow = this.handleUnfollow.bind(this)
  }

  handleUnfollow(){
    this.props.unfollowStock(
      { ticker: this.props.stock.ticker }
    )
  }



  render(){
    return (

        <Card>

          <Card.Content onClick={this.handleClick}>
            <Card.Header as='h5'>{`${this.props.following.first_name} ${this.props.following.last_name}`}</Card.Header>
            <Card.Description as='p'>{this.props.following.username}</Card.Description>

            </Card.Content>
        </Card>

        )}
        }

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

function mapDispatchToProps(dispatch){
  return {
    unfollowStock: (params) => {
      let action = unfollowStock(params)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedFriendCard)
