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

//msg commands
client.on("messageCreate", (message) => {
    msg = message.content

    if (msg == "%hello") {
          message.reply("Hi!")
          .then()
          console.log(`has executed`)
    }

    if (msg == "%help") {
        message.reply({
            content: "In Development, Update soon..."
        })
        console.log(msgAuthor)
    }
})

//welcome module (disabled because errors)
// const welcomeChannelId = "688236695950327826"

// client.on("guildMemberAdd", async (member) => {
//     member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
// })

client.login(process.env.TOKEN)