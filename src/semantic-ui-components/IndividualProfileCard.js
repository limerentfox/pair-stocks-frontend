import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'

const extra = (
  <a>
    <Button>Follow</Button>
  </a>
)

class IndividualProfileCard extends Component {


  render(){
    const user = this.props.user

    return (
      <Card className="card"
        image='http://semantic-ui.com/images/avatar/large/elliot.jpg'
        header={`${ user.first_name } ${ user.last_name }`}
        meta={ user.username }
        description={`${ user.first_name } is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.`}
        extra={extra}
      />
    )
  }
}

export default IndividualProfileCard
