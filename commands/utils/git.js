module.exports = {
    name: 'git',
    cooldown: 3,
    description: 'github repo',
    execute(message) {
        const discord = require('discord.js');
        author = message.author
        const avatar = author.displayAvatarURL({ format: 'png', dynamic: false })

        const gitEmbed = new discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Rainbow Source Code')
        .setThumbnail('https://imgur.com/p8rVI4a.png')
        .setDescription('[https://github.com/mitelite/rainbow-bot/](https://github.com/mitelite/rainbow-bot)')
        .setFooter(`${author.username}#${author.discriminator} has requested.`, `${avatar}`);

        message.channel.send({embeds: [gitEmbed]});
    }
}
