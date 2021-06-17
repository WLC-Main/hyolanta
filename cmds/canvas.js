module.exports = {
    name: "canvas",
   async execute(message, args) {
       const { registerFont, createCanvas } = require('canvas')
       registerFont('./font.otf', { family: 'Manrope' })

const sema = require('../models/uye')
        const Discord = require('discord.js');
        const Canvas = require('canvas');

        const client = new Discord.Client();
let user = message.mentions.members.first() || message.member
       const canvas = Canvas.createCanvas(900, 600);
        const context = canvas.getContext('2d');
       const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'png' }));


        const background =  await Canvas.loadImage('https://cdna.artstation.com/p/assets/images/images/012/548/022/large/richard-wright-mtg-vibrant-renewel.jpg');
sema.findOne({uid: user.id}, ((error, data) => {

if (!data.uid) {
    let oyuncu = new sema({
        uid: user.id,
        para: 0,
        work: "İşsiz",
        can: 100,
        arenaticket: 0,
        monsterkills: 0,
        din: "Yeminsiz",
        premium: 0,
        durum: 1
    }) }

    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.drawImage(avatar, 34, 282, 150, 150 )
    context.font = '60px manrope'
    context.fillStyle = '#ffffff';
    context.fillText(data.work,380,562, 100)
    context.fillText(data.can,374,590, 100)
    context.fillText(data.arenaticket,551,150, 100)
    context.fillText(data.din,378,560, 100)
    context.fillText(data.para,379,570, 100)
    context.fillText(data.monsterkills,540,150, 100)
    context.fillText(data.premium,400,534, 100)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'emmeligommeli.jpg');

    message.channel.send(attachment);


}))



    }
}