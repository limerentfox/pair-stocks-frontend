import { Grid } from 'semantic-ui-react'
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
      <Grid columns='equal'>
        <Grid.Column>
          <IndividualProfileCard user={user} />
        </Grid.Column>
        <Grid.Column width={12}>
        </Grid.Column>
      </Grid>
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
