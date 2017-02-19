import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'

const getResults = () => _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

const source = _.range(0, 3).reduce((memo, index) => {
  const name = faker.hacker.noun()

  memo[name] = {
    name,
    results: getResults(),
  }

  return memo
}, {})

class SearchBar2 extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, result) => {
    this.setState({ value: result.title })
  }

  handleSearchChange = (e, value) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => {
        debugger
        return re.test(result.title)
      }

      const filteredResults = _.reduce(source, (memo, data, name) => {
        console.log('MEMO ' + memo[0])
        console.log('DATA ' + data[0])
        console.log('NAME ' + name)
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

export default SearchBar2
