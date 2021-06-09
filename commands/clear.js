module.exports = {
    name: 'clear',
    description: "Aceasta este o comandă pentru a sterge mesajele!",
    async execute(message, args) {
       if(!args[0]) return message.reply("Te rog introdu numărul de mesaje care vrei să fie șterse!");
        if(isNaN(args[0])) return message.reply("Te rog introdu un număr real!");
    
        if(args[0] > 100) return message.reply("Nu poți șterge mai mult de 100 de mesaje!");
        if(args[0] < 1) return message.reply("Trebuie să ștergi minim un mesaj!");
    
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    
    }
}