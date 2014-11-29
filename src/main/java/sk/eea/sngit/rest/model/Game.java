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
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author murphy
 */
@Entity
@Table(name = "game")
public class Game {
    
    @Id
    private long gameId;
    
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "gameId", nullable = false)
    private List<Round> round;
    
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "playerId", nullable = false)
    private List<Player> players;
    
    private int playerCount = 4;

    public long getGameId() {
        return gameId;
    }

    public void setGameId(long gameId) {
        this.gameId = gameId;
    }

    public List<Round> getRound() {
        return round;
    }

    public void setRound(List<Round> round) {
        this.round = round;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public int getPlayerCount() {
        return playerCount;
    }

    public void setPlayerCount(int playerCount) {
        this.playerCount = playerCount;
    }
    
}
