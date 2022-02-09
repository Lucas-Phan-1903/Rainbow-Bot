module.exports = {
    name: 'purge',
    cooldown: '10',
    description: 'Bulk delete message',
    execute(message) {
        const discord = require('discord.js')

        const { prefix } = require("E:/Rainbow-Discord-Bot/config.json")
        const args = message.content.slice(prefix.length).split(/ +/);
        msg = message.channel
        channel = message.channel
        member = message.member
        author = message.author

        const wait = require("util").promisify(setTimeout);
        const amount = parseInt(args[1]);

        const errorNumEmbed = new discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`You forgot how many messages you want to purge! Arg: ${prefix}purge [amount of messages]`)
        const minNMaxEmbed = new discord.MessageEmbed()
            .setColor('#00ffff')
            .setDescription('You need to input a number between 2 and 10000.')
        const pEmbed = new discord.MessageEmbed()
            .setColor('#90ee90')
            .setDescription(`You have purged ${amount} messages`)

        async function purge() {
            channel.bulkDelete(amount)
            console.log(`${author.username}#${author.discriminator} has purged ${amount} messages.`)
            channel.send({ embeds: [pEmbed] })
            await wait(0.1)
            channel.bulkDelete(1)
        }

        if (isNaN(amount)) {
            return channel.send({ embeds: [errorNumEmbed] })
        } else if (amount < 2 || amount > 10000) {
            channel.send({ embeds: [minNMaxEmbed] });
        } else {
            purge();
        }
    },
}