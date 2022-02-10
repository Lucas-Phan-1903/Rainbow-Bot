const discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'quote',
    cooldown: 3,
    description: 'Use API to generate a quote',
    execute(message) {

        author = message.author
        const avatar = author.displayAvatarURL({ format: 'png', dynamic: false })

        //get Quote
        function getQuote() {
          return fetch("https://zenquotes.io/api/random")
            .then(res => {
              return res.json()
              })
            .then(data => {
              return data[0]["q"] + " - " + data[0]["a"]
            })
        }

        getQuote().then(quote => {
            const quoteEmbed = new discord.MessageEmbed()
                .setColor('#ffed00')
                .setTitle('Your quote was generated')
                .setDescription(`${quote}`)
                .setFooter(`${author.username}#${author.discriminator} has requested.`, `${avatar}`)

            message.channel.send({ embeds: [quoteEmbed] })
        })
    },
}