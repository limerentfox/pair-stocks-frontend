import React, { Component } from 'react'
import { connect } from 'react-redux'

import IndividualProfileCard from '../semantic-ui-components/IndividualProfileCard'

import UserStocks from './UserStocks'
// import FollowingList from './FollowingList'

import { fetchOtherUser } from '../actions/userActions'

// import { Grid } from 'semantic-ui-react'

import '../../public/stylesheets/master.css'
import '../../public/feather.png'

class Profile extends Component {

  componentWillMount() {
    let username = this.props.params.username
    this.props.fetchOtherUser(username)
  }

  render(){
    const user = this.props.viewUser

    return (
      <div>
        <IndividualProfileCard user={ user } />
        <UserStocks user={ user }/>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {

  return {
    user: state.user,
    viewUser: state.viewUser
  }
}

const mapDispatchToProps = ( dispatch ) => {

  return {
    fetchOtherUser: function(username){
      let action = fetchOtherUser(username)
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Profile )
