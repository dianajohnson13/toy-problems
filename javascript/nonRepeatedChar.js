// Given a random input string, return the first non repeating character.
// For strings with all characters repeating, return 'all repeats'.
// (case sensitive)

function nonRepeatedChar(str) {
  charCounter = {};

  for (var i = 0; i < str.length; i++) {
    charCounter[str[i]] === undefined ? charCounter[str[i]] = 1 : charCounter[str[i]]++;
  }

  for (var j = 0; j < str.length; j++) {
    if (charCounter[str[j]] === 1) { 
      return str[j];
    }
  }

  return "all repeats";
}
