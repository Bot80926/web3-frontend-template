import { configureChains, WagmiConfig, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { CHAINS } from '../config/chains'
import { ReactNode, useEffect, useState } from 'react'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'

interface Props {
  children: ReactNode
}

const { chains, publicClient } = configureChains(CHAINS, [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
})

const wagmiClient = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
})

export function Web3Provider(props: Props) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <>
      {ready && (
        <WagmiConfig config={wagmiClient}>
          <RainbowKitProvider chains={chains}>{props.children}</RainbowKitProvider>
        </WagmiConfig>
      )}
    </>
  )
}
