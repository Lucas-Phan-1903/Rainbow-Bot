const { prefix } = require('../../config.json')

module.exports = {
    name: 'help',
    cooldown: '3',
    description: 'list all commands inside the bot',
    execute(message, args) {
        const discord = require('discord.js')


        author = message.author
        channel = message.channel

        const helpEmbed = new discord.MessageEmbed()
            .setColor('#ffed00')
            .setAuthor('Rainbow Help', 'https://i.imgur.com/OmjWTNO.png')
            .setDescription(`Here is all Rainbow bot commands! This server prefix is **${prefix}**`)
            .addField(':wrench: Moderation', '`ban` `kick` `mute` `purge` `spy` `alt-check`')
            .addField(':joy: Fun & Misc', '`invite` `image` `quote` `autochat` `hello` `minecraftaccount`')
            .setThumbnail('https://i.imgur.com/OmjWTNO.png')
            .setTimestamp()
            .setFooter(`${author.username}#${author.discriminator} has requested.`, 'https://i.imgur.com/OmjWTNO.png')

            channel.send({ embeds: [helpEmbed] })
    }
}