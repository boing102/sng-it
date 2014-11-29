package sk.eea.sngit.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sk.eea.sngit.rest.model.Card;
import sk.eea.sngit.rest.model.Turn;
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
    public Turn.State postDescription(@RequestParam(value="user", defaultValue="") String user, 
            @RequestParam(value="cardId", defaultValue="-1") String cardId, 
            @RequestParam(value="description", defaultValue="aa") String description){
        
        return Turn.State.DESCRIBE_CARD;
    }
    
    @RequestMapping(method=RequestMethod.POST, value="/sngit/player/cards")
    public Turn.State postCard(@RequestParam(value="user", defaultValue="") String user, 
            @RequestParam(value="cardId", defaultValue="-1") String cardId){
        
        return Turn.State.WAIT_FOR_GAME;
    }
    
    @RequestMapping(method=RequestMethod.POST, value="/sngit/player/guess")
    public Turn.State postGuess(@RequestParam(value="user", defaultValue="") String user, 
            @RequestParam(value="cardId", defaultValue="-1") String cardId){
        return Turn.State.RESULT;
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
