import { useSelector } from 'react-redux'
import { AppState } from '../index'

// Get user token balances list
export function useTokenBalances(): { [key: string]: string } {
  return useSelector<AppState, AppState['balances']['totalBalances']>((state) => state.balances.totalBalances)
}
