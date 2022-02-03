module.exports = {
    check: (client,prefix,ownerid) => {
        client.on("messageCreate", message => {
            if (message.author.bot) return;
            if (message.author.guild) return;
            let msg = message.content.split(' ');
            if (msg[0].substring(0, prefix.length) == prefix) {
                let command = msg[0].substring(prefix.length, msg[0].length).toLowerCase();
                console.log(msg[0]);
                console.log(command);
                if (!client.commands.has(command) && !client.alias.has(command)) {
                    return;
                }
                if (client.commands.get(command.owneronly) == 1 && !message.author.id == ownerid) return;
                try {
                    if (client.commands.get(command))
                        client.commands.get(command).run(client, message, msg.join(msg[0]), message.author, prefix)
                    else
                        client.alias.get(command).run(client, message, msg.join(msg[0]), message.author, prefix)
                }
                catch (err) {
                    console.log(err)
                }
            }

        })
    }
}