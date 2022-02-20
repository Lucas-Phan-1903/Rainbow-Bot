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

client.on("messageCreate", message => {
    const {prefix} = require('./config.json');
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    channel = message.channel
    msg = message.content
    const cmd = client.commands.get(command) || client.commands.find(cm => cm.aliases && cm.aliases.includes(command));

    //Cooldown module
    const { cooldowns } = client;

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            const cooldownEmbed = new discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`You are a bit quickly there. Please wait ${timeLeft.toFixed(1)} before using ${prefix}${command}`)
            return message.reply({ embeds: [cooldownEmbed]});
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try{
        cmd.execute(message);
    } catch (err){
        message.reply("`There was an error trying to execute this command!`");
        console.log(err);
    }
})

const {enableWelcomeModule} = require('./config.json')

// Welcome Module
try {
    if (enableWelcomeModule == true) {
        const welcomeChannelId = require('./config.json')

        client.on("guildMemberAdd", async (member) => {
            member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
        })
    }
} catch (err) {
    console.log(err)
}

client.login(process.env.TOKEN)