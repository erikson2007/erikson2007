const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "Această comandă dă mute membrilor!",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Membru');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole);
                memberTarget.roles.add(muteRole);
                message.channel.send(`<@${memberTarget.user.id}> a fost muted`);
                return
            }
            memberTarget.roles.remove(mainRole);
            memberTarget.roles.add(muteRole);
            message.channel.send(`<@${memberTarget.user.id}> a fost muted pentru ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole);
                memberTarget.roles.add(mainRole);
                message.channel.send(`<@${memberTarget.user.id}> a fost unmuted`);
            }, ms(args[1]));
        } else {
            message.channel.send('Acest membru nu a fost găsit!');
        }
    }
}