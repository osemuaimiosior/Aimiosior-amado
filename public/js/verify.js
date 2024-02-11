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

// Onwership Verification - verity section below


        const first = document.getElementById('p1').innerText;
        const second = document.getElementById('p2').innerText;
        const third = document.getElementById('p3').innerText;
        const fourth = document.getElementById('p4').innerText;
        const fifith = document.getElementById('p5').innerText;
        const sixth = document.getElementById('p6').innerText;
        
        const ownerVerify =  () => {
        document.getElementById('verifyButton').addEventListener('click', function (){  
        if (document.getElementById('verifyButton').innerText !== 'Back'){
           document.getElementById('p1').innerText = '>> 1st Gen Owner Morocco 2020-10-11 08:30:00 - 0x1aE0EA34a72D944a8C7603FfB3eC30a6669E454C';
           document.getElementById('p2').innerText = '';
           document.getElementById('p3').innerText = '';
           document.getElementById('p4').innerText = '';
           document.getElementById('p5').innerText = '';
           document.getElementById('p6').innerText = '';
           document.getElementById('verifyButton').innerText = 'Back';
       } else {
           // document.getElementById('p1').innerText = 'Body style: SUV';
           document.getElementById('p1').innerText = first;
           document.getElementById('p2').innerText = second;
           document.getElementById('p3').innerText = third
           document.getElementById('p4').innerText = fourth;
           document.getElementById('p5').innerText = fifith;
           document.getElementById('p6').innerText = sixth;
           document.getElementById('verifyButton').innerText = 'Verify';
       }
   })
}
