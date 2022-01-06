const discord = require("discord.js")
require('dotenv').config()

const client = new discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    msg = message.content

    if (msg == "%hello") {
        message.reply("Hi!")
    }
})

client.login(process.env.TOKEN)