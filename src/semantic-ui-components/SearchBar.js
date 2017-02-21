import { Search, Grid, Header } from 'semantic-ui-react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { queryStocks } from '../actions/stockActions'

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, result) => {

  }

  handleSearchChange = (e, value) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if(value !== '') this.props.queryStocks(value)
      if (this.state.value.length < 1) return this.resetComponent()

      this.setState({
        isLoading: false,
        results: [{
          ticker: 'GOOG',
          company: 'Alphabet',
          price: '$830.35'
        },
        {
          ticker: 'AAPL',
          company: 'Apple',
          price: '$110.13'
        }
      ]
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state
    debugger

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            {...this.props}/>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stockResults: state.stocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    queryStocks: function(query) {
      let action = queryStocks(query)
      dispatch( action )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
