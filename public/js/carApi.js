const carApi = async (url, options) => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        // console.log(`On avearge the car market value will be $${result}`);
    } catch (error) {
        console.error(error);
}};

module.exports = carApi;
