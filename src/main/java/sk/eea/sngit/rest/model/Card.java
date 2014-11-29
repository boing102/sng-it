package sk.eea.sngit.rest.model;

import java.util.ArrayList;

/**
 *
 * @author mme
 */
public class Card {
    private final long id;
    private final String title;
    private final String creator;
    private final String created;
    private final String format;
    private final String url;
    private final Player owner;
    private final ArrayList<Player> playerData;

    public Card(long id, String title, String creator, String created, String format, String url, Player owner, ArrayList<Player> playerData) {
        this.id = id;
        this.title = title;
        this.creator = creator;
        this.created = created;
        this.format = format;
        this.url = url;
        this.owner = owner;
        this.playerData = playerData;
    }

    public Player getOwner() {
        return owner;
    }

    public ArrayList<Player> getPlayerData() {
        return playerData;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getCreator() {
        return creator;
    }

    public String getCreated() {
        return created;
    }

    public String getFormat() {
        return format;
    }

    public String getUrl() {
        return url;
    }
    
    
}
