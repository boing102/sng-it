/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sk.eea.sngit.rest.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 *
 * @author murphy
 */
@Entity
@Table(name = "stack")
public class Stack {
    
    @Id
    private long stackId;
    
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "playerId", nullable = false)
    private Player player;
    
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "playerId", nullable = false)
    private Card card;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roundId", nullable = false)
    private Round round;

    public long getStackId() {
        return stackId;
    }

    public void setStackId(long stackId) {
        this.stackId = stackId;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Card getCard() {
        return card;
    }

    public void setCard(Card card) {
        this.card = card;
    }

    public Round getRound() {
        return round;
    }

    public void setRound(Round round) {
        this.round = round;
    }
    
    
}
