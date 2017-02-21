import React, { Component } from 'react'
// import UnfollowStockButton from './UnfollowStockButton'
import { connect } from 'react-redux'
// import { unfollowStock } from '../../actions/index'

class StockCard extends Component {

  handleSubmit(event) {
    event.preventDefault()
    this.props.unfollowStock({ticker: this.props.stock.ticker})
  }

  render() {
    return (
      <div className="card" onClick={ this.handleCardClick }>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <button type="submit" className="btn-clear">x</button>
        </form>

        <div className="card-text">
          <div>
            <h5>{ this.props.stock.ticker }</h5>
            <p>{ this.props.stock.company_name }</p>
            <img src="graph.png" alt="graph" className="graph" />
            <p>{ this.props.stock.data[0].last_price }</p>
          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     stocks: state.stocks
//   }
// }
//
// function mapDispatchToProps(dispatch){
//   return {
//     unfollowStock: function(params) {
//       let action = unfollowStock(params)
//       dispatch( action )
//     }
//   }
// }

export default connect( null, null )( StockCard )
