import { stockAdapter } from '../adapters/stockAdapter'

const FETCH_STOCKS_OWNED = 'FETCH_STOCKS_OWNED'
const QUERY_STOCKS = 'QUERY_STOCKS'

export const fetchStocksOwned = () => {
  const response = stockAdapter.fetchStock()

  return {
    type: FETCH_STOCKS_OWNED,
    payload: response
  }
}

// export const queryStocks = (query) => {
//   const response = searchAdapter.queryStocks(query)
//
//   return {
//     type: QUERY_STOCKS,
//     payload: response
//   }
// }
