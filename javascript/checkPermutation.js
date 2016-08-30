// Given two strings, check if one is a permutation of the other.

function checkPermutation(str1, str2) {
  return str1.split("").sort().join() === str2.split("").sort().join();
}

function checkPermutation2(str1, str2) {

  function countChars(str) {
    var charCount = {};
    for (var i = 0; i < str.length; i++) {
      charCount[str[i]] === undefined ? charCount[str[i]] = 1 : charCount[str[i]]++;
    }
    return charCount;
  }

  var str1CharCount = countChars(str1);
  var str2CharCount = countChars(str2);

  for (var char in str1CharCount) {
    if (str2CharCount[char] !== str1CharCount[char]) return false;
  }

  return true;
}
