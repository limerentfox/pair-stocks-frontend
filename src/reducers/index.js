import { combineReducers } from 'redux'
import userReducer from './userReducer'
import stockReducer from './stockReducer'

const rootReducer = combineReducers({
  user: userReducer,
  stocks: stockReducer
})

export default rootReducer
