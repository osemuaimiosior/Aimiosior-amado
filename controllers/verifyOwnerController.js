const ethers = require('ethers');
require('dotenv').config();

const address = '0x9E8813392BE59D5884C1bC03b352470839bB6Df8';
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ID",
				"type": "string"
			}
		],
		"name": "setItem",
		"outputs": [
			{
				"internalType": "string",
				"name": "done",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ID",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "transferItem",
		"outputs": [
			{
				"internalType": "string",
				"name": "successfull",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ID",
				"type": "string"
			}
		],
		"name": "getItemOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ID",
				"type": "string"
			}
		],
		"name": "itemHistoricOwnership",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ID",
				"type": "string"
			}
		],
		"name": "itemOwnershipHistoryCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
	
	const provider = new ethers.providers.JsonRpcProvider(process.env.TESTNET_URL)
	const signer = new ethers.Wallet(process.env.KEY, provider)
	const assetContract = new ethers.Contract(address, abi, signer);
  
	const verifyItem = async (req, res) => {
	  try {
		  //let ID = prompt("Input asset ID");
		  let ID = '4JGBF25FX9A534793';
		  var result = await assetContract.getItemOwner(ID);
		  //console.log(result);
		  res.send(result);
		  // alert(result);
	  } catch (error) {
		  console.log(error);
	  }
  }

  module.exports = {verifyItem}