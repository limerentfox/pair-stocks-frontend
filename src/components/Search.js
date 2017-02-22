import React from 'react'
import { connect } from 'react-redux'
import { queryStocks } from '../actions/stockActions'
import { fetchAllUsers } from '../actions/userActions'
import SearchResults from './SearchResults'

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      removeResults: true
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.getSearchComponent = this.getSearchComponent.bind(this)
  }

  handleInput() {
    this.setState({ removeResults: false })
    this.queryUnlessBlank()
  }

  handleBlur() {
    setTimeout(()=>{ this.setState({ removeResults: true }) }, 250)
    console.log(`Blur ${ this.state.removeResults }`)
  }

  handleFocus() {
    this.queryUnlessBlank()
    console.log(`Focus ${ this.state.removeResults }`)
  }

  render() {
    const stockSearch = this.props.stockSearch
    const userSearch = this.props.userSearch
    const searchComponent = this.getSearchComponent(stockSearch, userSearch)

    return (
      <div id='search'>
        <input
          icon='search'
          placeholder='Search...'
          id='search'
          type='text'
          ref='search'
          autoComplete='off'
          onChange={ this.handleInput }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
        />

        { searchComponent }
      </div>
    )
  }

  queryUnlessBlank() {
    const query = this.refs.search.value
    if(query !== ''){
      this.setState({ removeResults: false })
      this.props.queryStocks(query)
      this.props.queryAllUsers(query)
    } else {
      this.setState({ removeResults: true })
    }
  }

  getSearchComponent(stockSearch, userSearch){
    let component = null
    debugger
    if(!this.state.removeResults){
      component = (
        <div>
          {
            stockSearch.map((stock, i) => {
              return <SearchResults key={i} ticker={ stock.ticker } company_name={ stock.name } />
            })
          }
        </div>
      )
    }

    return component
  }
}

const mapStateToProps = (state) => {
  return {
    stockSearch: state.search,
    userSearch: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    queryStocks: function(query) {
      let action = queryStocks(query)
      dispatch( action )
    },
    queryAllUsers: function(query) {
      let action = fetchAllUsers(query)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
