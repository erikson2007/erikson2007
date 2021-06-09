module.exports = {
    name: 'unmute',
    description: "Această comandă dă unmute membrilor",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Membru');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> a fost unmuted`);
        } else{
            message.channel.send('Acest membru nu a fost găsit!');
        }
    }
}