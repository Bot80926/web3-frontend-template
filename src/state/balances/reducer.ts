import { createReducer } from '@reduxjs/toolkit'
import { updateTotalBalance } from './actions'

export interface BalancesState {
  totalBalances: {
    [key: string]: string
  }
}

export const initialState: BalancesState = {
  totalBalances: {
    ETH: '0',
    USDT: '0',
    USDC: '0',
  },
}

export default createReducer(initialState, (builder) =>
  builder.addCase(updateTotalBalance, (state, { payload: { totalBalances } }) => {
    state.totalBalances = totalBalances
  })
)
