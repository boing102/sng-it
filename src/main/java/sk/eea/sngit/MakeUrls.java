package sk.eea.sngit;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by silvia on 29/11/14.
 */
public class MakeUrls {

    String makeUrlOaiPmh(String key){
        String url = "http://www.webumenia.sk/oai-pmh/getimage/"+key;
        return url;
    }

    String makeUrlCedvu(String key){
        Pattern pattern = Pattern.compile(":");
        Matcher matcher = pattern.matcher(key);
        String termKey = matcher.replaceFirst("_");
        termKey = termKey+".jpeg?id="+key;
        String url = "http://webumenia.sk/cedvuweb/image/"+termKey;
        return url;
    }
}
