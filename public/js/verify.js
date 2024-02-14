'use strict';

function verificationResult(){
    window.open("../VerificationResult.html", "", "width=500,height=550");
}
     
function verify() {
    let pt = prompt('Input Asset Identification Number');
    if(pt.length){
        verificationResult();
    } else {
        setTimeout(alert('Please input car VIN'))
    }
}

function verifyTelComm() {
    let pt = prompt('Input Phone IMEI Number');
    if(pt.length){
        verificationResult();
    } else {
        setTimeout(alert('Please input Phone IMEI Number'))
    }
}

function nextInfo() {
    let carMil;
    carMil = prompt('Input Car Mileage');
    if(carMil.length) {
        window.open("/carEstimate.html", "", "width=500,height=550");
    } else {
        setTimeout(alert('Please input car mileage'))
    }
}

function carEstimate(){
    let carVin;
    carVin = prompt('Input Car Vehicle Identification Number');
    if (carVin.length) {
        nextInfo();
    } else {
        setTimeout(alert('Please input car VIN'))
    }
}

function walletAmount() {
    document.getElementById('walletAmount').innerText = 'Wallet amount: $' + 50;
  }