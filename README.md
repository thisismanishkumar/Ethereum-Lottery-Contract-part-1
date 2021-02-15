# Ethereum-Lottery-Contract-part-1
+ In this part you can create Lottery [contract](/contracts/Lottery.sol),
+ Can [test](/test) it with Mocha (JS Testing frame work) by running $ npm run test
+ Can compile solidty code to ABI (Interface) and bytecode in [compile.js](/compile.js)
+ Can deploy contract to the desired network using [deploy.js](/deploy.js)

## If you are cloning whole repo and some errors regarding npm is comming then delete [node_modules](/node_modules) and install 
### Installing few packages:-
+ npm init(Node.js version should be higher than 8.0.0 check by js -version)
+ npm install --save solc@0.4.17 (solidity compiler)
+ npm install --save mocha (test running framework)
+ npm install --save ganache-cli (local ethereum test network)
+ npm install --save web3@1.0.0-beta.35
+ (infura api key)
+ (Metamask plugin in google chrome) and save 12 word Mnemonics
+ npm install --save truffle-hdwallet-provider@0.0.3

 For interacting with your contract see [Ethereum-Lottery-Contract-part-2](https://github.com/thisismanishkumar/Ethereum-Lottery-Contract-part-2)
## Contributors:-
* <a href="https://github.com/thisismanishkumar">Manish Kumar</a>
