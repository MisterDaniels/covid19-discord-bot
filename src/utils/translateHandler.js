require('dotenv').config();

const { Translate } = require('@google-cloud/translate').v2;

const translator = new Translate();

async function translateHandler(text) {
    let [ translations ] = await translator.translate(text, 'en');

    return translations;
}

module.exports = translateHandler;