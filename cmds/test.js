module.exports = {
    name:"buton",
    execute(message,args ) {
        const { MessageButton, MessageActionRow } = require('discord-buttons');
        const Discord = require('discord.js');
        const client = new Discord.Client();
        let button = new MessageButton()
            .setStyle('red')
            .setLabel('GOTTEN BAS!')
            .setID('basgote')

        message.channel.send('aaaaaaaa', button)

    }
}