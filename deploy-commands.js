require('dotenv').config()
const fs = require("fs")
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const clientId = process.env.CLIENT_ID

const commandFolders = fs.readdirSync('./commands');

var commands = [];

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		var commandname = file.replace(".js", "")
		var slashcommand = new SlashCommandBuilder().setName(commandname).setDescription(commandname);
		commands.push(slashcommand);
	}
}

commands = commands.map(command => JSON.stringify(command));

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
