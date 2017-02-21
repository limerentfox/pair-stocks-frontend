import React, { PropTypes } from 'react'
import { Button } from 'semantic-ui-react'

import SearchBar from './SearchBar'

const resultRenderer = ({ ticker, company, price }) => {
  return (
    <div>
      <h4>{ ticker }</h4>
      <p>
        { company }
        <br/>
        { price }
      </p>
      <Button>Follow</Button>
    </div>
  )
}

resultRenderer.propTypes = {
  ticker: PropTypes.string,
  company: PropTypes.string,
}

const SearchBarRender = () => (
  <SearchBar resultRenderer={resultRenderer} />
)

export default SearchBarRender
