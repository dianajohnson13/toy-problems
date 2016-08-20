// Given a number of rounds n, return all the possible rock-paper-scissors 
// play possibilities for that number of rounds.

function rockPaperPermutation (roundCount) { 
  if (roundCount === 0) return [];

  var plays = ['r', 'p', 's'];

  var findPossibilities = function(currRound, possibilities) {
    if (currRound === 0) return possibilities;

    var newPossibilities = [];
    possibilities.forEach(function(possibility) {
      plays.forEach(function(play) {
        newPossibilities.push(possibility + play);
      });
    });
    
    possibilities = newPossibilities
    return findPossibilities(currRound - 1, newPossibilities)
  }

  return findPossibilities(roundCount, ['']);
}
