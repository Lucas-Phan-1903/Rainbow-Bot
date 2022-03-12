const { prefix } = require('../../config.json')

module.exports = {
    name: 'help',
    cooldown: 3,
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
            .setDescription('Write `' + prefix + 'help [command]` to find out more about each command. This server prefix is `' + prefix + '`')
            .addField(':wrench: Moderation', '`ban` `kick` `timeout` `purge` `alt-check`')
            .addField(':joy: Fun & Misc', '`invite` `image` `quote` `autochat` `hello` `minecraftaccount`')
            .addField(':key: Utils', '`help` `git`')
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
            .addField('**Aliases:**', 'mcacc')
            .addField('**Cooldown:**', '2s')
            .addField('**Argument:**', `${prefix}minecraftaccount`)
            .addField('**Example:**', `${prefix}minecraftaccount`)

        const helpQuoteEmbed = new discord.MessageEmbed()
            .setColor('#ffed00')
            .setAuthor('Rainbow Help', 'https://i.imgur.com/OmjWTNO.png')
            .setTitle(`Command: ${prefix}quote`)
            .addField('**Description:**', 'Use API to find a quote')
            .addField('**Cooldown:**', '3s')
            .addField('**Argument:**', `${prefix}quote`)
            .addField('**Example:**', `${prefix}quote`)

        const helpTimeOutEmbed = new discord.MessageEmbed()
            .setColor('#ffed00')
            .setAuthor('Rainbow Help', 'https://i.imgur.com/OmjWTNO.png')
            .setTitle(`Command: ${prefix}timeout`)
            .addField('**Description:**', 'Timeout a user')
            .addField('**Cooldown:**', '10s')
            .addField('**Argument:**', `${prefix}timeout [User] [Time in seconds] [Reason no spaces]`)
            .addField('**Example:**', `${prefix}timeout @Mitelite 900 Shut_Up`)
        const helpGitEmbed = new discord.MessageEmbed()
            .setColor('#000000')
            .setAuthor('Rainbow Help', 'https://i.imgur.com/OmjWTNO.png')
            .setTitle(`Command: ${prefix}git`)
            .addField('**Description:**', 'Rainbow Open Source Code')
            .addField('**Cooldown:**', '3s')
            .addField('**Argument:**', `${prefix}git`)

// Statement and commands
        switch (command) {
            case 'kick':
                channel.send({ embeds: [helpKickEmbed] });
                break;
            case 'purge':
                channel.send({ embeds: [helpPurgeEmbed] });
                break;
            case 'invite':
                channel.send({ embeds: [helpInviteEmbed] });
                break;
            case 'image':
                channel.send({ embeds: [helpImageEmbed] });
                break;
            case 'hello':
                channel.send({ embeds: [helpHelloEmbed] });
                break;
            case 'minecraftaccount':case 'mcacc':
                channel.send({ embeds: [helpMcEmbed] });
                break;
            case 'quote':
                channel.send({ embeds: [helpQuoteEmbed] });
                break;
            case 'timeout':
                channel.send({ embeds: [helpTimeOutEmbed] });
                break;
            case 'git':
                channel.send({ embeds: [helpGitEmbed] })
                break;
            default:
                channel.send({ embeds: [helpEmbed] })
                break;
        }
    }
}