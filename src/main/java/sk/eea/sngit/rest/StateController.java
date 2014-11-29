package sk.eea.sngit.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sk.eea.sngit.rest.model.Turn;

/**
 *
 * @author mme
 */
@RestController
public class StateController {
    
    @RequestMapping(method=RequestMethod.GET, value="/sngit/state")
    public Turn.State getState(@RequestParam(value="user", defaultValue="") String user){
        return null;
    }
    
    
}
