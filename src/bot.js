import { messageHandler } from './messageHandler';
import { clientProcessor } from './clientProcessor';
import { config } from './config';

const CovidBot = class CovidBot {
    constructor() {
        this.client = clientProcessor(config.token);
        this.messageHandler = messageHandler;
    }
}

export { CovidBot }