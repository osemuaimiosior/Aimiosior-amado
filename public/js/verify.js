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