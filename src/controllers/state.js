const Discord = require('discord.js');

import { getStatusByCountry } from '../services/apiRequest';
import { variables } from '../variables/variables';

module.exports = {
    name: 'state',
    description: 'Gives the updated status of the virus in countries',
    async execute(message, args) {
        let countryName;
        
        if (args[0]) {
            countryName = args[0].charAt(0).toUpperCase() + args[0].slice(1);
        }

        const apiData = await getStatusByCountry(countryName, args[1]);
        
        if (apiData.error) {
            message.channel.send(apiData.msg);
            return;
        }

        const { date, confirmed, deaths, recovered } = apiData.msg;

        const structuredMessage =   new Discord.MessageEmbed()
            .setColor(variables.primaryColor)
            .setTitle(`Status of ${apiData.country}`)
            .setURL(variables.mapUrl)
            .setAuthor(`Hello, ${message.author.username}`, `https://cdn.discord.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
            .setDescription('Information about your location')
            .addFields(
                { name: 'Confirmed Cases', value: confirmed },
                { name: 'Death Cases', value: deaths },
                { name: 'Recovered Cases', value: recovered }
            )
            .setTimestamp(new Date(date))
            .setFooter('Official information provided by CSSE', 'https://zoom.us/w_p/363402477/7de9a0a3-255f-4728-abaf-b9a8ed18789c.png');
            
        message.channel.send(structuredMessage);
    }
}