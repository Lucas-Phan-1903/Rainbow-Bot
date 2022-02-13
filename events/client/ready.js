module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        const {enableWelcomeModule} = require('../../config.json')
        const wait = require("util").promisify(setTimeout);

        async function on() {
            console.log(`Logged in as ${client.user.tag}...`)
            await wait (20)
            console.log("Started Presence Modules...")
            await wait (20)
            console.log('Welcome Module Enable: ' + enableWelcomeModule)
            await wait (50)
            console.log('Successfully load up Rainbow Discord Bot!')
        }

        on()
    },
}