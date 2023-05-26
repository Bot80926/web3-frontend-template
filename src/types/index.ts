export interface State<T> {
  loading: boolean
  data?: T
  error?: string
}

export type Token = {
  name: string
  symbol: string
  baseSymbol?: string
  decimals: number
  address: `0x${string}`
  coingeckoUrl?: string
  imageUrl?: string

  isNative?: boolean
  isWrapped?: boolean
  isStable?: boolean
  isTempHidden?: boolean
}
