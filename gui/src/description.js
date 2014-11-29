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
            rootDir.text("Kým čakáš na prihlásenie tvojich spoluhráčov, môžeš si prečítať niečo viac o kartách - umeleckých dielach, ktoré ti boli pridelené. Stačí na nich kliknúť.");
        }
        else if(services.myStatusGetter()===1){
            rootDir.text("Vyber si umelecké dielo, ktoré ťa najviac oslovilo a vieš ho jednoducho a výstižne opísať tak, aby ho tvoji spoluhráči spoznali.");
        }
        else if(services.myStatusGetter()===2){
            rootDir.text("Napíš jednoduchý popis k vybranému obrázku (max. 160 znakov)");
        }
        else if(services.myStatusGetter()===3){
            if(!services.isStorySaidGetter()){
                rootDir.text("Kým čakáš na popis karty od rozprávača, môžeš si prečítať niečo viac o kartách - umeleckých dielach, ktoré ti boli pridelené. Stačí na nich kliknúť.");    
            }else{
                rootDir.text("Vyber zo svojich kariet tú, ktorá sa najviac hodí k zadanému opisu: ");
                $("<b></b>").appendTo(rootDir).text(services.storyGetter());
            }
        }
       else if(services.myStatusGetter()===4){
            rootDir.text("Zvyšní spoluhráči ešte stále vyberajú vhodnú kartu. Kým na nich čakáš, môžeš si prečítať niečo viac o kartách - umeleckých dielach, ktoré ti boli pridelené. Stačí na nich kliknúť.");
        }
      else if(services.myStatusGetter()===5){
            rootDir.text("Podľa daného opisu vyber kartu, o ktorej si myslíš, že patrila rozprávačovi. To znamená kartu, na ktorú bol podľa teba tento opis pôvodne napísaný. Rozprávačov popis: ");
             $("<b></b>").appendTo(rootDir).text(services.storyGetter());
        }
      else if(services.myStatusGetter()===6){
            rootDir.text("Zvyšní spoluhráči ešte stále vyberajú výslednú kartu. Kým na nich čakáš, môžeš si prečítať niečo viac o kartách - umeleckých dielach, ktoré ti boli pridelené. Stačí na nich kliknúť.");
        }
        
    };
    
    return render;
    
}