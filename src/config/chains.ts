import { mainnet, goerli, arbitrum } from '@wagmi/chains'

export const CHAINS = [arbitrum, mainnet, goerli]

export const DEFAULT_CHAIN = mainnet
export const DEFAULT_CHAIN_ID = mainnet.id
export const GOERLI = goerli
export const GOERLI_CHAIN_ID = goerli.id
export const ARBITRUM = arbitrum
export const ARBITRUM_CHAIN_ID = arbitrum.id
