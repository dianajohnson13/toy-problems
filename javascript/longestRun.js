// Write a function that, given a string, finds the 
// longest run of identical characters and returns an 
// array containing the start and end indices of that run. 
// If there are two runs of equal length, return the 
// first one. Return [0,0] for no runs.

function longestRun(str) {
  var longestLen = 1;
  var longRun = [0, 0];

  for (var i = 0; i < str.length - 1; i++) {
    var currRunLen = 0;
    j = i + 1;
    
    while (str[j] === str[i]) {
      currRunLen++;
      if (currRunLen > longestLen) {
        longRun = [i, j]
      }
      j++;
    }

    i = j;
  }

  return longRun;

}
