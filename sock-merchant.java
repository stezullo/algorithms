import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // O(N) to O(N^2) solution in Java 7
    static int sockMerchant(int n, int[] ar) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        int sum = 0;
        int couple = 0;

        for(int i = 0; i < n; i++) {
            if(!map.containsKey(ar[i])) {
                map.put(ar[i], 1);
            }
            else {
                couple = map.get(ar[i]) + 1;

                if(couple % 2 == 0) {
                    ++ sum;
                }
                map.put(ar[i], couple);
            }
        }

        return sum;

    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] ar = new int[n];

        String[] arItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int arItem = Integer.parseInt(arItems[i]);
            ar[i] = arItem;
        }

        int result = sockMerchant(n, ar);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
