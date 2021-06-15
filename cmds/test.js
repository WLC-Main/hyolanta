module.exports = {
    name:"dene",
    execute(message,args ) {
        const { MessageButton, MessageActionRow } = require('discord-buttons');
        const Discord = require('discord.js');
        const client = new Discord.Client();
        let button = new MessageButton()
            .setStyle('red')
            .setLabel('GOTTEN BAS!')
            .setID('click_to_function')

        message.channel.send('aaaaaaaa', button)
        client.on('clickButton', async (button) => {
            //... my code
            await button.reply.send('My message');
        });
    }
}