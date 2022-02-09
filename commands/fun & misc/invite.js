module.exports = {
    name: 'invite',
    cooldown: '5',
    description: 'Create Invite Link',
    execute(message) {
        channel.createInvite()
            .then(invite => channel.send(`Here! discord.gg/${invite.code}`))
            .catch(console.error)
    },
}