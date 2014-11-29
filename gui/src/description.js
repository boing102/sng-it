/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function description(services){
    
    var rootDir = $("#sng-description");
    
    function render(){
        if(services.nameGetter()==="" || services.myStatusGetter()===-1){
            rootDir.text("Prihlásenie do hry");
        }else if(services.myStatusGetter()===0){
            rootDir.text("Čakaj na súperov");
        }
        else if(services.myStatusGetter()===1){
            rootDir.text("Vyber kartu, podľa ktorej popisu sa bude hádať");
        }
        else if(services.myStatusGetter()===2){
            rootDir.text("Popíš vybranú kartu");
        }
        else if(services.myStatusGetter()===3){
            if(!services.isStorySaidGetter()){
                rootDir.text("Čakaj na rozprávača");    
            }else{
                rootDir.text("Vyber si svoju kartu!");
            }
        }
        else if(services.myStatusGetter()===3){
            rootDir.text("Vyber kartu najviac vyhovujúcu popisu");
        }
       else if(services.myStatusGetter()===4){
            rootDir.text("Čakaj na výber karty ostatných hráčov");
        }
      else if(services.myStatusGetter()===5){
            rootDir.text("Uhádni rozprávačovu kartu");
        }
      else if(services.myStatusGetter()===6){
            rootDir.text("Čakaj na ostatných hráčov");
        }
        
        //todo: remove. just for debug
//        rootDir.append(services.myStatusGetter());
    };
    
    return render;
    
}