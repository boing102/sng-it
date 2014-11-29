package sk.eea.sngit.rest;

import sk.eea.sngit.rest.model.State;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author mme
 */
@RestController
public class StateController {
    
    @RequestMapping(method=RequestMethod.GET, value="/sngit/state")
    public State getState(@RequestParam(value="user", defaultValue="") String user){
        return new State(1);
    }
    
    
}
