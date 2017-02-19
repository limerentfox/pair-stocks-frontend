export default function userReducer( state=[], action ){
  switch (action.type) {
    case 'CREATE_USER':
      return state
    case 'ADD_USER':
      return state
    case 'GET_CURRENT_USER':
      return state
    default:
      return state
  }
}
