// Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
// Whole numbers and mixed fractions should be returned as improper fractions.

function fractionConverter(num) {
  var denominator = 0;

  while (true) {
    if (Math.round((num * denominator)) / denominator === num) {
      return Math.round((num * denominator)) + "/" + denominator;
    }
    denominator++;
  }
}
