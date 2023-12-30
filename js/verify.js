function verificationResult(){
    window.open("../VerificationResult.html", "", "width=600,height=700");
}
     
function verify() {
    let pt = prompt('Input Vehicle Identification Number');
    if(pt != null){
        verificationResult();
    }
}