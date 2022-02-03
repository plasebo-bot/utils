const fs = require("fs");
const { Collection } = require("discord.js");

module.exports = {
    getCommands: async (client) => {
        client.commands = new Collection();
        client.aliases = new Collection();
        const files = fs.readdirSync("./commands").filter(files => files.endsWith(".js"))
        for (const getFiles of files) {
            const pull = require(`../commands/${getFiles}`)
            client.commands.set(pull.name, pull)
            pull.alias.forEach((alias) => client.aliases.set(alias, pull))
            console.log(`Loading Command : ${pull.name}`)
        } 
    }
}