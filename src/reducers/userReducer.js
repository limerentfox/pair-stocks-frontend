import { browserHistory } from 'react-router'

export default function userReducer( state=[], action ){
  switch (action.type) {
    case 'LOGIN_USER':
      browserHistory.push('/home')
      return action.payload
    case 'CREATE_USER':
      return action.payload
    case 'FETCH_USER':
      return action.payload.data
    default:
      return state
  }
}
