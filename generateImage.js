const canvas = require("canvas")
const discord = require("discord.js")

//constants
const bg = "https://imgur.com/TTaI0Gs"
const dim = {
    height: 675,
    weight: 1200,
    margin: 50
}

const av = {
    size: 256,
    x: 480,
    y: 170
}

//draw image function
const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false, size: av.size})

    const Canvas = canvas.createCanvas(dim.weight, dim.height)
    const ctx = canvas.getcontext("2d")

    const bgimg = await canvas.loadImage(bg)
    ctx.drawImage(bgimg, 0, 0)

    //draw shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)

    const avimg = await canvas.loadImage(avatarURL)
    ctx.save

    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

    const attachment = new discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}

module.exports = generateImage