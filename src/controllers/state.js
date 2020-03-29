const Discord = require('discord.js');

import { variables } from '../variables/variables';

module.exports = {
    name: 'state',
    description: 'Gives the updated status of the virus in countries',
    execute(message, args) {
        console.log(message);
        console.log(args);

        const structuredMessage =   new Discord.MessageEmbed()
            .setColor(variables.primaryColor)
            .setTitle('Status of United States')
            .setURL(variables.mapUrl)
            .setAuthor(`Hello, ${message.author.username}`, `https://cdn.discord.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`);

        message.channel.send(structuredMessage);
    }
}