const Discord = require("discord.js");

module.exports.run = async(bot, Message, args) => {
    const helpcmd = new Discord.RichEmbed()
            .setTitle('Commands:')
            .setDescription(':warning: WORK IN PROGRESS :warning: ')
            .addField('c!help', 'This message with a list of all commands')
            .addField('c!chat', 'Comes up with a conversation starter')
            .addField('c!8ball', 'Chatter will answer your questions!')
            .addField('c!info', 'Information about Chatter')
            .addField('c!me', 'Shows info about you')
            .addField('c!serverinfo', 'Information about the current server you are in')
            .addField('c!help main', 'Shows you a list of the main commands Chatter has to offer')
            .addField('c!help fun', 'A list of some fun commands such as 8ball and Truth Or Dare')
            .addField('c!help moderation', 'Shows you information about moderation commands')
            .addField('c!help info', 'List of useful commands for information')
            .setThumbnail('https://i.imgur.com/A6F2b0J.png')
            .setColor(0x85D7FA)
            .setTimestamp()
            .setFooter('Made and developed by Polarbeards', 'https://i.imgur.com/0e1XxhT.jpg?1')
            message.channel.sendEmbed(helpcmd);
}

module.exports.help = {
    name: "help"
}
