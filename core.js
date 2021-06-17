const Discord = require('discord.js');
const prefix = "h!"
const token = process.env.token
const client = new Discord.Client();
require('discord-buttons')(client);
const fs = require('fs');





client.commands = new Discord.Collection();
const uyesema = require('./models/uye')


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Hata var!');
    }

});

//handler
const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./cmds/${file}`);
    console.log(command.name + " çalışıyor")
    client.commands.set(command.name, command);
}
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}



client.on('clickButton', async (button) => {
    console.log(button.channel, 'kanalında butona basıldı!')

    switch(button.id){
        case 'basgote': button.reply.send("<@"+ button.clicker.member +">" + "'a götten basıldı!")
        break;
    }

});


client.login(token);
