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
      return action.payload.data
    case 'ADD_STOCK':
      let new_stock = {
        ticker: action.payload.ticker,
        company_name: action.payload.company_name
      }

      return Object.assign({}, state, { stocks: [...state.stocks, new_stock] } )
    default:
      return state
  }
}
