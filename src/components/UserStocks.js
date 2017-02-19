import React, { Component } from 'react'
import { connect } from 'react-redux'
import LinkedStockCard from '../semantic-ui-components/LinkedStockCard'
import { fetchStocksOwned } from '../actions/index'

class UserStocks extends Component {

  componentDidMount() {
    this.props.fetchStocksOwned()
  }

  render() {
    const userStocks = this.props.stocks
    if (userStocks.length === 0 || 'na' in userStocks) {
      return (<div></div>)
    }

    return (
      <div>
        {
          userStocks.map( ( stock, i ) => <LinkedStockCard key={i} stock={stock} /> )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchStocksOwned: () => {
      let action = fetchStocksOwned()
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( UserStocks )
