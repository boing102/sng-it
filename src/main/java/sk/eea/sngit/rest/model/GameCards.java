/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sk.eea.sngit.rest.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 *
 * @author murphy
 */
@Entity
@Table(name = "game_cards")
public class GameCards {
    @Id
    private long gameCardId;
    
    @OneToOne
    @JoinColumn(name = "gameId", nullable = false)
    private Game game;
    
    @OneToOne
    @JoinColumn(name = "playerId", nullable = false)
    private Player player;
    
    @OneToOne
    @JoinColumn(name = "cardId", nullable = false)
    private Card card;
    
    private boolean used;
}
