// const fetch = require('node-fetch');

const url = 'https://car-utils.p.rapidapi.com/marketvalue?vin=5N3AA08D68N901917&mileage=55000';
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '0e0c397208msh18ef3e23db904bep1c3546jsn86e92cf3d761',
          'X-RapidAPI-Host': 'car-utils.p.rapidapi.com'
        }
      };

const carApi = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(`On avearge the car market value will be $${result['prices']['average']}`);
    } catch (error) {
        console.error(error);
}};
