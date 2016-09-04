// convert roman numerals to a digit number - romanNumeralToDigits

var numeralToNum = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function romanNumeralToDigits (romanNumeral) {
  var sum = 0;
  
  for (var i = romanNumeral.length - 1; i >= 0; i--) {
    if (numeralToNum[romanNumeral[i]] === undefined) {
       return "null";
    }
    if (i === 0) {
      sum += numeralToNum[romanNumeral[i]];
    } else {
      if (numeralToNum[romanNumeral[i - 1]] < numeralToNum[romanNumeral[i]]) {
        sum += numeralToNum[romanNumeral[i]] - numeralToNum[romanNumeral[i - 1]];
          i--;
      } else {
        sum += numeralToNum[romanNumeral[i]];
      }
    }
  }
  return sum;
}
