import { useCallback } from 'react'
import { ethers } from 'ethers'
import useSWR from 'swr'
import { fetchBalance } from '@wagmi/core'
import { useAppDispatch } from '../index'
import { useAccount, useNetwork } from 'wagmi'
import { TOKENS } from '../../config/tokens'
import { useTokenBalances } from './hooks'
import { updateTotalBalance } from './actions'

export const useFetchWalletBalance = async () => {
  const dispatch = useAppDispatch()
  const { address, status } = useAccount()
  const tokenBalances = useTokenBalances()
  const { chain } = useNetwork()

  const fetchWalletBalance = useCallback(async () => {
    if (!address || status !== 'connected' || !chain || !TOKENS[chain?.id]?.length) {
      return
    }
    const tokenList = TOKENS[chain?.id]
    const balanceList = { ...tokenBalances }

    for (let i = 0; i < tokenList.length; i++) {
      if (tokenList[i]?.address === ethers.ZeroAddress) {
        const getMainTokenBalance = await fetchBalance({ address, formatUnits: 'ether', chainId: chain?.id })
        balanceList['ETH'] = getMainTokenBalance?.formatted ?? '0'
        continue
      }
      const getTokenBalance = await fetchBalance({ address, formatUnits: 'ether', chainId: chain?.id, token: tokenList[i]?.address })
      balanceList[tokenList[i]?.symbol] = getTokenBalance?.formatted ?? '0'
    }
    dispatch(updateTotalBalance({ totalBalances: balanceList }))
    return balanceList
  }, [address, chain, dispatch, status, tokenBalances])

  const { data } = useSWR('fetchWalletBalance', fetchWalletBalance, {
    refreshInterval: 1000,
  })
  return data
}
