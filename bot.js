const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Estou Pronto!');
});

client.on('message', message => {
    if (message.content === '!Server') {
    	message.reply('Server em Construção!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
