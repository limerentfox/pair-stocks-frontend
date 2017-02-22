export default function viewUserReducer( state=[], action ){
  switch (action.type) {
    case 'FETCH_OTHER_USER':
      debugger
      return action.payload.data
    default:
      return state
  }
}
