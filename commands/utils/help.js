const { prefix } = require('../../config.json')

module.exports = {
    name: 'help',
    cooldown: '3',
    description: 'list all commands inside the bot',
    execute(message) {
        const discord = require('discord.js')
        const args = message.content.slice(prefix.length).split(/ +/);

        author = message.author
        channel = message.channel
        const avatar = author.displayAvatarURL({ format: 'png', dynamic: false })
        command = args[1]

        //Create Embeds
        const helpEmbed = new discord.MessageEmbed()
            .setColor('#ffed00')
            .setAuthor('Rainbow Help', 'https://i.imgur.com/OmjWTNO.png')
            .setDescription(`Want to know more about each commands, write ${prefix}help [command]. This server prefix is **${prefix}**`)
            .addField(':wrench: Moderation', '`ban` `kick` `mute` `purge` `spy` `alt-check`')
            .addField(':joy: Fun & Misc', '`invite` `image` `quote` `autochat` `hello` `minecraftaccount`')
            .setThumbnail('https://i.imgur.com/OmjWTNO.png')
            .setTimestamp()
            .setFooter(`${author.username}#${author.discriminator} has requested.`, `${avatar}`)

        const helpKickEmbed = new discord.MessageEmbed()
            .setColor('#ffed00')
            .setAuthor('Rainbow Help', 'https://i.imgur.com/OmjWTNO.png')
            .setTitle(`Command: ${prefix}kick`)
            .addField('**Description:**', 'Kick a member')
            .addField('**Cooldown:**', '10s')
            .addField('**Argument:**', `${prefix}kick [user] [reason]`)
            .addField('**Example:**', `${prefix}kick @Mitelite Dumb`)

        const helpPurgeEmbed = new discord.MessageEmbed()
            .setColor('#ffed00')
            .setAuthor('Rainbow Help', 'https://i.imgur.com/OmjWTNO.png')
            .setTitle(`Command: ${prefix}purge`)
            .addField('**Description:**', 'Bulk Delete Messages')
            .addField('**Cooldown:**', '10s')
            .addField('**Argument:**', `${prefix}purge [amount of messages]`)
            .addField('**Example:**', `${prefix}purge 10`)

        const helpInviteEmbed = new discord.MessageEmbed()
            .setColor('#ffed00')
            .setAuthor('Rainbow Help', 'https://i.imgur.com/OmjWTNO.png')
            .setTitle(`Command: ${prefix}invite`)
            .addField('**Description:**', 'Generate server pernament invite')
            .addField('**Cooldown:**', '5s')
            .addField('**Argument:**', `${prefix}invite`)
            .addField('**Example:**', `${prefix}invite`)

        const helpImageEmbed = new discord.MessageEmbed()
            .setColor('#ffed00')
            .setAuthor('Rainbow Help', 'https://i.imgur.com/OmjWTNO.png')
            .setTitle(`Command: ${prefix}image`)
            .addField('**Description:**', 'Use API to create an image')
            .addField('**Cooldown:**', '5s')
            .addField('**Argument:**', `${prefix}image`)
            .addField('**Example:**', `${prefix}image`)

        const helpHelloEmbed = new discord.MessageEmbed()
            .setColor('#ffed00')
            .setAuthor('Rainbow Help', 'https://i.imgur.com/OmjWTNO.png')
            .setTitle(`Command: ${prefix}hello`)
            .addField('**Description:**', 'Hi')
            .addField('**Cooldown:**', '3s')
            .addField('**Argument:**', `${prefix}hello`)
            .addField('**Example:**', `${prefix}hello`)

        const helpMcEmbed = new discord.MessageEmbed()
            .setColor('#ffed00')
            .setAuthor('Rainbow Help', 'https://i.imgur.com/OmjWTNO.png')
            .setTitle(`Command: ${prefix}minecraftaccount`)
            .addField('**Description:**', 'Generate Minecraft Account I guest?')
            .addField('**Cooldown:**', '2s')
            .addField('**Argument:**', `${prefix}minecraftaccount`)
            .addField('**Example:**', `${prefix}minecraftaccount`)

// Statement and commands
        if (command === 'kick') {
            channel.send({ embeds: [helpKickEmbed] })
        } else if (command === 'purge') {
            channel.send({ embeds: [helpPurgeEmbed] })
        } else if (command === 'invite') {
            channel.send({ embeds: [helpInviteEmbed] })
        } else if (command === 'image') {
            channel.send({ embeds: [helpImageEmbed] })
        } else if (command === 'hello') {
            channel.send({ embeds: [helpHelloEmbed] })
        } else if (command === 'minecraftaccount') {
            channel.send({ embeds: [helpMcEmbed] })
        } else {channel.send({ embeds: [helpEmbed] })}

    }
}