import React, { Component, Reveal } from 'react'

import { Card, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { unfollowStock } from '../actions/stockActions'

class LinkedStockCard extends Component {
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
          <div></div>
          <Reveal animated='small fade'>
            <Reveal.Content visible>
              <Icon className='circular unfollow-icon' onClick={this.handleUnfollow} corner name='delete' inverted color='red' />
            </Reveal.Content>
            <Reveal.Content hidden>
              <div></div>
            </Reveal.Content>
          </Reveal>


          <Card.Content onClick={this.handleClick}>
            <Card.Header as='h5'>{this.props.stock.ticker}</Card.Header>
            <Card.Description >{this.props.stock.company_name}</Card.Description>

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

export default connect(mapStateToProps, mapDispatchToProps)(LinkedStockCard)
