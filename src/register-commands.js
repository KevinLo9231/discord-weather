const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config();

// 註冊 discord slash commands
const commands = [
    {
        name: '今天的天氣', // 改為小寫
        description: '今天的天氣狀況',
        options: [
            {
                name: 'city',
                description: 'Select a city',
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [
                    {
                        name: '宜蘭縣',
                        value: '宜蘭縣'
                    },
                    {
                        name: '花蓮縣',
                        value: '花蓮縣'
                    },
                    {
                        name: '臺北市',
                        value: '臺北市'
                    },
                    {
                        name: '新北市',
                        value: '新北市'
                    },
                    {
                        name: '桃園市',
                        value: '桃園市'
                    },
                    {
                        name: '臺中市',
                        value: '臺中市'
                    },
                    {
                        name: '臺南市',
                        value: '臺南市'
                    },
                    {
                        name: '高雄市',
                        value: '高雄市'
                    },
                    {
                        name: '基隆市',
                        value: '基隆市'
                    },
                    {
                        name: '新竹縣',
                        value: '新竹縣'
                    },
                    {
                        name: '新竹市',
                        value: '新竹市'
                    },
                    {
                        name: '嘉義市',
                        value: '嘉義市'
                    },
                    {
                        name: '苗栗縣',
                        value: '苗栗縣'
                    },
                    {
                        name: '彰化縣',
                        value: '彰化縣'
                    },
                    {
                        name: '南投縣',
                        value: '南投縣'
                    },
                    {
                        name: '雲林縣',
                        value: '雲林縣'
                    },
                    {
                        name: '嘉義縣',
                        value: '嘉義縣'
                    },
                    {
                        name: '屏東縣',
                        value: '屏東縣'
                    },
                    {
                        name: '臺東縣',
                        value: '臺東縣'
                    },
                    {
                        name: '澎湖縣',
                        value: '澎湖縣'
                    },
                    {
                        name: '金門縣',
                        value: '金門縣'
                    },
                    {
                        name: '連江縣',
                        value: '連江縣'
                    }
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