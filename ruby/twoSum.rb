# Write a method that takes an array of numbers. If a pair of numbers
# in the array sums to zero, return the positions of those two numbers.
# If no pair of numbers sums to zero, return `nil`.

def two_sum(nums)
  contents = {}
  
  nums.each_with_index do |num, i|
    if !contents[-num].nil?
      return [contents[-num], i]
    elsif contents[num].nil?
      contents[num] = i
    end
  end
  
  return nil
end

