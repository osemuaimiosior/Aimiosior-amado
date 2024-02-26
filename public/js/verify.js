function verificationResult(){
    window.open("../VerificationResult.html", "", "width=500,height=550");
}


function verify() {
    let pt = prompt('Input Asset Identification Number');
    if(pt.length){
        // verificationResult();
        alert('Item belongs to a');
    } else {
        setTimeout(alert('Please input car VIN'))
    }
}



