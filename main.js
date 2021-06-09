const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandsFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log('Steluța a înviat');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'prefix'){
        client.commands.get('prefix').execute(message, args);
    }


    if(command === 'staff'){
        client.commands.get('staff').execute(message, args);
    }


    if(command === 'instagram'){
        client.commands.get('instagram').execute(message, args);
    }


    if(command === 'sfaturi'){
        client.commands.get('sfaturi').execute(message, args);
    }


    if(command === 'regulament'){
        client.commands.get('regulament').execute(message, args);
    }


    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }


    if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }


    if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }
 

    if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }


    if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }
});

client.login('ODUyMTA1MDcxMTU5OTM0OTc3.YMB-sA.627jbA65h6iNogtdN32aN_5-Jck');