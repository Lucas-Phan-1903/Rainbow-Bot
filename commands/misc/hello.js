module.exports = {
    name: 'hello',
    cooldown: 3,
    description: 'hi',
    usage: 'hello',
    example: 'hello',
    execute(message) {
        message.channel.send('hi')
    }
}