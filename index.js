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


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity('your illegal actions', { type: 'WATCHING' });
    
})

client.on("messageCreate", (message) => {
    msg = message.content

    if (msg == "%hello") {
        message.reply("Hi!")
    }
})

const welcomeChannelId = "688236695950327826"

client.on("guildMemberAdd", async (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`
    })
})

client.login(process.env.TOKEN)