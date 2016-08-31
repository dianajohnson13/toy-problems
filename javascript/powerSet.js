// Return an array that contains the power set of a given string. 
// The power set is a set of all the possible subsets, including the empty set.
  // each subset should be sorted alphabetically 
  // do not duplicate subsets
  // ingore duplicate chars in the initial string

function powerSet (str) {
  var subsets = {};

  for (var i = 0; i < str.length; i++) {
    subsets[str[i]] = true;
  }

  var uniqueChars = Object.keys(subsets).sort();

  function findSubsets(subset, chars) {
    subsets[subset.sort().join("")] = true;
    if (chars.length === 0) return;

    for (var j = 0; j < chars.length; j++) {
      findSubsets(subset.concat(chars[j]), chars.slice(0, j).concat(chars.slice(j+1)));
    }
  }

  findSubsets([""], uniqueChars);
  return Object.keys(subsets);
}
