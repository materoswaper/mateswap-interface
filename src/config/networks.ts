import { ChainId } from '@mateswapfi/sdk'

const LaChain = 'https://raw.githubusercontent.com/boneswap-fi/icons/master/network/dogechain.jpg'
const LaChainTestnet = 'https://raw.githubusercontent.com/boneswap-fi/icons/master/network/dogechain_testnet.jpg'

export const NETWORK_ICON = {
  [ChainId.LACCHAIN]: LaChain,
  [ChainId.LACCHAIN_TESTNET]: LaChainTestnet,
}

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
  [ChainId.LACCHAIN]: 'LaChain',
  [ChainId.LACCHAIN_TESTNET]: 'LaChain Testnet',
}
