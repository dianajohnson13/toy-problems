// You have a list of words. Letters of these words are mixed with extra 
    // symbols, so it is hard to define the beginning and end of each word. 
// Write a program that will clean up the words from extra numbers and symbols.
// Print the cleaned up words separated by spaces in lowercase letters.

function cleanWords (str) {
    var lowStr = str.toLowerCase();
    var words = [];

    for (var i = 0; i < lowStr.length; i++) {
        var letterAtI = lowStr.charCodeAt(i);
        if (letterAtI > 96 && letterAtI < 123) {
            var j = i + 1;
            while (j < lowStr.length && lowStr.charCodeAt(j) > 96 && lowStr.charCodeAt(j) < 123) {
                j++;
            }
            words.push(lowStr.slice(i, j));
            i = j;
        }
    }
    
    return words.join(" ");
}
