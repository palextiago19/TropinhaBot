const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Estou Pronto!');
});
client.on('message', message => {
    if (message.content === '!Server') 
        
        
        //send(message.channel, 'Server em Construção!',{name: 'Manutenção', icon: 'https://cdn.discordapp.com/attachments/427100723130531840/427100781255065600/X9eAmHm.png'});
    	
    //message.channel.send({embed: {
  //color: 3447003,
  //description: "Server em Construção!"
//}});
    
    //message.reply('Server em Construção!');
  	//}
        message.channel.send({embed: {
    color: 3447003,
    author: {
      name: 'Manutenção!',
      icon_url: 'https://cdn.discordapp.com/attachments/427100723130531840/427100781255065600/X9eAmHm.png'
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
        
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
