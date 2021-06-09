const Discord = require("discord.js")
module.exports = {
    name: 'sfaturi',
    description: "Embeds!",
    execute(message, args) {
       const newEmbed = new Discord.MessageEmbed()
        .setColor('#b4d4f2')
        .setTitle('Sfaturi')
        .setURL('https://www.dex.ro/sfat')
        .setDescription('Acesta este regulamentul')
        .addFields(
            {name: 'Sfatul nr.1', value: 'Dacă nu câștigi la un giveaway nu începe să fii toxici sau să ieșiți din server, toți utilizatorii au șanse egale de câștig.'},
            {name: 'Sfatul nr.2', value: 'Dacă vrei să ajungi în staff nu trebuie să te duci în dm la staff și să îi ceri grad de staff, ci trebuie să te comporți politicos cu utilizatorii și să fii primitor, astfel staff-ul va vedea cum te comporți și vei intra în staff automat.'},
            {name: 'Sfatul nr.3', value: 'Dacă vrei să primești gradul de prieten nu îl cere la owner, ci trebuie singur să știi cum să te comporti și îl vei primi de la erikson când este cazul și vede că ești prietenos si politicos cu el.'}

        )
        .setImage('https://i.imgur.com/T0ruZjm.png')
        .setFooter('Acestea sunt niște sfaturi care te pot ajuta!');
    
        message.channel.send(newEmbed);
    }


} 