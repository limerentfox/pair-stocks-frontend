import { combineReducers } from 'redux'
import userReducer from './userReducer'
import stockReducer from './stockReducer'
import searchReducer from './searchReducer'
import friendReducer from './friendReducer'

const rootReducer = combineReducers({
  user: userReducer,
  stocks: stockReducer,
  search: searchReducer,
  following: friendReducer
})

export default rootReducer
