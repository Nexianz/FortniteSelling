const Discord = require("discord.js");

const PREFIX = "?";
const StartupPrefix = "| Fortnite Selling City | "

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log(StartupPrefix + "Restarting Fortnite Selling City 1.0..");
    console.log(StartupPrefix + "Fortnite Selling City 1.0 restarted!");
    bot.user.setActivity("selly.gg/@Nexianz", {type: "PLAYING"});
});

bot.on('guildMemberAdd', member => {
    const joinrole = member.guild.roles.find('name', 'Member');
    member.addRole(joinrole);
    const joinchannel = member.guild.channels.find('name', '👋welcome👋');

    var welcomemsg = [
        
        "**[+]** " + member.user.toString(),
    ]

    joinchannel.send(welcomemsg);
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {

        case "help":
        var hjelp = [
            "**COMING SOON**",
        ]
        message.channel.send(hjelp);
        break;

        case "ping":
        message.channel.send("Pong!");
        break;

        case "kick":
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Wrong usage, please try ?kick (@user) (reason)");
        let kReason = args.join(" ").slice(27);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Error: You do not have permission to do this!");
        if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Error: You can't kick this person!");

        var kickembed = new Discord.RichEmbed()
        .setDescription("Kick")
        .setColor("0x00FFFF")
        .addField("Kicked", kUser)
        .addField("Kicked by", message.author)
        .addField("Reason", kReason);

        let kickChannel = message.guild.channels.find('name', "logs");
        if(!kickChannel) return message.channel.send("Could not find logs channel, contact an Admin");

        message.delete().catch();
        message.guild.member(kUser).kick();
        message.channel.send("***Successfully kicked " + kUser + "***");
        kickChannel.send(kickembed);
        break;

        const ban = "NDY4NDg1NTAzMjM5MzIzNjQ4.Dlyf3A.Xl1ewXpdxYJ5XJix-Lxv_Mx-O9c";
            
        case "ban":
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Wrong usage, please try ?ban (@user) (reason)");
        let bReason = args.join(" ").slice(26);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Error: You do not have permission to do this!");
        if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Error: You can't ban this person!");
    
        let banEmbed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("0x00FFFF")
        .addField("Banned", bUser)
        .addField("Banned by", message.author)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);

        let banChannel = message.guild.channels.find('name', "logs");
        if(!banChannel) return message.channel.send("Could not find logs channel, contact an Admin");
    
        message.delete().catch();
        message.guild.member(bUser).ban(bReason);
        message.channel.send("***Successfully banned " + bUser + "***");
        banChannel.send(banEmbed);
        break;

        case "mute":
        let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!mUser) return message.channel.send("Wrong usage, please try ?mute (@user) (reason)");
        let mReason = args.join(" ").slice(26);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Error: You do not have permission to do this!");
        if(mUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Error: You can't mute this person!");
    
        let muteEmbed = new Discord.RichEmbed()
        .setDescription("Mute")
        .setColor("0x00FFFF")
        .addField("Muted", mUser)
        .addField("Muted by", message.author)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", mReason);

        let muteChannel = message.guild.channels.find('name', "logs");
        if(!muteChannel) return message.channel.send("Could not find logs channel, contact an Admin");
    
        var muterole = mUser.guild.roles.find('name', 'Muted');

        message.delete().catch();
        mUser.addRole(muterole);
        message.channel.send("***Successfully muted " + mUser + "***");
        muteChannel.send(muteEmbed);
        break;

        case "unmute":
        let unmUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!unmUser) return message.channel.send("Wrong usage, please try ?unmute (@user) (reason)");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Error: You do not have permission to do this!");
    
        let unmuteEmbed = new Discord.RichEmbed()
        .setDescription("UnMute")
        .setColor("0x00FFFF")
        .addField("Unmuted by", message.author)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)

        let unmuteChannel = message.guild.channels.find('name', "logs");
        if(!unmuteChannel) return message.channel.send("Could not find logs channel, contact an Admin");
    
        var muterole = unmUser.guild.roles.find('name', 'Muted');

        message.delete().catch();
        mUser.removeRole(muterole);
        message.channel.send("***Successfully unmuted " + mUser + "***");
        unmuteChannel.send(unmuteEmbed);
        break;

        default:
        message.channel.send("Wrong usage, use ?help");
    }
});

bot.login(ban);
