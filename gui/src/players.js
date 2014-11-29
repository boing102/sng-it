/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function players(services){
    
    var rootDiv = $("#sng-players");
    
    function render(){
        
        
        
        
        if(services.nameGetter()==="" || services.myStatusGetter()===-1){
            rootDiv.hide();
        }else{
            rootDiv.show();
        }
        
    }
    
    return render;
    
}