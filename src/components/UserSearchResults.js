import React, { Component } from 'react'

class UserSearchResults extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    debugger
    return (
      <div className="results">
        <div className="padded" >
          <p className="stock-header" >
            {`${ this.props.user.first_name } ${ this.props.user.last_name }`}
            <br/>
            {`${ this.props.user.username }`}
          </p>
        </div>
      </div>
    )
  }
}

export default UserSearchResults
