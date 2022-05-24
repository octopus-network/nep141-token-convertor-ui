export default function getConfig(env: string = process.env.NEAR_ENV!) {
  switch (env) {
    case 'production':
    case 'mainnet':
      return {
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
        explorerUrl: 'https://explorer.mainnet.near.org',
        indexerUrl: 'https://indexer.ref-finance.net',
        sodakiApiUrl: 'https://sodaki.com/api',
        WRAP_NEAR_CONTRACT_ID: process.env.WRAP_NEAR_CONTRACT_ID || 'wrap.near',
        CONVERTOR_CONTRACT_ID:
          process.env.CONVERTOR_CONTRACT_ID || 'contract.convertor.near',
      };
    case 'development':
    case 'testnet':
      return {
        networkId: 'testnet',
        nodeUrl: 'https://public-rpc.blockpi.io/http/near-testnet',
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org',
        indexerUrl: 'https://testnet-indexer.ref-finance.com',
        sodakiApiUrl: 'https://sodaki.com/api',
        parasApiHttpUrl: 'https://mainnet-api.paras.id/tokens',
        WRAP_NEAR_CONTRACT_ID:
          process.env.WRAP_NEAR_CONTRACT_ID || 'wrap.testnet',
        CONVERTOR_CONTRACT_ID:
          process.env.CONVERTOR_CONTRACT_ID || 'contract.xsb1.testnet',
      };
    default:
      return {
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
        explorerUrl: 'https://explorer.mainnet.near.org',
        indexerUrl: 'https://indexer.ref-finance.net',
        WRAP_NEAR_CONTRACT_ID: process.env.WRAP_NEAR_CONTRACT_ID || 'wrap.near',
        CONVERTOR_CONTRACT_ID:
          process.env.CONVERTOR_CONTRACT_ID || 'convertor.near',
      };
  }
}
