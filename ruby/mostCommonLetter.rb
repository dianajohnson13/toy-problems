# Write a method that takes in a string. Your method should return the
# most common letter in the string, and a count of how many times it
# appears.

def most_common_letter(string)
  most_common = ""
  highest_occurance = 0
  
  counter = {}
  i = 0
  
  while i < string.length 
    counter[string[i]].nil? ? counter[string[i]] = 1 : counter[string[i]] += 1
    i += 1
  end
  
  counter.each do |char, count|
    if count > highest_occurance
      most_common = char
      highest_occurance = count
    end
  end
  
  return [most_common, highest_occurance]
end
