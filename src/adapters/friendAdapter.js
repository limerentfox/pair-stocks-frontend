// import { browserHistory } from 'react-router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const friendAdapter = {
  fetchFollowing: () => {
    return axios.get('following').then((response) => {
      return response.data})
  }
}
