import { ChainId } from '@mateswapfi/sdk'
const THE_GRAPH = 'http://127.0.0.1:8000';

export const GRAPH_HOST = {
  [ChainId.LACCHAIN]: THE_GRAPH,
  // [ChainId.LACCHAIN_TESTNET]: THE_GRAPH,
}
