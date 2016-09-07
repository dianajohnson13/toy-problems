// Print the longest word in a stepwise manner

// Ex.  longestInStepwise("cat dog hello") => "h *e **l ***l ****o"

function longestInStepwise (str) {
  var word = longestWord( str.split(" ") );
  var stepwiseWord = [];

  for (var i = 0; i < word.length; i++) {
    var segment = "";
    for (j = 0; j < i; j++) {
      segment += "*";
    }
    stepwiseWord.push(segment += word[i]);
  }

  return stepwiseWord.join(" ");
}

function longestWord(words) {
  var longWord = "";

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longWord.length) {
      longWord = words[i];
    }
  }

  return longWord;
}
