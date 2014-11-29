/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



window.onload= sngit;
function sngit(){

    var statuses = {Mrco:-1,Silvinka:-1,Palo:-1,Martin:-1,Tomas:-1,Bimbo:-1};
    var newStatus = {Mrco:0,Silvinka:0,Palo:0,Martin:0,Tomas:0,Bimbo:0};
    var story = "Nedosiahnuteľný cieľ";
    var name="";
    
    
    //MOCKS
    setTimeout(function(){
        newStatus = {Mrco:1,Silvinka:3,Palo:3,Martin:3,Tomas:3,Bimbo:3};
    }, 4000);
    
    setTimeout(function(){
        newStatus = {Mrco:6,Silvinka:3,Palo:3,Martin:3,Tomas:3,Bimbo:3};
    }, 6000);
    
    
//    setInterval(function(){
//        if(statuses[name]===4){
//            newStatus = {Mrco:6,Silvinka:5,Palo:5,Martin:5,Tomas:5,Bimbo:5};
//        }
//        if(statuses[name]===6){
//            newStatus = {Mrco:7,Silvinka:7,Palo:7,Martin:7,Tomas:7,Bimbo:7};
//        }
//    }, 10000);
    
    function isStorySaid(stats){
        for(var propertyName in stats) {
            if(stats[propertyName]===6){
                return true;
            }
        }
        return false;
    }
    
    var services = {
        
        isStorySaidGetter: function(){
            return isStorySaid(statuses);
        },
        storyGetter: function(){
            return story;
        },
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
                statuses[name] = st;
                if(st===0){
                    //logged in - start to ask server every second
                    setInterval(function () {
//                        var newStatus = {Mrco:1,Silvinka:3,Palo:3,Martin:3,Tomas:3,Bimbo:3}; //TODO get status
                        //var newStatus = {Mrco:-1,Silvinka:-1,Palo:-1,Martin:-1,Tomas:-1,Bimbo:-1}; //TODO get status
                        //
                        //if my status changed
//                        if(newStatus[name] !== statuses[name]){
//                            statuses[name] = newStatus[name];
//                        }
                        
                        //sth changed
                        if(JSON.stringify(newStatus) !== JSON.stringify(statuses) ){
                            statuses = newStatus;
                            renderAll();
                        }
                        
                    }, 1000);
                }
                if(st===4){
                    setTimeout(function(){
                        newStatus = {Mrco:6,Silvinka:5,Palo:5,Martin:5,Tomas:5,Bimbo:5};
                    }, 10000);
                }
                if(st===6){
                    setTimeout(function(){
                        newStatus = {Mrco:7,Silvinka:7,Palo:7,Martin:7,Tomas:7,Bimbo:7};
                    }, 10000);
                }
                renderAll();
            }
        }
    };
    
    var gridRender = grid(services);
    var descriptionRender = description(services);
    var titleRender = title(services);
    var loginRender = login(services);
    var playerRender = players(services);
    
    function renderAll(){
        descriptionRender();
        gridRender();
        loginRender();
        playerRender();
        titleRender();
    }
    
    renderAll();
    


}
