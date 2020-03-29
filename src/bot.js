import { messageHandler } from './messageHandler';
import { processClient } from './clientProcessor';
import { config } from './config';

const CovidBot = class CovidBot {
    constructor() {
        this.client = processClient(config.token);
        this.messageHandler = messageHandler;
    }
}

export { CovidBot }