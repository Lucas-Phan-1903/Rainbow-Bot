module.exports = {
    name: 'purge',
    cooldown: '10',
    description: 'Bulk delete message',
    execute(message) {
        const discord = require('discord.js')

        const prefix = '%'
        const args = message.content.slice(prefix.length).split(' ');
        msg = message.channel
        channel = message.channel
        member = message.member

        const wait = require("util").promisify(setTimeout);
        const amount = parseInt(args[1]);

        const errorNumEmbed = new discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription('That doesn\'t seem to be a valid number.')
        const minNMaxEmbed = new discord.MessageEmbed()
            .setColor('#00ffff')
            .setDescription('You need to input a number between 2 and 10000.')
        const pEmbed = new discord.MessageEmbed()
            .setColor('#90ee90')
            .setDescription(`You have purged ${amount} messages`)

        async function purge() {
            channel.bulkDelete(amount)
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