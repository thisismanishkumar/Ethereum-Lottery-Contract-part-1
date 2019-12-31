const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider =new HDWalletProvider(
    'nurse oven cream donor desert they stamp that heart layer medal jealous',
    'https://rinkeby.infura.io/v3/fefd36760efb4b1c9e94f04fa3f8e3f0'
);
const web3 = new Web3(provider);

const deploy = async ()=>
{
    const accounts =await web3.eth.getAccounts();
    console.log('Attemptng to deploy a contract',accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data:bytecode
    }).send({gas:'1000000',from: accounts[0]});
    console.log(interface);
    console.log('Contracts deployed to', result.options.address );
};
deploy();