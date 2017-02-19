import { userAdapter } from '../adapters/userAdapter'

export const CREATE_USER = 'CREATE_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const FETCH_USER = 'FETCH_USER'
export const ADD_USER = 'ADD_USER'

export const login = (credentials) => {
  const response = userAdapter.login(credentials)
  return {
    type: LOGIN_USER,
    payload: response
  }
}

export const fetchUser = () => {
  const response = userAdapter.fetchUser()

  return {
    type: FETCH_USER,
    payload: response
  }
}
