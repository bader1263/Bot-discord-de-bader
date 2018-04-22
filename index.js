const Discord = require ('discord.js');
const express = require ('express');
const app = express();

//Paramètres heroku
app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function(){
    console.log(`Le bot fonctionne sur le port ${app.get('port')}`);
})

var bot = new Discord.Client();
var prefix = ('.');

bot.on('ready', () => {
    bot.user.setPresence({ game: {name: '.help Baderbot', type: 0}});
    console.log("Le bot est pret !");
});

bot.login('NDMyMTYyNDM3NjgxMzgxMzgw.Dbu6Aw.MSg1Ve2plgtqOUkF5tNsMztvoiY');

bot.on("guildMemberAdd",member => {
    member.guild.channels.find("name","👥ʆღɨи-ҩµɨт👥").send(`Bienvenue ${member.user.username}, Passe un bon moment =)`)
})

bot.on("guildMemberRemove",member => {
    member.guild.channels.find("name","👥ʆღɨи-ҩµɨт👥").send(`Aurevoir ${member.user.username}, Tu nous manquera`)
})

bot.on('message',message => {
    if (message.content === "ping"){
        message.reply("pong !");
        console.log ('Easter egg 1 trouvé');
    
    }
    if (message.content === prefix +'help'){
        var help_embed = new Discord.RichEmbed()
       .setColor('#25E6B9')
       .addField("Comandes du bot",".help : Affiche cette page (Génius)             .invitation: Donne le lien d'invitation du bot")
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
