import { createAction } from '@reduxjs/toolkit'

export type TransactionType = 'approve' | 'swap' | 'wrap' | 'add-liquidity' | 'remove-liquidity'

export interface SerializableTransactionReceipt {
  to: string
  from: string
  contractAddress: string
  transactionIndex: number
  blockHash: string
  transactionHash: string
  blockNumber: number
  status?: number
}

export const addTransaction = createAction<{
  chainId: number
  hash: string
  from: string
  approval?: { tokenAddress: string; spender: string }
  claim?: { recipient: string }
  summary?: string
  translatableSummary?: { text: string; data?: Record<string, string | number> }
  type?: TransactionType
}>('transactions/addTransaction')
export const clearAllTransactions = createAction('transactions/clearAllTransactions')
export const clearAllChainTransactions = createAction<{ chainId: number }>('transactions/clearAllChainTransactions')
export const finalizeTransaction = createAction<{
  chainId: number
  hash: string
  receipt: SerializableTransactionReceipt
}>('transactions/finalizeTransaction')
export const checkedTransaction = createAction<{
  chainId: number
  hash: string
  blockNumber: number
}>('transactions/checkedTransaction')
