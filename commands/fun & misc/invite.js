module.exports = {
    name: 'invite',
    cooldown: '5',
    description: 'Create Invite Link',
    execute(message) {
        const discord = require('discord.js')
        author = message.author
        const avatar = author.displayAvatarURL({ format: 'png', dynamic: false })

        channel.createInvite()
            .then(invite => {
                const invEmbed = new discord.MessageEmbed()
                    .setColor('#ffff00')
                    .setTitle('Your server invite link')
                    .setDescription(`Your server invite link: discord.gg/${invite.code}`)
                    .setFooter(`${author.username}#${author.discriminator} has requested.`, `${avatar}`)

                message.channel.send({ embeds: [invEmbed] })
                })
            .catch(console.error)
    },
}