import React, { Component } from 'react'
import { connect } from 'react-redux'
import IndividualProfileCard from '../semantic-ui-components/IndividualProfileCard'
import { fetchUser } from '../actions/userActions'

class Home extends Component {
  componentWillMount(){
    this.props.fetchUser()
  }

  render(){
    const user = this.props.user

    return (
      <div>
        <IndividualProfileCard user={user} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: function(){
      let action = fetchUser()
      dispatch(action)
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Home)
