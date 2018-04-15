const Discord = require ('discord.js');

var bot = new Discord.Client();
var prefix = ('.');

bot.on('ready', () => {
    bot.user.setPresence({ game: {name: '.help Baderbot', type: 0}});
    console.log("Le bot est pret !");
});

bot.login('NDMyMTYyNDM3NjgxMzgxMzgw.DbP1Zg.OZAtADjN-1bsA38NXHo0KLITbZU');

bot.on('message',message => {
    if (message.content === "ping"){
        message.reply("pong !");
        console.log ('Le bot a repondu pong!');
    
    }

    if (message.content === prefix +'help'){
        var help_embed = new Discord.RichEmbed()
        .setColor('#25E6B9')
        .addField("Commande du bot!","   -.help : Affiche cette page (Génius !)")
        .addField("Interaction","ping: pong ahaha c'est tres drole.")
        .setFooter("Page de help")
        message.channel.sendEmbed(help_embed);
    //message.channel.sendMessage("Commande du bot:\n .help: Affiche cette page (Genius)\n ping:pong !");
    console.log("La comande de help a été demander");
    }

    if (message.content === prefix +'invitation'){
        var invitation_embed = new Discord.RichEmbed()
        .setColor('#25E6B9')
        .addField("invitation du bot","   Lien du bot : https://discordapp.com/oauth2/authorize?client_id=432162437681381380&scope=bot&permissions=2146958591")
        .addField("invitation du serveur bader comunity","Lien d'invitation: https://discord.gg/vMdyN")
        .setFooter("Page d'invitation")
        message.channel.sendEmbed(invitation_embed);
    //message.channel.sendMessage("Commande du bot:\n .help: Affiche cette page (Genius)\n ping:pong !");
    console.log("La comande d'invitation a été demander");
    }

});