import { CovidBot } from './bot';

const bot = new CovidBot();

bot.client.on('ready', () => {
    console.log('COVID-19 Bot is ON');
});

bot.client.on('message', async message => {
    let response = await bot.messageHandler(bot.client, message);

    if (!response) { return }

    let { controller, msgProcessed, msgArgs } = response;

    await controller.execute(msgProcessed, msgArgs);
});