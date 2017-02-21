export default function(state=[], action){
  switch (action.type) {
    case 'FETCH_STOCKS_OWNED':
      debugger
      return action.payload
    case 'ADD_STOCK':
      return [...state, action.payload]
    case 'REMOVE_STOCK':
      const new_state = state.filter(stock => stock.ticker !== action.payload)
      return new_state
    case 'QUERY_STOCKS':
      return action.payload.data
    default:
      return state
  }
}
