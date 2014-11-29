/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function grid(services){
    
    var rootDiv = $("#sng-grid");
    var popupDetail = $("#popupDetail");
    var defaultCard="img/defaultCard.png";
    
    var cards = getDefaultCards();
    
   for(var i=0;i<6;i++){
        (function(i){
            var block = $("#block"+i);
            var bar = block.find(".ui-bar");
            var detailLink = block.find(".detailLink");
            
            //SETUP GRID BEHAVIOUR BASED ON CURRENT STATUS 
                        
            block.find(".detailLink").click(function(){
                
                if(services.myStatusGetter()===1){
                    
                    
                    popupDetail.find(".card-url").attr("src",cards[i].url);
                    popupDetail.find(".card-title").text(cards[i].title);
                    popupDetail.find(".card-creator").text(cards[i].creator);
                    popupDetail.find(".card-created").text(cards[i].created);
                    popupDetail.find(".card-format").text(cards[i].format);
                    popupDetail.popup();
                    popupDetail.popup("open");
                    
                    popupDetail.find(".card-choose-btn").click(function(){
                        if(services.myStatusGetter()===1){
                            if(!detailLink.hasClass("active")){
                               detailLink.addClass("active");
                            }
                            popupDetail.popup("close");
                            services.statusSetter(2);
                        }
                    });
                    
                    
                }
            
            });
            
            
        })(i);
    }

    
    function render(){

        if(services.myStatusGetter()===0){
            cards = getDefaultCards();
        }
        if(services.myStatusGetter()===1){
            cards = getMyCards();
        }

        
        
        if(services.nameGetter()==="" || services.myStatusGetter()===-1){
            rootDiv.hide();
        }else{
            rootDiv.show();
        }
        
        for(var i=0;i<6;i++){
            $("#img"+(i+1)).attr("src",cards[i].url);
            popupDetail.popup("close");
        }
        

    }
    
    
    
     function getMyCards(){
        return [{
            "url":"http://www.webumenia.sk/oai-pmh/getimage/SVK:SNG.G_434",
            "title":"Výstava v Paríži",
            "creator":"Fulla, Ľudovít",
            "created":"1938/1938",
            "format":"drevorez, farebný"
        },
        {
            "url":"http://webumenia.sk/cedvuweb/image/SVK_OGD.G_1687.jpeg?id=SVK:OGD.G_1687",
            "title":"2",
            "creator":"Fulla, Ľudovít",
            "created":"1938/1938",
            "format":"drevorez, farebný"
        },
        {
            "url":"http://webumenia.sk/cedvuweb/image/SVK_SNG.G_13268.jpeg?id=SVK:SNG.G_13268",
            "title":"3i",
            "creator":"Fulla, Ľudovít",
            "created":"1938/1938",
            "format":"drevorez, farebný"
        },
        {
            "url":"http://webumenia.sk/cedvuweb/image/SVK_SNG.K_12245.jpeg?id=SVK:SNG.K_12245",
            "title":"4",
            "creator":"Fulla, Ľudovít",
            "created":"1938/1938",
            "format":"drevorez, farebný"
        },
        {
            "url":"http://webumenia.sk/cedvuweb/image/SVK_OGD.K_1177.jpeg?id=SVK:OGD.K_1177",
            "title":"5",
            "creator":"Fulla, Ľudovít",
            "created":"1938/1938",
            "format":"drevorez, farebný"
        },
        {
            "url":"http://webumenia.sk/cedvuweb/image/SVK_OGD.K_1354.jpeg?id=SVK:OGD.K_1354",
            "title":"6",
            "creator":"Fulla, Ľudovít",
            "created":"1938/1938",
            "format":"drevorez, farebný"
        }];
        
    }
    
    function getDefaultCards(){
        return [
            {
                "url":"img/defaultCard.png",
                "title":"",
                "creator":"",
                "created":"",
                "format":""
            },
            {
                "url":"img/defaultCard.png",
                "title":"",
                "creator":"",
                "created":"",
                "format":""
            },
            {
                "url":"img/defaultCard.png",
                "title":"",
                "creator":"",
                "created":"",
                "format":""
            },
            {
                "url":"img/defaultCard.png",
                "title":"",
                "creator":"",
                "created":"",
                "format":""
            },
            {
                "url":"img/defaultCard.png",
                "title":"",
                "creator":"",
                "created":"",
                "format":""
            },
            {
                "url":"img/defaultCard.png",
                "title":"",
                "creator":"",
                "created":"",
                "format":""
            }];
        
    }
    
    
    return render;
}