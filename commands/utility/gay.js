const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gay')
        .setDescription('Replies with Slay!'),
    async execute(interaction) {
        await interaction.reply('Slay!');
    },
};