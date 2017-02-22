import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, Button, Image } from 'semantic-ui-react'

import { followUser } from '../actions/userActions'

class IndividualProfileCard extends Component {

  handleClick(username) {
    this.props.followUser(username)
  }

  render(){
    let user = this.props.user
    let currentUser = undefined

    // debugger

    // if ( this.props.state.user.length === 0 ) {
    //   user = this.props.state.viewUser
    // }
    // else {
    //   user = this.props.state.user
    // }

    if ( user === undefined || user.length === 0 ) {
      return (<div></div>)
    }

    // if ( user.hasOwnProperty('viewUser') ) {
    //   return (
    //     <Card className="card">
    //       <Image src='http://semantic-ui.com/images/avatar/large/elliot.jpg' />
    //         <Card.Content>
    //           <Card.Header>{`${ user.first_name } ${ user.last_name }`}</Card.Header>
    //           <Card.Meta>{ user.username }</Card.Meta>
    //           <Card.Description>{`${ user.first_name } is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.`}</Card.Description>
    //         </Card.Content>
    //         <Card.Content extra>
    //           <a>
    //             <Button onClick={ this.handleClick.bind(this, {username: user.username} ) } color='green'>Follow</Button>
    //           </a>
    //           </Card.Content>
    //     </Card>
    //   )
    // }

    return (
      <Card className="card">
        <Image src='http://semantic-ui.com/images/avatar/large/elliot.jpg' />
          <Card.Content>
            <Card.Header>{`${ user.first_name } ${ user.last_name }`}</Card.Header>
            <Card.Meta>{ user.username }</Card.Meta>
            <Card.Description>{`${ user.first_name } is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.`}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Button onClick={ this.handleClick.bind(this, user.username) } color='yellow'>Edit Profile</Button>
            </a>
            </Card.Content>
      </Card>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {

  return {
    followUser: function(username){
      let action = followUser(username)
      dispatch( action )
    }
  }
}

export default connect( null, mapDispatchToProps )( IndividualProfileCard )
