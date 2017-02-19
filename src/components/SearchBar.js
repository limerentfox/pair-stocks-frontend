import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Search, Grid, Header } from 'semantic-ui-react'
import { queryStocks } from '../actions/stockActions'

const getResults = () => _.times(3, () => ({
  title: '',
  description: '',
  image: '',
  price: ''
}))

const source = _.range(0, 3).reduce((memo, index) => {
  const name = 'Stocks'

  memo[name] = {
    name,
    results: getResults(),
  }

  return memo
}, {})

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, result) => {
    this.setState({ value: result.title })
  }

  handleSearchChange = (e, value) => {
    let x = this.props.queryStocks(value)
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => {
        return re.test(result.title)
      }

      const filteredResults = _.reduce(source, (memo, data, name) => {
        debugger
        const results = _.filter(data.results, isMatch)

        if (results.length) {
          memo[name] = { name, results }
        }

        return memo
      }, {})

      this.setState({
        isLoading: false,
        results: filteredResults,
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search
        category
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    queryStocks: function(query){
      let action = queryStocks(query)
      dispatch(action)
    }
  }
}

export default connect( null, mapDispatchToProps)(SearchBar)
