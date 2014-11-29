package sk.eea.sngit.rest;

import sk.eea.sngit.rest.model.State;
import sk.eea.sngit.rest.model.Card;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
/**
 *
 * @author mme
 */
@RestController
public class CardController {
    
    @RequestMapping(method=RequestMethod.GET, value="/sngit/player/cards")
    public Card[] getPlayerCards(@RequestParam(value="user", defaultValue="") String user){
       return null;
    }
    
    @RequestMapping(method=RequestMethod.POST, value="/sngit/narrator/cards")
    public State postDescription(@RequestParam(value="user", defaultValue="") String user, 
            @RequestParam(value="cardId", defaultValue="-1") String cardId, 
            @RequestParam(value="description", defaultValue="aa") String description){
        
        return new State(1);
    }
    
    @RequestMapping(method=RequestMethod.POST, value="/sngit/player/cards")
    public State postCard(@RequestParam(value="user", defaultValue="") String user, 
            @RequestParam(value="cardId", defaultValue="-1") String cardId){
        
        return new State(1);
    }
    
    @RequestMapping(method=RequestMethod.POST, value="/sngit/player/guess")
    public State postGuess(@RequestParam(value="user", defaultValue="") String user, 
            @RequestParam(value="cardId", defaultValue="-1") String cardId){
        
        return new State(1);
    }
    
    @RequestMapping(method=RequestMethod.GET, value="/sngit/submitted/cards")
    public Card[] getSubmittedCards(@RequestParam(value="user", defaultValue="") String user){
        /*Card[] cards = new Card[6];
        cards[0] = new Card(1,"Karta", "Ja", "Vcera", "Drevorezba", "url");
        cards[1] = new Card(1,"Karta", "Ja", "Vcera", "Drevorezba", "url");
        cards[2] = new Card(1,"Karta", "Ja", "Vcera", "Drevorezba", "url");
        cards[3] = new Card(1,"Karta", "Ja", "Vcera", "Drevorezba", "url");
        cards[4] = new Card(1,"Karta", "Ja", "Vcera", "Drevorezba", "url");
        cards[5] = new Card(1,"Karta", "Ja", "Vcera", "Drevorezba", "url");
        return cards;*/
        return null;
    }
    
    @RequestMapping(method=RequestMethod.GET, value="/sngit/narrator/description")
    public String getDescription(@RequestParam(value="user", defaultValue="") String user){
        return "desc";
    }
}
