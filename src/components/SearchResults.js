import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { followStock } from '../actions'

class SearchResults extends Component {
  constructor() {
    super()

    this.handleFollow = this.handleFollow.bind(this)
  }

  handleFollow() {
    this.props.followStock({
      ticker: this.props.ticker,
      company_name: this.props.company_name
    })
  }

  handleResultClick() {
    browserHistory.push('/stock')
  }

  render() {
    if( this.props.removeResults ){
        return null
    }

    return (
      <div id="search-results-card">
        <div className='row'>
          <div className='eight columns' onClick={ this.handleResultClick }>
            <p className="search-results-text">
              { this.props.company_name }
              <br/>
              { this.props.ticker }
            </p>
          </div>

          <div className='four columns'>
            <button className='u-full-width' onClick={ this.handleFollow }>Follow</button>
          </div>
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
