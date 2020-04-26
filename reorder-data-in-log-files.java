import java.util.Map;
import java.util.AbstractMap;

class Solution {
    public String[] reorderLogFiles(String[] logs) {
        int n = logs.length;
        TreeMap<String, String> letterLogs = new TreeMap<String, String>(new Comparator<String>() {
            public int compare(String s1, String s2) {
                int compareValue = s1.compareTo(s2);
                
                if(compareValue != 0) {
                    return compareValue;
                } 
                else {
                    return -1;
                }
            }
        });
        List<AbstractMap.SimpleEntry<String, String>> digitLogs = new ArrayList<AbstractMap.SimpleEntry<String, String>>();
        String currentLog = null;
        String identifier = null;
        String restOfLog = null;
        int indexOfFirstSpace = -1;
        
        int i = 0;
        for(i=0; i<n; i++) {
            currentLog = logs[i];
            indexOfFirstSpace = currentLog.indexOf(" ", 0);
            identifier = currentLog.substring(0, indexOfFirstSpace + 1);
            restOfLog = currentLog.substring(indexOfFirstSpace + 1, currentLog.length());
            System.out.println(restOfLog);
            
            if(restOfLog.charAt(0) >= 'A') {
                letterLogs.put(restOfLog, identifier);
            }
            else { // is a digit
                digitLogs.add(new AbstractMap.SimpleEntry<String, String>(restOfLog, identifier));
            }
        }
        
        String[] ret = new String[letterLogs.size() + digitLogs.size()];
        
        i = 0;
        for(Map.Entry<String, String> entry: letterLogs.entrySet()) {
            ret[i] = entry.getValue() + entry.getKey();
            ++i;
        }
        for(AbstractMap.SimpleEntry<String, String> simpleEntry: digitLogs) {
            ret[i] = simpleEntry.getValue() + simpleEntry.getKey();
            ++i;
        }
        
        
        return ret;
    }
}
