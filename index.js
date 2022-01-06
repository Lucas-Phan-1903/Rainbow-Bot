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
    const talkedRecently = new Set();

    if (talkedRecently.has(message.author.id)) {
        msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {

        if (msg == "%hello") {
           message.reply("Hi!")
        }
        if (msg == "%help") {
          message.reply({
              content: "In Development, Update soon..."
            })
        }

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
       talkedRecently.delete(message.author.id);
     }, 60000);
    }
})

//welcome module
const welcomeChannelId = "688236695950327826"

client.on("guildMemberAdd", async (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`
    })
})

client.login(process.env.TOKEN)