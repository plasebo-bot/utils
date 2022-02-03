module.exports = {
    check: (client,prefix) => {
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
                try {
                    if (client.commands.get(command)) {
                        let permLevel = client.commands.get(command).permLevel;
                        if (permLevel == 0) {
                            client.commands.get(command).run(client, message, msg.join(msg[0]), message.author, prefix)
                        }
                        else if (permLevel == 1 && message.member.permissions.has("MESSAGE_DELETE")) {
                            client.commands.get(command).run(client, message, msg.join(msg[0]), message.author, prefix)
                        }
                        else if (permLevel == 2 && message.member.permissions.has("KICK_MEMBERS")) {
                            client.commands.get(command).run(client, message, msg.join(msg[0]), message.author, prefix)
                        }
                        else if (permLevel == 3 && message.member.permissions.has("BAN_MEMBERS")) {
                            client.commands.get(command).run(client, message, msg.join(msg[0]), message.author, prefix)
                        }
                        else if (permLevel == 4 && message.member.permissions.has("ADMINISTRATOR")) {
                            client.commands.get(command).run(client, message, msg.join(msg[0]), message.author, prefix)
                        }
                        else {
                            return;
                        }
                    }
                    else if (client.alias.get(command)) {
                        let permLevel = client.alias.get(command).permLevel;
                        if (permLevel == 0) {
                            client.alias.get(command).run(client, message, msg.join(msg[0]), message.author, prefix)
                        }
                        else if (permLevel == 1 && message.member.permissions.has("MESSAGE_DELETE")) {
                            client.alias.get(command).run(client, message, msg.join(msg[0]), message.author, prefix)
                        }
                        else if (permLevel == 2 && message.member.permissions.has("KICK_MEMBERS")) {
                            client.alias.get(command).run(client, message, msg.join(msg[0]), message.author, prefix)
                        }
                        else if (permLevel == 3 && message.member.permissions.has("BAN_MEMBERS")) {
                            client.alias.get(command).run(client, message, msg.join(msg[0]), message.author, prefix)
                        }
                        else if (permLevel == 4 && message.member.permissions.has("ADMINISTRATOR")) {
                            client.alias.get(command).run(client, message, msg.join(msg[0]), message.author, prefix)
                        }
                        else {
                            return;
                        }
                    }
                    else {
                        return;
                    }
                    
                }
                catch (err) {
                    console.log(err)
                }
            
            }
        })
    }
}
