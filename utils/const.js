import { clusterApiUrl, PublicKey } from '@solana/web3.js'
import spotify from './spotify.json'

export const SOLANA_HOST = 'https://quiet-white-seed.solana-devnet.discover.quiknode.pro/b41a0ad516aef3b7edc14e97a525277a354a2ffe/'

export const STABLE_POOL_PROGRAM_ID = new PublicKey(
  '5wSMdEYxSW7iB3rdE7c8yB3bqBUrVtvggjDdY5viyDLk',
)

export const STABLE_POOL_IDL = spotify

/*clusterApiUrl('devnet')*/