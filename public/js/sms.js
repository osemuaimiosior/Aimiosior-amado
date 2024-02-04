
const encodedParams = new URLSearchParams();
encodedParams.set('sms', '+2348127316934');
encodedParams.set('message', 'test');
encodedParams.set('key', '1B490066-EA03-E39A-A18C-C4868E45CFAE');
encodedParams.set('username', 'temp-idk-test-dynamic');

const url = 'https://inteltech.p.rapidapi.com/send.php';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '0e0c397208msh18ef3e23db904bep1c3546jsn86e92cf3d761',
    'X-RapidAPI-Host': 'inteltech.p.rapidapi.com'
  },
  body: encodedParams
};

async function sms() {
    try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
    }
}

