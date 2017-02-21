import { browserHistory } from 'react-router'

export default function friendReducer( state=[], action ){
  switch (action.type) {
    case 'FETCH_FOLLOWING':
      return action.payload
    default:
      return state
  }
}
