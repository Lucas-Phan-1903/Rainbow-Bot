const discord = require("discord.js")
require('dotenv').config()

const client = new discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_PRESENCES"
    ]
})

const wait = require("util").promisify(setTimeout);

//on start
client.on("ready", async () => {
    console.log(`Logged in as ${client.user.tag}`)
    //presence module
    console.log("Started Presence Modules")
    while (true) {
        client.user.setActivity('your illegal actions', { type: 'WATCHING' });
        await wait(15000)
        client.user.setActivity('Rainbow', { type: 'PLAYING' });
        await wait(15000)
        client.user.setActivity('%help | In Development', { type: 'PLAYING' })
        await wait(15000)
    }
})

//Commands
client.on("messageCreate", (message) => {
    const prefix = "%"
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    msg = message.content
    channel = message.channel
    member = message.member

    if (command === 'kick') {
        if (!member.roles.cache.has('940549637981483058')) {
            return message.reply("`You don't have permission to execute this command!`");
        }
        if (!message.mentions.users.size) {
        	return message.reply('`You forgot the user you want to kick! Arg: %kick [User] [Reason]`');
        }
        const TaggedUser = message.mentions.users.first();
        const Target = message.mentions.members.first();
        let kReason = args.join(" ").slice(22);

        Target.kick('Testing')
        console.log(kReason)

    }
    if (msg == "%invite") {
        channel.createInvite()
            .then(invite => message.reply(`Here! discord.gg/${invite.code}`))
            .catch(console.error)
    }
})

// welcome module (disabled because errors)
 const welcomeChannelId = "688236695950327826"

 client.on("guildMemberAdd", async (member) => {
     member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
 })

client.login(process.env.TOKEN)