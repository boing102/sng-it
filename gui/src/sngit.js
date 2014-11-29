/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload= sngit;
function sngit(){

    var statuses = {Mrco:-1,Silvinka:-1,Palo:-1,Martin:-1,Tomas:-1,Bimbo:-1};
    var name="";
    
    var services = {
        statusGetter: function(){
            return statuses;
        },
        myStatusGetter: function(){
            return statuses[name];
        },
        nameGetter: function(){
            return name;
        },
        nameSetter: function(n){
            if(statuses.hasOwnProperty(n)){
                name=n;
            }
        },
        statusSetter:function(st){
            if(statuses.hasOwnProperty(name) && statuses[name]!==st){
                //my status is going to be changed
//                statuses[name] = st;
                if(st===0){
                    //logged in - start to ask server every second
                    setInterval(function () {
                        var newStatus = {Mrco:1,Silvinka:3,Palo:3,Martin:3,Tomas:3,Bimbo:1}; //TODO get status
                        //var newStatus = {Mrco:-1,Silvinka:-1,Palo:-1,Martin:-1,Tomas:-1,Bimbo:-1}; //TODO get status
                        //if my status changed
                        if(newStatus[name] !== statuses[name]){
                            statuses[name] = newStatus[name];
                            renderAll();
                        }
                    }, 1000);
                }
                renderAll();
            }
        }
    };
    
    var gridRender = grid(services);
    var headerRender = header(services);
    var loginRender = login(services);
    var playerRender = players(services);
    
    function renderAll(){
        headerRender();
        gridRender();
        loginRender();
        playerRender();
    }
    
    renderAll();
    


}
