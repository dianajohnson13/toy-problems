// The major element in a sequence with the length of L is the element which 
// appears in a sequence more than L/2 times. The challenge is to find that 
// element in a sequence.
//For each sequence print out the major element or print "None" in case there is no such element.

import java.util.HashMap;
import java.util.*;

public class MajorElement {
    
  public Integer[] strArrToIntArr(String[] numStr) {
    int arrLength = numStr.length;
    Integer[] intArr = new Integer[arrLength];
    
    for (Integer count = 0; count < intArr.length ; count++) {
      intArr[count] = Integer.parseInt(numStr[count]);
    }

    return intArr;
  }

  public Integer findMajorElement(Integer[] els) {
    int numEls = els.length;

    HashMap <Integer,Integer> elCount = new HashMap <Integer,Integer>();
    for (Integer el : els) {
      Integer elValue = elCount.get(el);
      if (elValue == null) {
        elCount.put(el, 1);
      } else {
        elCount.put(el, elValue + 1);
      }
    }

    for (Integer el : elCount.keySet()) {
      if (elCount.get(el) > numEls / 2) {
        return el;
      }
    }

    return null;
  }

  public static void main (String[] args) {
    MajorElement majorElement = new MajorElement();
    Integer[] els = majorElement.strArrToIntArr(args);


    Integer result = majorElement.findMajorElement(els);

    if (result == null) {
      System.out.println("None");
    } else {
      System.out.println(result);
    }
  }

}
