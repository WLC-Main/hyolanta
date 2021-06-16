module.exports = {
    name: "yardım",
    execute(message, args, client) {
        const fs = require('fs');
        const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));
        var arr = [];

        for (const file of commandFiles) {
            const command = require(`../cmds/${file}`);
           message.author.send(command.name)
        }



}

}