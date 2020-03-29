import { config } from './config';

import translateHandler from './utils/translateHandler';

const messageHandler = async (client, message) => {
    
    if (!message.content.startsWith(config.prefix) || message.author.bot) {
        return null;
    }

    let args = message.content.slice(config.prefix.length).split(' ');
    let controllerName = args.shift().toLowerCase();

    let controllerNameTranslated = await translateHandler(controllerName);

    let controller = client.controllers.get(controllerNameTranslated) ||
        client.controllers.find(ctr => ctr.aliases &&
            ctr.aliases.includes(controllerNameTranslated));

    if (!controller) { return null };

    let response = {
        controller: controller,
        msgProcessed: message,
        msgArgs: args
    };

    return response;
}

export { messageHandler }