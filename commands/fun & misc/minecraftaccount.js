module.exports = {
    name: 'minecraftaccount',
    cooldown: '2',
    description: 'Minecraft Account Generator Rick Roll',
    execute(message) {
        const discord = require('discord.js')
        channel = message.channel
        author = message.author
        const avatar = author.displayAvatarURL({ format: 'png', dynamic: false })

        const mcEmbed = new discord.MessageEmbed()
            .setColor('#008000')
            .setTitle('Your Minecraft account was generated!')
            .setDescription('Click here to claim your account in 3rd party website. [Claim!](https://bit.ly/3Jf5pNL)')
            .setImage('https://i.imgur.com/hQTDzor.png')
            .setFooter(`${author.username}#${author.discriminator} has requested.`, `${avatar}`)

        channel.send({ embeds: [mcEmbed] })
    },
}