/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function login(services){
    
    var rootDir=$("#sng-login");
    var loginform = $("#sng-login-form");
    loginform.submit(function(e){
        e.preventDefault();
        services.nameSetter(loginform.serializeArray()[0].value);
        services.statusSetter(0);
    });
    
    function render(){
        if(services.nameGetter()==="" || services.myStatusGetter()===-1){
            rootDir.show();
        }else{
            rootDir.hide();
        }
    }
    
    
    return render;
}
