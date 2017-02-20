import _ from 'lodash'
import { connect } from 'react-redux'
import { queryStocks } from '../actions/stockActions'
import React, { Component } from 'react'
import { Search, Grid } from 'semantic-ui-react'

// const source = _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, '$'),
// }))

export default class SearchBar extends Component {


    componentWillMount() {
      this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, result) => this.setState({ value: result })

    handleSearchChange = (e, value) => {
      this.setState({ isLoading: true, value })

      setTimeout(() => {
        if (this.state.value.length < 1) return this.resetComponent()

        this.setState({
          isLoading: false,
          results: this.props.queryStocks(value),
        })
      }, 500)
    }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stockSearch: state.stocks
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
