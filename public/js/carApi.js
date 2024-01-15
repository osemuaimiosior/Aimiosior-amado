let result = null;

const carApi = async (url, options) => {
    try {
        const response = await fetch(url, options);
        result = await response.json();
        console.log(`Your car is estimated to be around $${result["mean"]}`);
;    } catch (error) {
        console.error(error);
    }};
    
module.exports = carApi;
