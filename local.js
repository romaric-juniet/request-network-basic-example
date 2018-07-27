// To test in local, run these 2 script from the library (directory packages/requestNetwork.js in repository RequestNetwork/requestNetwork):
// npm run ganache
// npm run testdeploy

const RequestNetwork = require('@requestnetwork/request-network.js');
const Web3 = require('web3');

(async () => {
  // Initialize web3 with local provider
  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  
  // Initialize the Request Network library
  const requestNetwork = new RequestNetwork.default({
    provider: web3.currentProvider,
    ethNetworkId: 10000000000,
    useIpfsPublic: false,
  });

  // Create a request as payer:
  const [payeeAddress, payerAddress] = await web3.eth.getAccounts();

  const payerInfo = {
    idAddress: payerAddress,
    refundAddress: payerAddress,
  };

  const payeesInfo = [{
    idAddress: payeeAddress,
    paymentAddress: payeeAddress,
    expectedAmount: web3.utils.toWei('1.5', 'ether'),
  }]

  const { request } = await requestNetwork.createRequest(
    RequestNetwork.Types.Role.Payee,
    RequestNetwork.Types.Currency.ETH,
    payeesInfo,
    payerInfo,
  );

  // Pay a request
  await request.pay([web3.utils.toWei('1.5', 'ether')], [0], { from: payerAddress });

  // The balance is the same amount as the the expected amount, the request is paid
  const data = await request.getData();
  console.log(web3.utils.fromWei(data.payee.expectedAmount.toString()));
  console.log(web3.utils.fromWei(data.payee.balance.toString()));
})();
