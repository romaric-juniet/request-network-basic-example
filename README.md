# request-network-basic-example
Minimalist examples of using  Request Network library

# Included Examples
## node.js: local.js
Creates a request, pays it and gets data from it.

`node local.js`

You'll need the request network contracts on a local ganache:
* Get the [Request Network repository](https://github.com/RequestNetwork/requestNetwork)
* `cd packages/requestNetwork.js` 
* Run ganache in a separate console `npm run ganache`
* Deploy the contracts using the provided script `npm run testdeploy`

## node.js: rinkeby.js
Gets a request from the rinkeby blockchain.

`node rinkeby.js`

## Browser with webpack
The library isn't shipped in a form ready to be used in a browser. Webpack is used here to build it for the browser. Run the example from a http server (not `file:`)


# For more info
* [Request Network main repository](https://github.com/RequestNetwork/requestNetwork)
* [Join the Request Hub](https://request-slack.herokuapp.com/)
* [Documentation website](http://docs.request.network)
