require('dotenv').config();
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');

var mainNetPrivateKey = new Buffer(process.env["MAINNET_PRIVATE_KEY"], "hex")
var mainNetWallet = Wallet.fromPrivateKey();
var mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
var mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/ALJyYuZ7YioSxeuzglYz");

var ropstenPrivateKey = new Buffer(process.env["ROPSTEN_PRIVATE_KEY"], "hex")
var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
var ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/ALJyYuZ7YioSxeuzglYz");

//var mnemonic = "paper amazing float rug dress wreck slot apple balcony wrap file shiver";
// provider: function() {
// 	return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/ALJyYuZ7YioSxeuzglYz",2)
// },

module.exports = {
  networks: {
	ropsten:  {
		provider: ropstenProvider,
		network_id: 3,
		gas:   3000000,
		gasPrice: web3.toWei("20", "gwei")
	},
	mainnet: {
		provider: mainNetProvider,
		gas: 3000000,
		gasPrice: web3.toWei("20", "gwei"),
		network_id: "1",
	},
	ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
   rpc: {
	host: 'localhost',
	post:8080
   }
};