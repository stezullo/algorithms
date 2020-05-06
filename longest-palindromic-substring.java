class Solution {
    public String longestPalindrome(String s) {
        if(s == null || s.length() < 1) return "";
    
        int start = 0, end = 0, len1 = 0, len2 = 0, len = 0;
    
        for(int i = 0; i < s.length(); i++) {
            len1 = expandFromCenter(s, i, i);
            len2 = expandFromCenter(s, i, i+1);
            len = Math.max(len1, len2);
            if(len > (end - start)) { 
                start = i - ((len - 1) / 2);
                end = i + (len / 2);
            }
        }
    
        return s.substring(start, end + 1);
    }
    
    public int expandFromCenter(String s, int left, int right) {
        if(s == null || left > right) return 0;
    
        while(left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;     
        }
    
        return right - left - 1;
    }
}
