// Consts
const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const helpcmd = require('discord.js');
const PREFIX = 'c!';
const fs = require("fs");
const { isBuffer } = require('util');
const activities_list = [
    "with other bots [c!help]", 
    "with chats [c!help]",
    "with some code [c!help]", 
    "with JavaScript [c!help]" 
    ];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
});

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.")
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(prop.help.name, props);
    });
});

// Functions
function emoji (id) {
    return client.emojis.get(id).toString();
}

// Variables
var version = '1.0.1';

var servers = {};

// Bot activity
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //client.user.setActivity('out for dead chats [c!help]', {type: "WATCHING"});
  });


// Commands
client.on('message', message => {

    if (message.author.bot) return;
    if (message.content.indexOf(PREFIX) !== 0) return;

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        //here

       

    }

});

client.login(process.env.token);