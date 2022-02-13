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

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

const wait = require("util").promisify(setTimeout);

//on start
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

client.commands = new discord.Collection();
client.cooldowns = new discord.Collection();


const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    channel = message.channel
    msg = message.content

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

    //register commands
    if (command === 'kick') {
        client.commands.get('kick').execute(message);
    }
    if (command === 'purge') {
        client.commands.get('purge').execute(message);
    }
    if (command === 'invite') {
        client.commands.get('invite').execute(message);
    }
    if (command === 'help') {
        client.commands.get('help').execute(message);
    }
    if (command === 'minecraftaccount') {
        client.commands.get('minecraftaccount').execute(message);
    }
    if (command === 'image') {
        client.commands.get('image').execute(message);
    }
    if (command === 'hello') {
        client.commands.get('hello').execute(message);
    }
    if (command === 'quote') {
        client.commands.get('quote').execute(message);
    }
    if (command === 'timeout') {
        client.commands.get('timeout').execute(message)
    }
})

enableWelcomeModule = false

// Welcome Module
if (enableWelcomeModule == true) {
    const welcomeChannelId = require('./config.json')

    client.on("guildMemberAdd", async (member) => {
        member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
    })
}

client.login(process.env.TOKEN)