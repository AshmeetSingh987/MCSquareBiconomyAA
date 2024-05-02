import { ethers } from 'ethers'

const scrollProvider = 'https://sepolia-rpc.scroll.io'
const mantleProvider = 'https://rpc.testnet.mantle.xyz'
const sepoliaProvider = `https://sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
const avalancheProvider = 'https://api.avax-test.network/ext/bc/C/rpc'

export async function getETHBalance(chainId: number, walletAddress: string) {
  let provider
  switch (chainId) {
    case 534351:
      provider = new ethers.providers.JsonRpcProvider(scrollProvider)
      break
    case 11155111:
      provider = new ethers.providers.JsonRpcProvider(sepoliaProvider)
      break
    case 43114:
      provider = new ethers.providers.JsonRpcProvider(avalancheProvider)
      break
    case 5001:
      provider = new ethers.providers.JsonRpcProvider(mantleProvider)
      break
    default:
      throw new Error('Invalid ChainID')
  }

  const balance = ethers.utils.formatEther(
    await provider.getBalance(walletAddress)
  )
  return balance
}
