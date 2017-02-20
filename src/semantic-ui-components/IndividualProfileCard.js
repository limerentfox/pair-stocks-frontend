import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

class IndividualProfileCard extends Component {


  render(){
    const user = this.props.user

    return (
      <Card className="card"
        image='http://semantic-ui.com/images/avatar/large/elliot.jpg'
        header={`${ user.first_name } ${ user.last_name }`}
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
      />
    )
  }
}

export default IndividualProfileCard
