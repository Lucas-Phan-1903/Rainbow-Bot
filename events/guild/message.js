module.exports = {
    name: 'message',
    execute(message, client) {
        const {prefix} = require('../../config.json');
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        channel = message.channel
        msg = message.content
        const cmd = client.commands.get(command)

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
            message.reply("There was an error trying to execute this command!");
            console.log(err);
        }
    }
}