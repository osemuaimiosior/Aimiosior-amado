'use strict';

function verificationResult(){
    window.open("../VerificationResult.html", "", "width=500,height=550");
}
     
function verify() {
    let pt = prompt('Input Asset Identification Number');
    if(pt != null){
        verificationResult();
    }
}

function verifyTelComm() {
    let pt = prompt('Input Asset IMEI Number');
    if(pt != null){
        verificationResult();
    }
}