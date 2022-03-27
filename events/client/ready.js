module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        const wait = require("util").promisify(setTimeout);
        const {prefix} = require('../../config.json');

        console.log(`Logged in as ${client.user.tag}!`);

        async function presenceUpdate() {
                client.user.setActivity('your illegal actions', { type: 'WATCHING' });
                await wait(15000)
                client.user.setActivity('Rainbow', { type: 'PLAYING' });
                await wait(15000)
                client.user.setActivity(`${prefix}help | In Development`, { type: 'PLAYING' })
                await wait(15000)
        }

        presenceUpdate();
    },
}