import { friendAdapter } from '../adapters/friendAdapter'

export const FETCH_FOLLOWING = 'FETCH_FOLLOWING'

export const fetchFollowing = () => {
  const response = friendAdapter.fetchFollowing()

  return {
    type: FETCH_FOLLOWING,
    payload: response
  }
}
