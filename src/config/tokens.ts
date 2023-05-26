import { DEFAULT_CHAIN_ID, ARBITRUM_CHAIN_ID, GOERLI_CHAIN_ID } from './chains'
import { Token } from '../types'
import { ethers } from 'ethers'

export const TOKENS: { [chainId: number]: Token[] } = {
  [ARBITRUM_CHAIN_ID]: [
    {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
      address: ethers.ZeroAddress as `0x${string}`,
      isNative: true,
      imageUrl: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
    },
    {
      name: 'Wrapped Ethereum',
      symbol: 'WETH',
      decimals: 18,
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      isWrapped: true,
      baseSymbol: 'ETH',
      imageUrl: 'https://assets.coingecko.com/coins/images/2518/thumb/weth.png?1628852295',
    },
    {
      name: 'Bitcoin (WBTC)',
      symbol: 'BTC',
      decimals: 8,
      address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
      imageUrl: 'https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png?1548822744',
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      isStable: true,
      imageUrl: 'https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389',
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      decimals: 6,
      address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      isStable: true,
      imageUrl: 'https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707',
    },
    {
      name: 'Dai',
      symbol: 'DAI',
      decimals: 18,
      address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      isStable: true,
      imageUrl: 'https://assets.coingecko.com/coins/images/9956/thumb/4943.png?1636636734',
    },
  ],
  [DEFAULT_CHAIN_ID]: [
    {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
      address: ethers.ZeroAddress as `0x${string}`,
      isNative: true,
      imageUrl: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
    },
  ],
  [GOERLI_CHAIN_ID]: [
    {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
      address: ethers.ZeroAddress as `0x${string}`,
      isNative: true,
      imageUrl: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
    },
  ],
}
