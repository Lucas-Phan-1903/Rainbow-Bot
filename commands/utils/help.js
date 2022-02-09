const { prefix } = require('E:/Rainbow-Discord-Bot/config.json')

module.exports = {
    name: 'help',
    cooldown: '3',
    description: 'list all commands inside the bot',
    execute(message, args) {
        const discord = require('discord.js')

        channel = message.channel
        const helpEmbed = new discord.MessageEmbed()
            .setColor('#ffed00')
            .setAuthor('Rainbow Commands', 'https://i.imgur.com/OmjWTNO.png')
            .setDescription(`Here is all Rainbow bot commands! This server prefix is **${prefix}**`)
            .addField(':wrench: Moderation', '`ban` `kick` `mute` `purge` `spy` `alt-check`')
            .setThumbnail('https://i.imgur.com/OmjWTNO.png')

            channel.send({ embeds: [helpEmbed] })
    }
}