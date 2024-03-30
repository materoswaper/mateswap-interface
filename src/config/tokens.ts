import { ChainId, MATE_ADDRESS, USDC_ADDRESS, USDT_ADDRESS, BAR_ADDRESS, Token, WLAC} from '@mateswapfi/sdk'

type ChainTokenMap = {
  readonly [chainId in ChainId]?: Token
}

export const MATE: ChainTokenMap = {
  [ChainId.LACCHAIN]: new Token(ChainId.LACCHAIN, MATE_ADDRESS[ChainId.LACCHAIN], 18, 'MATE', 'MateToken'),
  [ChainId.LACCHAIN_TESTNET]: new Token(ChainId.LACCHAIN_TESTNET, MATE_ADDRESS[ChainId.LACCHAIN_TESTNET], 18, 'MATE', 'MateToken'),
}

export const XMATE: ChainTokenMap = {
  [ChainId.LACCHAIN]: new Token(ChainId.LACCHAIN, BAR_ADDRESS[ChainId.LACCHAIN], 18, 'xMATE', 'Yerba'),
  [ChainId.LACCHAIN_TESTNET]: new Token(ChainId.LACCHAIN_TESTNET, BAR_ADDRESS[ChainId.LACCHAIN_TESTNET], 18, 'xMATE', 'Yerba'),
}

export const USDT: ChainTokenMap = {
  [ChainId.LACCHAIN]: new Token(ChainId.LACCHAIN, USDT_ADDRESS[ChainId.LACCHAIN], 6, 'USDT', 'USDT token'),
  [ChainId.LACCHAIN_TESTNET]: new Token(ChainId.LACCHAIN_TESTNET, USDT_ADDRESS[ChainId.LACCHAIN_TESTNET], 6, 'USDT', 'USDT token'),
}

export const USDC: ChainTokenMap = {
  [ChainId.LACCHAIN]: new Token(ChainId.LACCHAIN, USDC_ADDRESS[ChainId.LACCHAIN], 6, 'USDC', 'USDC token'),
  [ChainId.LACCHAIN_TESTNET]: new Token(ChainId.LACCHAIN_TESTNET, USDC_ADDRESS[ChainId.LACCHAIN_TESTNET], 6, 'USDC', 'USDC token'),
}

export const WLAC_EXTENDED: { [chainId: number]: Token } = {
  ...WLAC,
}

type ChainTokenMapList = {
  readonly [chainId in ChainId]?: Token[]
}

// These are available for migrate
export const YODESWAP_TOKENS: ChainTokenMapList = {
  [ChainId.LACCHAIN]: [
  ],
  [ChainId.LACCHAIN_TESTNET]: [
  ],
}
