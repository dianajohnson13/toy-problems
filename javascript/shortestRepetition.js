// Write a program to determine the length of the shortest repetition in a string.
// https://www.codeeval.com/open_challenges/107/

function shortestRep(str) {
  var rep = str[0];
  var repidx = 0;
  var additional = "";

  for (var i = 1; i < str.length; i++) {
    if (str[i] === rep[repidx]) {
      additional += str[i];
      repidx === rep.length - 1 ? repidx = 0 : repidx++;
    } else {
      rep += additional + str[i];
      additional = "";
      repidx = 0;
    }
  }

  return rep.length;
}
