
const mintAsset = async () => {
    const accounts = await window.ethereum.request({method: "eth_accounts"})
    if (accounts.length){
        window.open("../mintAsset.html", "", "width=500,height=550");
        // console.log("wallect connected");
    } else{
        setTimeout(function(){alert ("Please connect your wallet")}, 1000);
    }
}

     
