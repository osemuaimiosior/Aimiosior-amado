function verificationResult(){
    window.open("../VerificationResult.html", "", "width=500,height=550");
}
// Verify the owner of an item starts here //

function verify() {
    let pt = prompt('Input Asset Identification Number');
    if(pt.length){
        // verificationResult();
        alert('Item belongs to a');
    } else {
        setTimeout(alert('Please input car VIN'))
    }
}

// Verify the owner of an item ends here //

/*function verifyTelComm() {
    let pt = prompt('Input Phone IMEI Number');
    if(pt.length){
        verificationResult();
    } else {
        setTimeout(alert('Please input Phone IMEI Number'))
    }
}*/

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
    document.getElementById('walletAmount').innerText = 'Local wallet: $' + 50;
  }

function owner(){
    // document.getElementById('verifyButton').addEventListener('click', function (){
        if (document.getElementById('verifyButton').innerText !== 'Back'){
            document.getElementById('p1').innerText = '>> 1st Gen Owner United Kingdom 2017-06-01 15:45:27 - 0x2911C53aE2A78C039B35fCF82e90C8e6A9F2Eb84';
            document.getElementById('p2').innerText = '>> Current Owner Ghana 2022-01-04 01:20:17 to - 0x2911C53aE2A78C039B35fCF82e90C8e6A9F2Eb84';
            document.getElementById('p3').innerText = '';
            document.getElementById('p4').innerText = '';
            document.getElementById('p5').innerText = '';
            document.getElementById('verifyButton').innerHTML = 'Back';
        } else {
            document.getElementById('p1').innerText = 'Body style: Sedan';
            document.getElementById('p2').innerText = 'Combined MPG: 24';
            document.getElementById('p3').innerText = 'Seating capacity: 4';
            document.getElementById('p4').innerText = 'Dimensions: 196.7” x 55.4”';
            document.getElementById('p5').innerText = 'Drivetrain: Rear-wheel drive';
            document.getElementById('verifyButton').innerHTML = 'Verify';
        }
   // });
}