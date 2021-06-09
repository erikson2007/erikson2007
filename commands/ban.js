module.exports = {
    name: 'ban',
    description: "Aceasta este o comandă pentru a da ban membrilor!",
    execute(message, args){
        const member = message.mentions.users.first()
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id)
            memberTarger.ban();
            message.channel.send("Acel membru a fost banned!");
        }else{
            message.channel.send('Nu ai putut da ban acelui membru!');
        }
    }

} 