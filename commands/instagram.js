module.exports = {
    name: 'instagram',
    description: "Aceasta este o comandă pentru a vedea contul de instagram a lui erikson!",
    execute(message, args){
       
       if(message.member.roles.cache.has('852149758028939294')) {
        message.channel.send('instagram.com/erikbegu')
       
    
       } else {
           message.channel.send('Nu poti executa aceasta comanda deoarece nu ai rolul de prieten');
       }
    
    
        
        
    }
}