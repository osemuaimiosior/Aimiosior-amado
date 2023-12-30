'use strict';

function verificationResult(){
    window.open("../VerificationResult.html", "", "width=500,height=550");
}
     
function verify() {
    let pt = prompt('Input Vehicle Identification Number');
    if(pt != null){
        verificationResult();
    }
}