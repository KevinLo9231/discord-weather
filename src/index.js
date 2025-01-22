const { Client, IntentsBitField } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', () => {
    console.log('Bot is ready');
});

// client.on('messageCreate', (message) => {
    // if (message.content === 'ping') {
        // message.reply('pong');
    // }
// });

client.on('interactionCreate',(interaction) => {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === 'hey') {
        interaction.reply('hey');
    }
    if (interaction.commandName === '今天的天氣') {
        const city = interaction.options.get('city').value;

        axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001', {
            params: {
                Authorization: process.env.CWA_API_KEY,
            }
        })
            .then((response) => {
                console.log(response.data);
                const locationData = response.data.records.location;
                const cityData = locationData.find((data) => data.locationName === city);
                console.log(cityData);
                if (cityData) {
                    interaction.reply(
                        `今天${city}的天氣狀況: ${cityData.weatherElement[0].time[0].parameter.parameterName}\n` +
                        `降雨機率: ${cityData.weatherElement[1].time[0].parameter.parameterName}%\n` +
                        `溫度: ${cityData.weatherElement[2].time[0].parameter.parameterName}°C ~ ${cityData.weatherElement[4].time[0].parameter.parameterName}°C\n`
                    );
                } else {
                    interaction.reply('City not found');
                }
            })
            .catch((error) => {
                console.log(error);
                interaction.reply('Error fetching weather data');
            });
    }
    console.log(interaction);
});

client.login(process.env.BOT_TOKEN);
