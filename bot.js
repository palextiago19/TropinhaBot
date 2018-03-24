const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Estou Pronto!');
});

client.on('message', message => {
    if (message.content === '!Server') 
        
        //message.channel.send(message.channel, 'Server em Construção!',{name: 'Manutenção', icon: 'https://cdn.discordapp.com/attachments/427100723130531840/427100781255065600/X9eAmHm.png'})
    	
    message.channel.send({embed: {
  color: 3447003,
  description: "Server em Construção!"
}});
    
    //message.reply('Server em Construção!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
