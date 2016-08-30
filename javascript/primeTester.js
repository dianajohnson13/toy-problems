// Write a function that accepts a number and returns true if it’s a prime number, 
// false if it’s not.

function primeTester(num) {
  var midpoint = Math.ceil(num / 2);

  for (var i = 2; i < midpoint + 1; i++) {
    if (num % midpoint === 0) return false;

    midpoint = Math.ceil(num / i);
  }

  return true;
}
