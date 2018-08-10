const RequestNetwork = require('@requestnetwork/request-network.js');
  
// Initialize the Request Network library
const requestNetwork = new RequestNetwork.default({
    provider: web3.currentProvider, // metamask
    ethNetworkId: 4,
    useIpfsPublic: false,
});

// Create a request as payer:
const payeeAddress = '0x0Db609A4F1A4b40De5Aa157026d9a522EE40E56c'; // random address
const payerAddress = web3.eth.defaultAccount;

const payerInfo = {
    idAddress: payerAddress,
    refundAddress: payerAddress,
};

const payeesInfo = [{
    idAddress: payeeAddress,
    paymentAddress: payeeAddress,
    expectedAmount: 150000,
}]

requestNetwork.createRequest(
    RequestNetwork.Types.Role.Payer,
    RequestNetwork.Types.Currency.ETH,
    payeesInfo,
    payerInfo,
).then(
    request => console.log(request)
);

