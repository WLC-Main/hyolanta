module.exports = {
    name: "yardım",
    execute(message, args, client) {
        const fs = require('fs');
        const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));
        var emptystr = "";
        var nextline = "\n";
        var endstr = ""
        for (const file of commandFiles) {
            const command = require(`../cmds/${file}`);
            emptystr = emptystr + command.name;
            emptystr = emptystr + nextline;
            var res = emptystr.slice(0, -1)
        }

        message.author.send(res )


    }

}