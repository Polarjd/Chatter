// Consts
const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const helpcmd = require('discord.js');
const PREFIX = 'c!';
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
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case "help":
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
        break;

        case 'help moderation':
            const modcmd = new Discord.RichEmbed()
            .setTitle('Moderation with Chatter')
            .setDescription('You need to create a channel called "Incidents" for Chatter to log all moderation actions.')
            .setColor(0x85D7FA)
            .setTimestamp()
            .setThumbnail("https://i.imgur.com/f2DMrTX.png")
            .addField('c!kick', 'Kick a specified member')
            .addField('c!ban', 'Ban a specified member')
            message.channel.sendEmbed(modcmd);
        break;

        case 'help main':
            const maincmd = new Discord.RichEmbed()
            .setTitle('Main commands of Chatter')
            .setDescription('These are the main commands that you can use with Chatter')
            .setColor(0x85D7FA)
            .setTimestamp()
            .setThumbnail("https://i.imgur.com/yORSGJ9.png")
            .addField('c!chat', 'Comes up with a conversation starter')
            .addField('c!help', 'Shows you all command categories')
            message.channel.sendEmbed(maincmd);

        break;

        case 'me':
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
            .addField('Chatter is a bot with the main purpose of reviving chats.', 'but the bot also have other cool features such as 8ball!')
            .addField('Chatterer was developed in 2020 by Polarbeards', 'If you have any questions or want to report a bug contact me at Polarbeards#3425')
            .setColor(0x85D7FA)
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/BsHKnY4.jpg')
            message.channel.sendEmbed(infocmd);
        break;

        case 'chat':
            let replies = ["What is the worst advice you have given?", "What is the worst pickup line you have ever heard?", "If you could be famous, would you want to? Why?", "What are the top three things on your bucket list?", "Where do you see yourself in five years?", "What is your idea of the perfect day?", "Have you ever been stalked on social media?", "What was the last funny video you saw?", "What’s the most useful thing you own?", "What’s your favorite way to waste time?", "Do you have any pets? What are their names?", "What’s the best / worst thing about your work/school?", "If you could have any animal as a pet, what animal would you choose?", "What is the strangest dream you have ever had?", "Where do you spend most of your free time/day?", "How often do you stay up past 3 a.m.?", "What’s your favorite season? Why?", "What was the best period of your life so far? What do you think will be the best period of your entire life?", "What do you do to improve your mood when you are in a bad mood?", "What’s your favorite genre of movie?", "What is the most overrated movie?", "What was the last song you listened to?", "What song always puts you in a good mood?", "What is the longest plane trip you have taken?", "What is your favorite piece of technology that you own?", "What was the best invention of the last 50 years?", "Will technology save the human race or destroy it?", "What foods do you absolutely hate?", "If your mind were an island, what would it look like?", "Time freezes for everyone but you for one day. What do you do?", "A portal to another world opens in front of you. You don’t know how long it will stay open or if you’ll be able to get back after you go through. What do you do?"];

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

        case 'kick':
            let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!kUser) message.channel.send("Can't find user");
            let kReason = args.join(" ").slice(22);
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.send("You do not have permission for that");
            if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot kick that user");

            let kickEmbed = new Discord.RichEmbed()
            .setTitle("Kick")
            .setColor("#e56b00")
            .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
            .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Kicked In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", kReason);

            let kickChannel = message.guild.channels.find(`name`, "incidents");
            if(!kickChannel) return message.channel.send("Can't find incidents channel");

            message.guild.member(kUser).kick(kReason);
            kickChannel.send(kickEmbed);
        break;

        case 'ban':
            let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!bUser) message.channel.send("Can't find user");
            let bReason = args.join(" ").slice(22);
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.send("You do not have permission for that");
            if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot ban that user");

            let banEmbed = new Discord.RichEmbed()
            .setTitle("Ban")
            .setColor("#bc0000")
            .addField("Banned User", `${bUser} with ID ${bUser.id}`)
            .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Banned In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", bReason);

            let banChannel = message.guild.channels.find(`name`, "incidents");
            if(!banChannel) return message.channel.send("Can't find incidents channel or permission to the channel");

            message.guild.member(bUser).ban(bReason);
            banChannel.send(banEmbed);
        break;

       

    }

});

client.login(process.env.token);