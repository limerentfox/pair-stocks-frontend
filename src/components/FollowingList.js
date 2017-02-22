import React, { Component } from 'react'

import { Card, List } from 'semantic-ui-react'
import LinkedFriendCard from '../semantic-ui-components/LinkedFriendCard'

export default class FollowingList extends Component {

  render() {
    const user = this.props.user

    if ( user.length === 0 || user.user_following.length === 0 || user.hasOwnProperty('no_friends')) {
      return (
        <div className="following-list">
          <Card>
            <h5>Following</h5>
            <h5>Use the search bar to find friends</h5>
            <br></br>
          </Card>
        </div>
      )
    }

    const followingList = user.user_following

    return (
      <div className="following-list">
        <Card>
          <h5>Following</h5>
          <List animated verticalAlign='middle'>
            { followingList.map( ( following, i ) => <LinkedFriendCard key={i} following={ following } /> ) }
          </List>
        </Card>
      </div>
    )
  }
}
