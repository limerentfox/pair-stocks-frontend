export default function(state=[], action){
  switch (action.type) {
    case 'QUERY_STOCKS':
      return action.payload.data
    case 'FETCH_ALL_USERS':
      debugger
      return action.payload
    default:
      return state
  }
}
