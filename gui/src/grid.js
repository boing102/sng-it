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
            
            //SETUP GRID BEHAVIOUR BASED ON CURRENT STATUS 
                        
            block.find(".detailLink").click(function(){
                
                if(services.myStatusGetter()===0 || services.myStatusGetter()===3 || services.myStatusGetter()===4 || services.myStatusGetter()===5 || services.myStatusGetter()===6 ){

                    popupDetail.find(".card-url").attr("src",cards[i].url);
                    popupDetail.find(".card-title").text(cards[i].title);
                    popupDetail.find(".card-creator").text(cards[i].creator);
                    popupDetail.find(".card-created").text(cards[i].created);
                    popupDetail.find(".card-format").text(cards[i].format);
                    popupDetail.popup();
                    popupDetail.popup("open");
                    
                    popupDetail.find(".card-choose-btn").click(function(){
                        var block = $("#block"+i);
                        var detailLink = block.find(".detailLink");
                        if(services.myStatusGetter()===3 && services.isStorySaidGetter()){
                            if(!detailLink.hasClass("active")){
                               detailLink.addClass("active");
                            }
                            popupDetail.popup("close");
                            services.statusSetter(4);
                        }
                        
                        if(services.myStatusGetter()===5){
//                            if(!detailLink.hasClass("active_voice")){
//                               detailLink.addClass("active_voice");
//                            }
                            popupDetail.popup("close");
                            $("#block1").find(".detailLink").addClass("active_voice");
                            services.statusSetter(6);
                        }
                    });
                    
                }
            
            });
            
            
        })(i);
    }

    
    function render(){

        if(services.myStatusGetter()===-1){
            cards = getDefaultCards();
        }
        if(services.myStatusGetter()===0){
            cards = getMyCards();
            popupDetail.find(".card-choose-btn").hide();  
        }
        if(services.myStatusGetter()===1 || services.myStatusGetter()===3){
            cards = getMyCards();
        }
        if(services.myStatusGetter()===3){
            if(!services.isStorySaidGetter()){
                popupDetail.find(".card-choose-btn").hide();    
            }else{
                popupDetail.find(".card-choose-btn").show();    
            }    
        }
        if(services.myStatusGetter()===4){
            popupDetail.find(".card-choose-btn").hide();    
        }
        if(services.myStatusGetter()===5){
            popupDetail.find(".card-choose-btn").show();    
            cards = getOthersCards();
        }
        if(services.myStatusGetter()===6){
            popupDetail.find(".card-choose-btn").hide();    
        }
        if(services.myStatusGetter()===7){
             $("#block3").find(".detailLink").addClass("active_narator");
             var popupResults = $("#popupResults");
             popupResults.popup();
             popupResults.popup("open");
             
        }
        
        
        if(services.nameGetter()==="" || services.myStatusGetter()===-1){
            rootDiv.hide();
        }else{
            rootDiv.show();
        }
        
        for(var i=0;i<6;i++){
            $("#img"+(i+1)).attr("src",cards[i].url);
//            popupDetail.popup("close");
        }
        

    }
    
 
    
    function getOthersCards(){
        return [{
            "url":"http://www.webumenia.sk/cedvuweb/image/SVK_SNG.O_1985.jpeg?id=SVK:SNG.O_1985",
            "title":"Ležiaci akt",
            "creator":"Cyprián Majerník",
            "created":"1930/1930 ",
            "format":"plátno, olej"
        },
        {
            "url":"http://www.webumenia.sk/cedvuweb/image/SVK_SNG.O_361.jpeg?id=SVK:SNG.O_361",
            "title":"Deti pred výkladom",
            "creator":"Martin Nagy",
            "created":"1924/1924 ",
            "format":"plátno, olej"
        },
        {
            "url":"http://www.webumenia.sk/cedvuweb/image/SVK_SNG.O_2611.jpeg?id=SVK:SNG.O_2611",
            "title":"Pijan",
            "creator":"Mikuláš Galanda",
            "created":"1933/1933",
            "format":"preglejka, olej"
        },
        {
            "url":"http://www.webumenia.sk/cedvuweb/image/SVK_SNG.O_5591.jpeg?id=SVK:SNG.O_5591",
            "title":"Krajina s koľajnicami",
            "creator":"Štefan Bednár",
            "created":"1936/1936",
            "format":"plátno, olej"
        },
        {
            "url":"http://www.webumenia.sk/cedvuweb/image/SVK_SNG.O_1617.jpeg?id=SVK:SNG.O_1617",
            "title":"Partizánka na stráži pod Rozsutcom",
            "creator":"Ján Mudroch",
            "created":"1954/1954",
            "format":"plátno, olej"
        },
        {
            "url":"http://www.webumenia.sk/cedvuweb/image/SVK_SNG.O_3629.jpeg?id=SVK:SNG.O_3629",
            "title":"Figúra v červenom pozadí",
            "creator":"Július Jakoby",
            "created":"1968/1968",
            "format":"preglejka, olej"
        }];
        
    }
    
