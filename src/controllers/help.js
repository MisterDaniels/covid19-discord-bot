const Discord = require('discord.js');

import { getLastUpdate } from '../services/apiRequest';
import { variables } from '../variables/variables';

module.exports = {
    name: 'help',
    description: 'Give a list of commands',
    async execute(message, args) {
        const structuredMessage = new Discord.MessageEmbed()
            .setColor(variables.primaryColor)
            .setTitle(variables.applicationTitle)
            .setURL(variables.applicationUrl)
            .setDescription(variables.applicationDescription)
            .setThumbnail(variables.applicationImage)
            .addField('The bot can translate all your commands', 'Give it a try!')
            .addFields(
                { name: 'Command to give a list of commands for the bot', value: '!help' },
                { name: 'Command to get a the state of the virus', value: '!state', inline: true},
                { name: '| parameters', value: '-- Country Name \n -- Date', inline: true }
            )
            .setTimestamp(new Date(await getLastUpdate()))
            .setFooter('Official information provided by CSSE', 'https://zoom.us/w_p/363402477/7de9a0a3-255f-4728-abaf-b9a8ed18789c.png');
        
        message.channel.send(structuredMessage);
    }
}