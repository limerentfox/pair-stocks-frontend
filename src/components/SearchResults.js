import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { followStock } from '../actions/stockActions'
import { Icon, Button, Header } from 'semantic-ui-react'

class SearchResults extends Component {
  constructor() {
    super()

    this.handleFollow = this.handleFollow.bind(this)
    // this.handleResultClick = this.handleResultClick.bind(this)
  }

  handleFollow() {
    this.props.followStock({
      ticker: this.props.ticker,
      company_name: this.props.company_name
    })
  }

  // handleResultClick() {
  //   browserHistory.push('/stock')
  // }

  render() {
    // if( this.props.removeResults ) return null

    return (
      <div className="results">
        <div className="padded" >
          <p className="stock-header" >{`${ this.props.ticker }: ${ this.props.company_name }`}</p>

          <Button className='follow-button' size='mini' color='green' onClick={ this.handleFollow } animated='fade'>
            <Button.Content  visible>
              <Icon name='add'/>
            </Button.Content>

            <Button.Content hidden>
              Follow
            </Button.Content>
          </Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followStock: function(params) {
      let action = followStock(params)
      dispatch( action )
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchResults)
