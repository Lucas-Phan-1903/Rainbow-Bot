module.exports = {
    name: 'image',
    cooldown: '5',
    description: 'use API to create random image',
    execute(message) {
        const discord = require('discord.js')
        channel = message.channel
        author = message.author
        const avatar = author.displayAvatarURL({ format: 'png', dynamic: false })

        const iEmbed = new discord.MessageEmbed()
            .setColor('#00ffff')
            .setTitle('Image Generator')
            .setDescription('Here is your image.')
            .setImage('https://picsum.photos/200/300')
            .setFooter(`${author.username}#${author.discriminator} has requested.`, `${avatar}`)

        channel.send({ embeds: [iEmbed] })
    },
}