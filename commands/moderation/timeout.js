module.exports = {
    name: 'timeout',
    cooldown: 10,
    description: 'timeout user, advanced timeout',
    execute(message, prefix) {
        const discord = require('discord.js')

        const { Permissions } = require('discord.js')
	    const args = message.content.slice(prefix.length).split(' ');
	    msg = message.channel
	    channel = message.channel
	    member = message.member
        author = message.author
        const time = parseInt(args[2])

        if (!member.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS, true)) {
            return channel.send("`You don't have permission to execute this command!`");
        }

        //argsEmbed
        const argsEmbed = new discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`:x: You forgot the user you want to timeout. Args: ${prefix}timeout [User] [Time in seconds] [Reason no spaces]`)

        if (!message.mentions.users.size) {
            return channel.send({ embeds: [argsEmbed] })
        }

        //errorNumberEmbed
        const errorNumEmbed = new discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`:x: You forgot amount of time you want to timeout that user! Args: ${prefix}timeout [User] [Time in seconds] [Reason no spaces]`)

        //More embeds :)
        const noPermEmbed = new discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(':x: My role isn\'t high enough to moderate this user. Move the Rainbow role up above other roles.')

        //Define target and blah blah
        const TaggedUser = message.mentions.users.first();
        const Target = message.mentions.members.first();
        let toReason = args[3];

        if (!toReason) {
            toReason = " No reason has been given"
        }
        try {
            if (isNaN(time)) {
                return channel.send({ embeds: [errorNumEmbed] })
            } else {
                if (!Target.moderatable) {
                    return channel.send({ embeds: [noPermEmbed]})
                } else {
                    Target.timeout(time * 1000, toReason)
                    console.log(`${TaggedUser.username}#${TaggedUser.discriminator} was timeout-ed | ${toReason} by ${author.username}#${author.discriminator}`)

                    //timeout success embed
                    const toEmbed = new discord.MessageEmbed()
                        .setColor('#90ee90')
                        .setDescription(`:heavy_check_mark: **${TaggedUser.username}${TaggedUser.discriminator} was timeout-ed** | ${toReason}.`)

                    //send it
                    channel.send({ embeds: [toEmbed] });
                }
            }
        } catch (err) {
            console.log(err)
        }
    },
}