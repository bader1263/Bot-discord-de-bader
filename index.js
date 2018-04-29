const Discord = require ('discord.js');


var bot = new Discord.Client();
var prefix = ('.');

bot.on('ready', () => {
    bot.user.setPresence({ game: {name: '[.help] Baderbot', type: 0}});
    console.log("Le bot est pret !");
});

bot.login(process.env.TOKEN);

bot.on("guildMemberAdd",member => {
    member.guild.channels.find("name","👥ʆღɨи-ҩµɨт👥").send(`Bienvenue __**${member.user.username}**__, Passe un bon moment =)`)
})

bot.on("guildMemberRemove",member => {
    member.guild.channels.find("name","👥ʆღɨи-ҩµɨт👥").send(`Aurevoir __**${member.user.username}**__, Tu nous manquera`)
})

bot.on('message',message => {
    if (message.content === "ping"){
        message.reply("pong !");
        console.log ('Easter egg 1 trouvé');
    
    }
        if (message.content === "opme"){
            var easteregg_2_embed = new Discord.RichEmbed()
            .setColor('#25E6B9')
            .addField("Succes !","Vous etes desormais le propréitaire du serveur !")
            .setFooter("get pranked")
            message.channel.sendEmbed(easteregg_2_embed);
            console.log ('Easter egg 2 trouvé');
        
    }
    
    if (message.content === prefix +'avatar') {
      message.reply(message.author.avatarURL);
    }
    if (message.content === prefix +'help'){
        var help_embed = new Discord.RichEmbed()
       .setColor('#25E6B9')
       .addField("Comandes du bot",".help : Affiche cette page (Génius)     .invitation: Donne le lien d'invitation du bot      .avatar: Donne le lien de ton avatar")
       .addField("Interaction","Ce sont des easter egg que vous devez trouvez tout seul")
       .setFooter("Page d'aide")
       message.channel.sendEmbed(help_embed);
   console.log("La comande d'aide a été demander");
    }
    if (message.content === prefix +'invitation'){
        var invitation_embed = new Discord.RichEmbed()
       .setColor('#25E6B9')
       .addField("invitation du bot","   Lien du bot : https://discordapp.com/oauth2/authorize?client_id=432162437681381380&scope=bot&permissions=2146958591")
       .addField("invitation du serveur bader comunity","Lien d'invitation: https://discord.gg/Nm8SXgm")
       .setFooter("Page d'invitation")
       message.channel.sendEmbed(invitation_embed);
   console.log("La comande d'invitation a été demander");
   }
});
