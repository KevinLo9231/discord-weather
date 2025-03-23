const { REST, Routes } = require('discord.js');
require('dotenv').config();

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

(async () => {
    try {
        const commandId = '1351171803791233089'; // 替換為您要刪除的指令 ID
        await rest.delete(Routes.applicationGuildCommand(process.env.CLIENT_ID, process.env.GUILD_ID, commandId));
        console.log(`成功刪除指令 ID: ${commandId}`);
    } catch (error) {
        console.error(error);
    }
})();


