// Given a single input string, write a function that produces all possible 
// anagrams of a string and outputs them as an array.


function allAnagrams(str) {
  var anagrams = {};

  function makeAnagrams(currChars, remainingChars) {
    if (remainingChars.length === 0) {
      anagrams[currChars] = true;
      return;
    }

    for (var i = 0; i < remainingChars.length; i++) {
      var nextCurr = currChars + remainingChars[i];
      var nextRemaining = remainingChars.slice(0, i).concat(remainingChars.slice(i+1)); 
      makeAnagrams(nextCurr, nextRemaining);
    }
  }

  makeAnagrams("", str.split(""));
  return Object.keys(anagrams);
}

// input: "abc"
// output: ["abc", "bac", "cab", "cba", "bca", "acb"]
