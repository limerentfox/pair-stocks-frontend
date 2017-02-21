import { combineReducers } from 'redux'
import userReducer from './userReducer'
import stockReducer from './stockReducer'
import friendReducer from './friendReducer'

const rootReducer = combineReducers({
  user: userReducer,
  stocks: stockReducer,
  following: friendReducer
})

export default rootReducer
