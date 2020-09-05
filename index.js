// Consts
const Discord = require('discord.js');

const client = new Discord.Client();

const ytdl = require("ytdl-core");

const helpcmd = require('discord.js');

const PREFIX = '.';

const { isBuffer } = require('util');

const activities_list = [
    "with servers [.help]", 
    "with chats [.help]", 
    "with some code [.help]", 
    "with JavaScript [.help]"
    ];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
});

//Let


// Functions
function emoji (id) {
    return client.emojis.get(id).toString();
}

// Variables
var version = '1.0.1';

var servers = {};

var isReady = true;

// Bot activity
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`, 'Currently used in', client.guilds.size, 'servers');
    //client.user.setActivity('out for dead chats [c!help]', {type: "WATCHING"});
  });


// Commands
client.on('message', async message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case "help":
            const helpcmd = new Discord.RichEmbed()
            .setTitle('Commands:')
            .setDescription(':warning: WORK IN PROGRESS :warning: ')
            .addField('.helpmain', 'Shows you a list of the main commands Chatter has to offer')
            .addField('.helpfun', 'A list of some fun commands such as 8ball!')
            .addField('.helpinfo', 'List of useful commands for information')
            .setThumbnail('https://i.imgur.com/a8jqe4s.png')
            .setColor(0x85D7FA)
            .setTimestamp()
            .setFooter('patreon.com/chatterbot', 'https://i.imgur.com/1EKSIoz.png')
            message.channel.sendEmbed(helpcmd);
        break;

        case 'helpmain':
            const mainabout = new Discord.RichEmbed()
            .setTitle('Main commands of Chatter')
            .setDescription('These are the main commands that you can use with Chatter')
            .setColor(0x85D7FA)
            .setTimestamp()
            .setThumbnail("https://i.imgur.com/ncivXNx.png")
            .addField('.chat', 'Comes up with a conversation starter')
            .addField('.help', 'Shows you all command categories')
            .addField('.ping', 'How fast is Chatter?')
            message.channel.sendEmbed(mainabout);

        break;

        case 'helpinfo':
            const infoabout = new Discord.RichEmbed()
            .setTitle('Infomramtion Commands')
            .setDescription('These commands shows you information about a variety of elements')
            .setColor(0x85D7FA)
            .setTimestamp()
            .setThumbnail("https://i.imgur.com/zWMed1g.png")
            .addField('.info', 'Information about Chatter')
            .addField('.serverinfo', 'Information about the current server you are in')
            .addField('.userinfo', 'Shows info about you')
            .setFooter('patreon.com/chatterbot', 'https://i.imgur.com/1EKSIoz.png')
            message.channel.sendEmbed(infoabout);

        break;

        case 'helpfun':
            const funabout = new Discord.RichEmbed()
            .setTitle('Fun Commands')
            .setDescription('Fun commands for the whole server!')
            .setColor(0x85D7FA)
            .setTimestamp()
            .setThumbnail("https://i.imgur.com/hghSEYj.png")
            .addField('.8ball', 'Chatter will answer your questions!')
            message.channel.sendEmbed(funabout);

        break;

        case 'userinfo':
            const mecmd = new Discord.RichEmbed()
            .setTitle('About You:')
            .addField('Username:', message.author.username)
            .addField('Current Server:', message.guild.name)
            .addBlankField()
            .addField("ID:", message.author.id)
            .setColor(0x85D7FA)
            .setTimestamp()
            .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(mecmd);
        break;

        case 'serverinfo':
            const sicon = message.guild.iconURL
            const serverembed = new Discord.RichEmbed()
            .setDescription("Server Information:")
            .setColor("0x85D7FA")
            .setThumbnail(sicon)
            .addField("Server Name:", message.guild.name)
            .addField("Created On:", message.guild.createdAt)
            .addField("You Joined At:", message.member.joinedAt)
            .addField("Total Members:", message.guild.memberCount)
            .addField("Owner:", message.guild.owner)
            .addField("Verification Level:", message.guild.verificationLevel)
            message.channel.sendEmbed(serverembed);
        break;

        case 'info':
            const infocmd = new Discord.RichEmbed()
            .setTitle('<:Bot_Mascot:730808702650548326> Chatter <:Bot_Mascot:730808702650548326>')
            .setURL('')
            .addField('Chatter is a bot with the main purpose of reviving chats.', 'But the bot also have other cool features such as 8ball!')
            .addField('Chatterer was developed in 2020 by Polar', 'If you have any questions or want to report a bug contact me at Polar#3425')
            .setColor(0x85D7FA)
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/a8jqe4s.png')
            .setFooter('patreon.com/chatterbot', 'https://i.imgur.com/1EKSIoz.png')
            message.channel.sendEmbed(infocmd);
        break;

        case 'chat':
            let replies = ["PC or Console?", "What's your favourite game?", "Anime or manga?", "What is the worst advice you have given?", "What is the worst pickup line you have ever heard?", "If you could be famous, would you want to? Why?", "What are the top three things on your bucket list?", "Where do you see yourself in five years?", "What is your idea of the perfect day?", "Have you ever been stalked on social media?", "What was the last funny video you saw?", "What’s the most useful thing you own?", "What’s your favorite way to waste time?", "Do you have any pets? What are their names?", "What’s the best / worst thing about your work/school?", "If you could have any animal as a pet, what animal would you choose?", "What is the strangest dream you have ever had?", "Where do you spend most of your free time/day?", "How often do you stay up past 3 a.m.?", "What’s your favorite season? Why?", "What was the best period of your life so far? What do you think will be the best period of your entire life?", "What do you do to improve your mood when you are in a bad mood?", "What’s your favorite genre of movie?", "What is the most overrated movie?", "What was the last song you listened to?", "What song always puts you in a good mood?", "What is the longest plane trip you have taken?", "What is your favorite piece of technology that you own?", "What was the best invention of the last 50 years?", "Will technology save the human race or destroy it?", "What foods do you absolutely hate?", "If your mind were an island, what would it look like?", "Time freezes for everyone but you for one day. What do you do?", "A portal to another world opens in front of you. You don’t know how long it will stay open or if you’ll be able to get back after you go through. What do you do?"];

            let result = Math.floor((Math.random() * replies.length));
            let question = args.slice(1).join(" ");

            let chatembed = new Discord.RichEmbed()
            .setColor("0x85D7FA")
            .setTitle(replies[result]);

            message.channel.send(chatembed);

        break;

        case '8ball':
            if(!args[1]) return message.reply("Please ask a full question");
            let answers = ["Yes", "No", "I don't know", "Ask again later", "Maybe"];

            let results = Math.floor((Math.random() * answers.length));
            let questions = args.slice(1).join(" ");

            let ballembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("0x85D7FA")
            .addField("Question", questions)
            .addField("Answer", answers[results]);

            message.channel.send(ballembed);

        break;

        case 'ping':
            const msg = await message.channel.send(`:ping_pong:Pinging...`);

            msg.edit(`:ping_pong: Pong\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency${Math.round(client.ping)}ms`);

        break;

        //case 'kick':
        //    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        //    if(!kUser) message.channel.send("Can't find user");
        //    let kReason = args.join(" ").slice(22);
        //    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission for that");
        //    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot kick that user");

        //    let kickEmbed = new Discord.RichEmbed()
        //    .setTitle("Kick")
        //    .setColor("#e56b00")
        //    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
        //    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
        //    .addField("Kicked In", message.channel)
        //    .addField("Time", message.createdAt)
        //    .addField("Reason", kReason);

        //    let kickChannel = message.guild.channels.find(`name`, "incidents");
        //    if(!kickChannel) return message.channel.send("Can't find incidents channel");

        //    message.guild.member(kUser).kick(kReason);
        //    kickChannel.send(kickEmbed);
        //break;

        //case 'ban':
        //    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        //    if(!bUser) message.channel.send("Can't find user");
        //    let bReason = args.join(" ").slice(22);
        //    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission for that");
        //    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot ban that user");

        //    let banEmbed = new Discord.RichEmbed()
        //    .setTitle("Ban")
        //    .setColor("#bc0000")
        //    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
        //    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
        //    .addField("Banned In", message.channel)
        //    .addField("Time", message.createdAt)
        //    .addField("Reason", bReason);

        //    let banChannel = message.guild.channels.find(`name`, "incidents");
        //    if(!banChannel) return message.channel.send("Can't find incidents channel or permission to the channel");

        //    message.guild.member(bUser).ban(bReason);
        //    banChannel.send(banEmbed);
        //break;

        case "servers":
            const serverscmd = new Discord.RichEmbed()
            .setTitle(client.guilds.size)
            message.channel.sendEmbed(serverscmd);
        break;

        

    }

});

client.login(process.env.token);