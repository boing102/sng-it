/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sk.eea.sngit.rest.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author murphy
 */
@Entity
@Table(name = "turn")
public class Turn {
    
    @Id
    private long turnId;
    
    @ManyToOne
    @JoinColumn(name = "roundId", nullable = false)
    private Round round;
    
    @ManyToOne
    @JoinColumn(name = "playerId", nullable = false)
    private Player player;
    
    public enum State {
        WAIT_FOR_GAME,
        SELECT_SPEAKER_CARD,
        DESCRIBE_CARD,
        PICK_PLAYER_CARD,
        PICK_CARD,
        RESULT
    }
    
    private State state;

    public long getTurnId() {
        return turnId;
    }

    public void setTurnId(long turnId) {
        this.turnId = turnId;
    }

    public Round getRound() {
        return round;
    }

    public void setRound(Round round) {
        this.round = round;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }
    
    
    
}
