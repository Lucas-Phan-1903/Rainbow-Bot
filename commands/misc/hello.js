module.exports = {
    name: 'hello',
    cooldown: 3,
    description: 'hi',
    execute(message) {
        message.channel.send('hi')
    }
}