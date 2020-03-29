const axios = require('axios');

const apiRequest = axios.create({
    baseURL: 'https://pomber.github.io/covid19/timeseries.json'
});

const getLastUpdate = async () => {
    const res = await apiRequest.get('');

    const { US } = res.data;

    return US[US.length - 1].date;
};

const getStatusByCountry = async (country) => {
    const res = await apiRequest.get('');


};

const getStatusByCountryAndDate = async (country, date) => {
    const res = await apiRequest.get('');

    
};

export { getLastUpdate }; 