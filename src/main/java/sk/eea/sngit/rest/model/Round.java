/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sk.eea.sngit.rest.model;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author murphy
 */
@Entity
@Table(name="round")
public class Round {
    
    @Id
    private long roundId;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "gameId", nullable = false)
    private Game game;
    
    private String hint;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cardId", nullable = false)
    private Card pickedCard;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "playerId", nullable = false)
    private Player speaker;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roundId", nullable = false)
    private List<Stack> cardsInStack;

    public long getRoundId() {
        return roundId;
    }

    public void setRoundId(long roundId) {
        this.roundId = roundId;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public String getHint() {
        return hint;
    }

    public void setHint(String hint) {
        this.hint = hint;
    }

    public Card getPickedCard() {
        return pickedCard;
    }

    public void setPickedCard(Card pickedCard) {
        this.pickedCard = pickedCard;
    }

    public Player getSpeaker() {
        return speaker;
    }

    public void setSpeaker(Player speaker) {
        this.speaker = speaker;
    }

    public List<Stack> getCardsInStack() {
        return cardsInStack;
    }

    public void setCardsInStack(List<Stack> cardsInStack) {
        this.cardsInStack = cardsInStack;
    }
    
    
}
