// Choose a number, reverse its digits and add it to the original. 
// If the sum is not a palindrome (which means, it is not the same number 
// from left to right and right to left), repeat this procedure.
// For each line of input, generate a line of output which is the number 
// of iterations (additions) to compute the palindrome and the resulting palindrome. 
// (they should be on one line and separated by a single space character).

import java.util.*;

public class ReverseAndAdd {
    
    public Boolean isPalindrome (String str) {
      int numChars = str.length();
      char[] chars = str.trim().toCharArray();

      for (int i = 0; i < numChars / 2; i++) {
        if (chars[i] != chars[numChars - 1 - i]) {
          return false;
        }
      }

      return true;
    }

    public String find_solution(String numStr) {
      int iterations = 0;

      while (true) {
        iterations++;
        String reversedNum = new StringBuilder(numStr).reverse().toString();
        numStr = "" + (Integer.parseInt(numStr) + Integer.parseInt(reversedNum));
        if (isPalindrome(numStr)) {
          return Integer.toString(iterations) + " " + numStr;
        }
      }

    }

    public static void main (String[] args) {
      int inputNum = Integer.parseInt(args[0]);
      // no known solution for 196
      if (inputNum >= 0 && inputNum != 196) {
        ReverseAndAdd newRaA = new ReverseAndAdd();
        String solution = newRaA.find_solution(args[0]);
        System.out.println(solution);
      } else {
        System.out.println("No solution found for " + inputNum);
      }

    }

}
