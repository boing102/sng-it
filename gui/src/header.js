/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function header(services){
    
    var rootDir = $("#sng-title");
    
    function render(){
        if(services.nameGetter()==="" || services.myStatusGetter()===-1){
            rootDir.text("Prihlásenie do hry");
        }else if(services.myStatusGetter()===0){
            rootDir.text("Čakaj na súperov");
        }
        else{
            rootDir.text("");
        }
        
        //todo: remove. just for debug
        rootDir.append(services.myStatusGetter());
    };
    
    return render;
    
}