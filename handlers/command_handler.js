const fs = require('fs')

module.exports = (client, discord) => {
    const commandFolders = fs.readdirSync('./commands');

    for (const folder of commandFolders) {
    	var commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    	for (const file of commandFiles) {
    		const command = require(`../commands/${folder}/${file}`);
    		client.commands.set(command.name, command);
    	}
    }
}