# request-network-basic-example
Minimalist examples of using  Request Network library

# Included Examples
## local.js
Creates a request, pays it and gets data from it.

`node local.js`

You'll need the request network contracts on a local ganache:
* Get the [Request Network repository](https://github.com/RequestNetwork/requestNetwork)
* `cd packages/requestNetwork.js` 
* Run ganache in a separate console `npm run ganache`
* Deploy the contracts using the provided script `npm run testdeploy`

## rinkeby.js
Gets a request from the rinkeby blockchain.

`node rinkeby.js`

# For more info
* [Request Network main repository](https://github.com/RequestNetwork/requestNetwork)
* [Join the Request Hub](https://request-slack.herokuapp.com/)
* [Documentation website](http://docs.request.network)
