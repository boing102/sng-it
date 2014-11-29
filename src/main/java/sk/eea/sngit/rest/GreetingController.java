package sk.eea.sngit.rest;

import sk.eea.sngit.rest.model.Greeting;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
 
    @RequestMapping(method=RequestMethod.GET, value="/greeting", headers = "content-type=application/json")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name, 
            @RequestParam(value="player", defaultValue="Leeroy") String player) {
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name), player);
    }
}