//    
//     function getMyCards(){
//        return [{
//            "url":"http://www.webumenia.sk/oai-pmh/getimage/SVK:SNG.G_434",
//            "title":"Výstava v Paríži",
//            "creator":"Fulla, Ľudovít",
//            "created":"1938/1938",
//            "format":"drevorez, farebný"
//        },
//        {
//            "url":"http://webumenia.sk/cedvuweb/image/SVK_OGD.G_1687.jpeg?id=SVK:OGD.G_1687",
//            "title":"2",
//            "creator":"Fulla, Ľudovít",
//            "created":"1938/1938",
//            "format":"drevorez, farebný"
//        },
//        {
//            "url":"http://webumenia.sk/cedvuweb/image/SVK_SNG.G_13268.jpeg?id=SVK:SNG.G_13268",
//            "title":"3i",
//            "creator":"Fulla, Ľudovít",
//            "created":"1938/1938",
//            "format":"drevorez, farebný"
//        },
//        {
//            "url":"http://webumenia.sk/cedvuweb/image/SVK_SNG.K_12245.jpeg?id=SVK:SNG.K_12245",
//            "title":"4",
//            "creator":"Fulla, Ľudovít",
//            "created":"1938/1938",
//            "format":"drevorez, farebný"
//        },
//        {
//            "url":"http://webumenia.sk/cedvuweb/image/SVK_OGD.K_1177.jpeg?id=SVK:OGD.K_1177",
//            "title":"5",
//            "creator":"Fulla, Ľudovít",
//            "created":"1938/1938",
//            "format":"drevorez, farebný"
//        },
//        {
//            "url":"http://webumenia.sk/cedvuweb/image/SVK_OGD.K_1354.jpeg?id=SVK:OGD.K_1354",
//            "title":"6",
//            "creator":"Fulla, Ľudovít",
//            "created":"1938/1938",
//            "format":"drevorez, farebný"
//        }];
//        
//    }

    function getMyCards(){
        return [{
            "url":"http://www.webumenia.sk/cedvuweb/image/SVK_SNG.O_1985.jpeg?id=SVK:SNG.O_1985",
            "title":"Ležiaci akt",
            "creator":"Cyprián Majerník",
            "created":"1930/1930 ",
            "format":"plátno, olej"
        },
        {
            "url":"http://www.webumenia.sk/cedvuweb/image/SVK_SNG.O_4717.jpeg?id=SVK:SNG.O_4717",
            "title":"Mužský akt",
            "creator":"Elemír Halász-Hradil",
            "created":"1903/1903 ",
            "format":"plátno, olej"
        },
        {
            "url":"http://www.webumenia.sk/cedvuweb/image/SVK_SNG.O_6398.jpeg?id=SVK:SNG.O_6398",
            "title":"Svätý Ján Evanjelista",
            "creator":"Ruský ikonopisec",
            "created":"1800/1900",
            "format":"drevo, tempera"
        },
        {
            "url":"http://www.webumenia.sk/cedvuweb/image/SVK_SNG.O_5147.jpeg?id=SVK:SNG.O_5147",
            "title":"Bretónsky motív",
            "creator":"Ladislav Záborský",
            "created":"1961/1961",
            "format":"plátno, olej"
        },
        {
            "url":"http://www.webumenia.sk/cedvuweb/image/SVK_SNG.O_2027.jpeg?id=SVK:SNG.O_2027",
            "title":"Jar v Bratislave",
            "creator":"Maximilián Schurmann",
            "created":"1932/1932",
            "format":"plátno, olej"
        },
        {
            "url":"http://www.webumenia.sk/cedvuweb/image/SVK_SNG.O_6383.jpeg?id=SVK:SNG.O_6383",
            "title":"Altamíra",
            "creator":"Daniel Fischer",
            "created":"1983/1983",
            "format":"plátno, kombinovaná technika , počítačová technika "
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