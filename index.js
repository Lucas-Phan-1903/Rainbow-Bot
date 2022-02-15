const discord = require("discord.js")
const fs = require("fs")
require('dotenv').config()
const { prefix } = require("./config.json")

const client = new discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_PRESENCES"
    ]
})

client.commands = new discord.Collection();
client.cooldowns = new discord.Collection();
client.events = new discord.Collection();

['event_handler', 'command_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, discord);
})

const wait = require("util").promisify(setTimeout);

////on start
client.on("ready", async () => {
    //Presence Module
    while (true) {
        client.user.setActivity('your illegal actions', { type: 'WATCHING' });
        await wait(15000)
        client.user.setActivity('Rainbow', { type: 'PLAYING' });
        await wait(15000)
        client.user.setActivity(`${prefix}help | In Development`, { type: 'PLAYING' })
        await wait(15000)
    }
})

const {enableWelcomeModule} = require('./config.json')

// Welcome Module
if (enableWelcomeModule == true) {
    const welcomeChannelId = require('./config.json')

    client.on("guildMemberAdd", async (member) => {
        member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
    })
}

client.login(process.env.TOKEN)