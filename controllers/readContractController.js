const ethers = require('ethers');
const path = require('path');
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
	const wallet = new ethers.Wallet(process.env.KEY, provider)
	const signer = wallet.provider.getSigner(wallet.address);
	const assetContract = new ethers.Contract(address, abi, signer);
  
	const getItemOwner = async (req, res) => {
	  try {
		  //const ID = req.body.idNumber;
		  //console.log(ID)
		  const ID = '1234';
		  var result = await assetContract.getItemOwner(ID);
		  //console.log(result);
		  if(result == "0x0000000000000000000000000000000000000000"){
			res.status(404).json({
				status: "Fail",
				message: "Unable to get data from the block"
			  });
		  } else {
			res.json(result);
			console.log(result);
		  };
	  } catch (error) {
		  console.log(error);
	  }
  }

  const itemHistoricOwnership = async (req, res) => {
	try {
		const ID = req.params.id;
		var result = await assetContract.itemHistoricOwnership(ID);
		//console.log(result);
		if(!result.length){
		  res.status(404).json({
			  status: "Fail",
			  message: "Unable to get data from the block"
			});
		} else {
		  res.json(result);
		};
	} catch (error) {
		console.log(error);
	}
}

const itemOwnershipHistoryCount = async (req, res) => {
	try {
		const ID = req.params.id;
		var result = await assetContract.itemOwnershipHistoryCount(ID);
		//console.log(result);
		if(!result.length){
		  res.status(404).json({
			  status: "Fail",
			  message: "Unable to get data from the block"
			});
		} else {
		  res.json(result);
		};
	} catch (error) {
		console.log(error);
	}
}

  module.exports = {
	getItemOwner,
	itemHistoricOwnership,
	itemOwnershipHistoryCount
}