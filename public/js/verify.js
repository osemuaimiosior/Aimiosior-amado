const ethers = require('ethers');
// const ABI = ;
   // const Address = ;
   
   
   const provider = new ethers.providers.Web3Provider(window.ethereum);

   provider.listAccounts()
         .then(function(accounts) {
         const signer = provider.getSigner(accounts[0]);
         const Contract = new ethers.Contract(Address, ABI, signer);
       })
 
     const getOwner = async () => {
       const account = await window.ethereum.request({method: "eth_accounts"})
       if(account.length){
         let ID = prompt("Input asset ID");
         let contractResponse = await Contract.getItemOwner(ID);
         prompt(contractResponse);
       } else {
         setTimeout(function(){alert ('Please connect you wallet')}, 500);
       }
     }
 
     function connect() {
      window.ethereum.request({ method: "eth_requestAccounts" })
        .catch((err) => {
            if (err.code === 4001) {
                console.log("Please connect to MetaMask.");
            } else {
                console.error(err);
            }
        });
      
    }