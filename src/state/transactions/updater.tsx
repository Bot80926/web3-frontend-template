import { useEffect } from 'react'
import { useActiveWeb3React } from '../../hooks/useWeb3React'
import { useBlockNumber } from 'wagmi'
import { useAppDispatch } from '../index'
import { checkedTransaction, finalizeTransaction } from './actions'
import { useAllChainTransactions } from './hooks'
import { helperToast } from '../../utils/helperToast'

export function shouldCheck(currentBlock: number, tx: { addedTime: number; receipt?: any; lastCheckedBlockNumber?: number }): boolean {
  if (tx.receipt) return false
  if (!tx.lastCheckedBlockNumber) return true
  const blocksSinceCheck = currentBlock - tx.lastCheckedBlockNumber
  if (blocksSinceCheck < 1) return false
  const minutesPending = (new Date().getTime() - tx.addedTime) / 1000 / 60
  if (minutesPending > 60) {
    // every 10 blocks if pending for longer than an hour
    return blocksSinceCheck > 9
  }
  if (minutesPending > 5) {
    // every 3 blocks if pending more than 5 minutes
    return blocksSinceCheck > 2
  }
  // otherwise every block
  return true
}

export default function Updater(): null {
  const { chainId, provider } = useActiveWeb3React()

  const currentBlock = useBlockNumber()

  const dispatch = useAppDispatch()
  const transactions = useAllChainTransactions()

  useEffect(() => {
    if (!chainId || !provider || !currentBlock) return

    Object.keys(transactions)
      .filter((hash) => shouldCheck(Number(currentBlock), transactions[hash]))
      .forEach((hash) => {
        provider
          .getTransactionReceipt(hash as any)
          .then((receipt) => {
            if (receipt) {
              dispatch(
                finalizeTransaction({
                  chainId,
                  hash,
                  receipt: {
                    blockHash: receipt.blockHash,
                    blockNumber: Number(receipt.blockNumber),
                    contractAddress: receipt.contractAddress ?? '',
                    from: receipt.from,
                    status: Number(receipt.status),
                    to: receipt.to ?? '',
                    transactionHash: receipt.transactionHash,
                    transactionIndex: receipt.transactionIndex,
                  },
                })
              )

              const toast = Number(receipt?.status) === 1 ? helperToast.success : helperToast.error
              toast('Transaction receipt')
            } else {
              dispatch(checkedTransaction({ chainId, hash, blockNumber: Number(currentBlock) }))
            }
          })
          .catch((error) => {
            console.error(`failed to check transaction hash: ${hash}`, error)
          })
      })
  }, [chainId, provider, transactions, currentBlock, dispatch])

  return null
}
