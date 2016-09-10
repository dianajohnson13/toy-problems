// iterate over a string as each time removing any pair of adjacent matching characters
// until it is reduced as much as possible to no adjacent matching characters  

// Examples:
  // aaabccddd => abd
  // baab => empty string
  // aa => empty string

function reduceString (str) {

  while (true) {
    var matchesFound = false;
    var reducedString = "";
    for (var i = 0; i < str.length ; i++) {
      if (str[i] === str[i + 1]) {
        matchesFound = true;
        i++;
      } else {
        reducedString += str[i];
      }
    }

    if (!matchesFound) return reducedString;

    str = reducedString;
  }

}

