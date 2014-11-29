package sk.eea.sngit.rest.model;

public class Greeting {

    private final long id;
    private final String content;
    private final String player;

    public Greeting(long id, String content, String player) {
        this.id = id;
        this.content = content;
        this.player = player;
    }

    public String getPlayer() {
        return player;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
