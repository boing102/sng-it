package sk.eea.sngit.rest.model;

/**
 *
 * @author mme
 */
public class Player {
    private final String name;
    private final int state;

    public Player(String name, int state) {
        this.name = name;
        this.state = state;
    }

    public String getName() {
        return name;
    }

    public int getState() {
        return state;
    }
    
    
    
}
