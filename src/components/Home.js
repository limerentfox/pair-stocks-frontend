import React, { Component } from 'react'
import { connect } from 'react-redux'
import IndividualProfileCard from '../semantic-ui-components/IndividualProfileCard'
import UserStocks from './UserStocks'
import { fetchUser } from '../actions/userActions'
import { Grid } from 'semantic-ui-react'


class Home extends Component {
  componentDidMount(){
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
