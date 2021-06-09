const Discord = require("discord.js")
module.exports = {
    name: 'regulament',
    description: "Embeds!",
    execute(message, args) {
       const newEmbed = new Discord.MessageEmbed()
        .setColor('#FA8072')
        .setTitle('Regulament')
        .setURL('https://www.dex.ro/regulament')
        .setDescription('Acesta este regulamentul serverului')
        .addFields(
            {name: 'Regula nr.1', value: 'Nu ai voie să înjuri sau să fii toxic'},
            {name: 'Regula nr.2', value: 'Nu ai voie să faci reclamă '},
            {name: 'Regula nr.3', value: 'Nu ai voie să faci afaceri'},
            {name: 'Regula nr.4', value: 'Nu ai voie sa spamezi'},
            {name: 'Regula nr.5', value: 'Fara J4J (join for join.)'},
            {name: 'Regula nr.6', value: 'Nu ai voie să dai scam utilizatorilor'},
            {name: 'Regula nr.7', value: 'Fără doxing/ddosing threats'},
            {name: 'Regula nr.8', value: 'Nu ai voie să faci ticket fără motiv'},
            {name: 'Regula nr.9', value: 'Nu ai voie să execuți comenzi în free-chat'},
            {name: 'Regula nr.10', value: 'Fară rasism/n-word'},

        )
        .setImage('https://imgur.com/up2ugj9')
        .setFooter('Daca nu respecți aceste reguli vei fi sancționat');
    
        message.channel.send(newEmbed);
    }


} 