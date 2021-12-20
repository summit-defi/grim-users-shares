import { HardhatUserConfig } from 'hardhat/config'
import "@nomiclabs/hardhat-ethers"

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.0",
  },
  networks: {
    ftm_mainnet: {
      url: "https://rpc.ftm.tools/",
      chainId: 250,
    }
  }, 
};

export default config
