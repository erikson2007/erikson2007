module.exports = {
    name: 'kick',
    description: "Aceasta este o comandă pentru a da kick membrilor!",
    execute(message, args){
        const member = message.mentions.users.first()
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id)
            memberTarger.kick();
            message.channel.send("Acel membru a fost kickuit!");
        }else{
            message.channel.send('Nu ai putut da kick acelui membru!');
        }
    }

} 