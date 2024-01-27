import  YOUR_PROJECT_ID from '../../config.json';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5'

// 1. Get projectId
const projectId = YOUR_PROJECT_ID


// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: '54.162.241.119:3500', // origin must match your domain & subdomain
  /// icons: ['https://avatars.mywebsite.com/']
}


const modal = createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet],
    projectId,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export {modal};


