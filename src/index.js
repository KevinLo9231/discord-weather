const { Client, IntentsBitField } = require('discord.js');
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

client.on('interactionCreate', (interaction) => {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === 'hey') {
        interaction.reply('hey');
    }
    if (interaction.commandName === 'location') {
        const city = interaction.options.get('city').value;
        interaction.reply('You selected ' + city);
    }
    console.log(interaction);
});

client.login(process.env.BOT_TOKEN);
