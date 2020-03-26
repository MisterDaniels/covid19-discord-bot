const axios = require('axios');
require('dotenv').config();

const requestHandler = axios.create({
    baseURL: process.env.COVID19_API_REPORT_BASE
});

export default requestHandler;