module.exports = {
	name: 'kick',
	cooldown: '10',
	description: 'To kick a member.',
	execute(message) {
	        const discord = require('discord.js')

	        const prefix = '!'
	        const args = message.content.slice(prefix.length).split(' ');
	        msg = message.channel
	        channel = message.channel
	        member = message.member

            if (!member.roles.cache.has('940549637981483058')) {
                return channel.send("`You don't have permission to execute this command!`");
            }

            //args Embed
            const argsEmbed = new discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription('You forgot the user you want to kick! Arg: `%kick [User] [Reason]`')

            if (!message.mentions.users.size) {
            	return channel.send({ embeds: [argsEmbed] });
            }
            const TaggedUser = message.mentions.users.first();
            const Target = message.mentions.members.first();
            let kReason = args.join(" ").slice(27);

            if (!kReason) {
                kReason = " No Reason Has Given"
            }

            //noPermEmbed
            const noPermEmbed = new discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription('My role isn\'t high enough to moderate this user. Move the Rainbow role up above other roles.')

            if (Target.kickable == true) {
                Target.kick(kReason)
                            console.log(`${TaggedUser.username}#${TaggedUser.discriminator} was kicked |${kReason}`)

                            //kick embed
                            const kEmbed = new discord.MessageEmbed()
                                .setColor('#90ee90')
                                .setDescription(`**${TaggedUser.username}${TaggedUser.discriminator} was kicked** |${kReason}.`)

                            //send it
                            channel.send({ embeds: [kEmbed] });
            } else {
                return channel.send({ embeds: [noPermEmbed] })
            }
	},
};
