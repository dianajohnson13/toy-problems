# Write a program to determine the largest sum of contiguous integers in a list.

def largest_sum(nums)
   largest_sum = nums[0]
   i = 0
   
   while i < nums.length
      sum = nums[i]
      j = i + 1
      while j <= nums.length
        largest_sum = sum if sum > largest_sum
        sum += nums[j] || 0
        j += 1
      end
      i += 1
   end
   
   return largest_sum
end
