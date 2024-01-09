// window.addEventListener('load', function () {}

'use strict';

function connect() {
    if (typeof window.ethereum !== 'undefined') {
        // Use the browser injected Ethereum provider
        web3 = new Web3(window.ethereum);
        // Request access to the user's MetaMask account
        window.ethereum.request({ method: 'eth_requestAccounts' });
        // Get the user's accounts
        web3.eth.getAccounts().then(function (accounts) {
            // Show the first account
            console.log(accounts[0]);
        });
    } else {
        // If web3 is not available, give instructions to install MetaMask
        console.log('Please install MetaMask to connect with the Ethereum network');
    }
}