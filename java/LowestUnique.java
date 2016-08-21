// There is a game where each player picks a number from 1 to 9, writes it on a paper 
// and gives to a guide. A player wins if his number is the lowest unique. We may have 
// 10-20 players in our game.
// Print a winner's position or 0 in case there is no winner. In the first line of 
// input sample the lowest unique number is 6. So player 5 wins.

import java.util.HashMap;
import java.util.*;

public class LowestUnique {

    public Integer[] strToIntArray(String[] numStr) {
      int arrLength = numStr.length;
      Integer[] intArr = new Integer[arrLength];
      
      for (Integer count = 0; count < intArr.length ; count++) {
        intArr[count] = Integer.parseInt(numStr[count]);
      }

      return intArr;
    }

    public Integer find_winner(Integer[] nums) {
      int lowestUnique;
      int largestNum = 0;
      // count up all nums for finding unique later
      HashMap <Integer,Integer> numCounts = new HashMap <Integer,Integer>();

      for (Integer num : nums) {
        if (numCounts.get(num) == null) {
          numCounts.put(num, 1);
          if (num > largestNum) {
            largestNum = num;
          }
        } else {
          numCounts.put(num, numCounts.get(num) + 1);
        }
      }

      // set lowestUnique to the largest num so it will be decreased
      lowestUnique = largestNum;
      Boolean uniqueFound = false;
      // go through all nums if num is unique, consider for lowestUnique
      for (Integer num : numCounts.keySet()) {
        if (numCounts.get(num) == 1 && lowestUnique >= num) {
          lowestUnique = num;
          uniqueFound = true;
        }
      }

      return (uniqueFound) ? lowestUnique : 0;
    } 
    
    public static void main (String[] args) {
        LowestUnique newLowUnique = new LowestUnique();
        Integer[] convertedNums = newLowUnique.strToIntArray(args);
        Integer result = newLowUnique.find_winner(convertedNums);
        System.out.println(result);
    }
}
