const Discord = require('discord.js');
const prefix = "h!"
const token = require('./conf.json').token
const client = new Discord.Client();
require('discord-buttons')(client);
const fs = require('fs');





client.commands = new Discord.Collection();
const uyesema = require('./models/uye')
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }

});

//handler
const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./cmds/${file}`);

    client.commands.set(command.name, command);
}


client.login(token);
