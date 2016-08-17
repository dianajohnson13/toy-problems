# Write a program that, given a sentence where each word has a single digit positive integer 
  # as a prefix and suffix, swaps the numbers while retaining the word in between. Words in the 
  # sentence are delimited from each other by a space.


def swap_nums(string)
  words = string.split(" ")
  words.each do |word| 
    word[0], word[word.length - 1] = word[word.length - 1], word[0]
  end

  return words.join(" ")
end
