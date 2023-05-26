import { useAccount, useNetwork, usePublicClient } from 'wagmi'

export function useWeb3React() {
  const { chain } = useNetwork()
  const { address, connector, isConnected, isConnecting } = useAccount()

  return {
    chainId: chain?.id,
    account: address,
    isConnected,
    isConnecting,
    chain,
    connector,
  }
}

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
export const useActiveWeb3React = () => {
  const web3React = useWeb3React()
  const { chain } = useNetwork()
  const provider = usePublicClient({ chainId: chain?.id })

  return {
    provider,
    ...web3React,
    chainId: chain?.id,
  }
}
