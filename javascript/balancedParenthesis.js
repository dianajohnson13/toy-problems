// Given a string, return true if it contains balanced parenthesis/ brackets:
// (), [], {} 

function isBalanced(str) {
  var usedParens = [];
  var temp = [];
  var parenthesisTypes = {
    "{": "left",
    "(": "left",
    "[": "left",
    "}": "right",
    ")": "right",
    "]": "right"
  }
  var parenthesisMatches = {
    "}": "{",
    ")": "(",
    "]": "["
  }

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (parenthesisTypes[char] === "left") {
      usedParens.push(char);

    } else if (parenthesisTypes[char] === "right") {
      if (usedParens.length === 0) return false; 

      for (var j = 0; j < usedParens.length; j++) {
        var used = usedParens.pop();
        if (parenthesisMatches[char] === used) {
          usedParens = usedParens.concat(temp);
          temp = [];
          break;
        } else if (usedParens.length === 0) {
          return false;
        } else {
          temp.shift(used);
        }
      }

    }
    // if it is not a parenthesis, skip it...
  }

  return (usedParens.length === 0) ? true: false;
}

