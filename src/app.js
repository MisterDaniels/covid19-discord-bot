import { CovidBot } from './bot';

const bot = new CovidBot();

bot.client.on('ready', () => {
    console.log('COVID-19 Bot is ON');
});

bot.client.on('message', message => {
    let response = bot.messageHandler(bot.client, message);

    if (!response) { return }

    let { controller, msgProcessed, msgArgs } = response;

    controller.execute(msgProcessed, msgArgs);
});