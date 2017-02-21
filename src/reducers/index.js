import { combineReducers } from 'redux'
import userReducer from './userReducer'
import stockReducer from './stockReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  user: userReducer,
  stocks: stockReducer,
  search: searchReducer
})

export default rootReducer
