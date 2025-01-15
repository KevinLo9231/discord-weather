const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config();

// 註冊 discord slash commands
const commands = [
    {
        name: 'location',
        description: 'Replies with location',
        options: [
            {
                name: 'city',
                description: 'Select a city',
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [
                    {
                        name: 'Taipei',
                        value: 'Taipei'
                    },
                    {
                        name: 'Taoyuan',
                        value: 'Taoyuan'
                    },
                    {
                        name: 'Hsinchu',
                        value: 'Hsinchu'
                    },
                ],
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

(async () => {
    console.log('Started refreshing application (/) commands.');

    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();