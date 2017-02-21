import React, { Component } from 'react'
import { connect } from 'react-redux'

import LinkedFriendCard from '../semantic-ui-components/LinkedFriendCard'

import { fetchFollowing } from '../actions/friendActions'

class FollowingList extends Component {

  componentDidMount() {
    this.props.fetchFollowing()
  }

  render() {
    const followingList = this.props.following
    debugger
    if ( followingList === undefined || followingList.length === 0 ) {
      return ( <div> </div> )
    }

    return (
      <div className="following-list">
        {
          followingList.map( ( following, i ) => <LinkedFriendCard key={i} following={ following } /> )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    following: state.following
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchFollowing: function() {
      let action = fetchFollowing()
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( FollowingList )
