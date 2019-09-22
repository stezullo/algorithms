import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // O(n) algorithm
    static long repeatedString(String s, long n) {
        long length = (s != null && s.length() > 0) ? s.length() : 0;
        
        if(length == 0) return length;
        
        long sum = 0;

        long limit = n / length;
        long rest = n % length;

        // O(s.length())
        for(long i = 0; i < length; i++) {
            if('a' == s.charAt((int)i)) {
                sum += limit;
            }
        }

        // O(n / s.length())
        for(long i = 0; i < rest; i++) {
            if('a' == s.charAt((int)i)) {
                ++sum;
            }
        }

        return sum;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = scanner.nextLine();

        long n = scanner.nextLong();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        long result = repeatedString(s, n);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
