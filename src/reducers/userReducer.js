import { browserHistory } from 'react-router'

export default function userReducer( state=[], action ){
  switch (action.type) {
    case 'LOGIN_USER':
      browserHistory.push('/home')
      return action.payload.user

    case 'CREATE_USER':
      return action.payload

    case 'ADD_USER':
      return state

    case 'FETCH_USER':
      return action.payload

    case 'REMOVE_STOCK':
      const new_state = state.stocks.filter(stock => stock.ticker !== action.payload)
      return Object.assign({}, state, { stocks: new_state })

    case 'ADD_STOCK':
      let new_stock = {
        ticker: action.payload.ticker,
        company_name: action.payload.company_name
      }

      return Object.assign({}, state, { stocks: [...state.stocks, action.payload] } )

    case 'FOLLOW_USER':
      return Object.assign({}, state, { following: action.payload } )

    case 'UNFOLLOW_USER':
      return Object.assign({}, state, { following: action.payload } )

    default:
      return state
  }
}
