const RequestNetwork = require('@requestnetwork/request-network.js');
const Web3 = require('web3');

var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'opinion maple cake sugar pudding cream honey rich smooth crumble sweet treat';

(async () => {
  // Initialize web3 with infura provider
  const web3 = new Web3(new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io:443'));

  // Initialize the Request Network library
  const requestNetwork = new RequestNetwork.default({
    provider: web3.currentProvider,
    ethNetworkId: 4,
    useIpfsPublic: true,
  });

  // Retrieve a random request from the blockchain
  const request = await requestNetwork.fromRequestId('0x8fc2e7f2498f1d06461ee2d547002611b801202b000000000000000000000140')

  const data = await request.getData();
  console.log(web3.utils.fromWei(data.payee.expectedAmount.toString()));
  console.log(web3.utils.fromWei(data.payee.balance.toString()));
  console.log(data.data);
})();
