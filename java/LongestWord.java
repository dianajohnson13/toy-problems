public class LongestWord {
  
  public String findLongestWord(String[] words) {
    String longestWord = "";
    int longestLength = 0;

    for (String word : words) {
      int wordLen = word.length();
      if (wordLen > longestLength) {
        longestWord = word;
        longestLength = wordLen;
      }
    }

    return longestWord;
  }

  public static void main (String[] args) {
    LongestWord longestWordFinder = new LongestWord();

    System.out.println(longestWordFinder.findLongestWord(args));
  }

}