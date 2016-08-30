// A child is running up a staircase with n steps and can hop either 1 step, 2 steps,
// or 3 steps at a time. Implement a method to count how many possible ways the 
// child can run up the stairs. (without over hopping the last step!)

function possibleStepCombos(n) {
  var stepsPerHop = [1, 2, 3];
  var comboCount = 0;

  function getCombos(hopsMade, n) {
    if (n === 0) {
      comboCount += 1;
      return;
    } else if (n < 0) {
      return;
    }
    stepsPerHop.forEach(function(numSteps) {
      getCombos(hopsMade.concat(numSteps), n - numSteps)
    });
  }

  getCombos([], n);
  return comboCount;
}
