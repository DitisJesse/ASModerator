const Discord = require ("discord.js");
const client = new Discord.Client();
const settings = require ("./settings.json");
client.login(settings.token);


client.on('message', message => {
    if(message.content == "as!test") {
        message.reply('De bot werkt!');
    }
    if(message.content == "as!help") {
        message.reply('=> Gebruik as!test');
        message.reply('=> Gebruik as!staff');
    }
    if(message.content == "as!staff") {
        message.reply('Discord eigenaren: DitisJesse, iCorne & Sr. Admin: ReddiamondYT')
    }

    });

    
    