const axios = require('axios');

const apiRequest = axios.create({
    baseURL: 'https://pomber.github.io/covid19/timeseries.json'
});

const getLastUpdate = async () => {
    const res = await apiRequest.get('');

    const { US } = res.data;

    return US[US.length - 1].date;
};

const getStatusByCountry = async (country, date) => {
    const res = await apiRequest.get('');

    if (!country) {
        country = getRandomCountryName(res.data);
    }

    if (date) {
        const index = getStatusByDate(res.data[country], new Date(date));

        if (!index) {
            return { msg: 'Desculpe, mas não há relatório pra essa data.', error: true }
        }

        date = index;
    }

    if (!res.data[country]) {
        return { msg: 'Desculpe, mas não há cobertura deste país.', error: true }
    }

    return { country: country, msg: res.data[country][(date) ? date : res.data[country].length - 1] }
};

const getStatusByDate = (data, date) => {
    for (const index in data) {
        const elementDate = new Date(data[index].date);

        if (elementDate.getTime() === date.getTime()) {
            return index;
        }
    }
}

const getRandomCountryName = (data) => {
    const dataKeys = Object.keys(data);

    return dataKeys[Math.floor((Math.random() * dataKeys.length-1) + 0)];
}

export { getLastUpdate, getStatusByCountry }; 