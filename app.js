const Web3 = require('web3');
const { OpenSeaPort, Network } = require('opensea-js');

const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

console.log('seaport', provider)
const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main,
  // apiKey: YOUR_API_KEY
})
console.log('seaport', seaport)