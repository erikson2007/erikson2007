module.exports = {
    name: 'prefix',
    description: "Aceasta este o comandă pentru a vedea prefixul!",
    execute(message, args){
       message.channel.send('Prefixul este { - }');
        
    }
}