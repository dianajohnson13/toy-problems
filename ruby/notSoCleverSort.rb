# For general problem description: https://www.codeeval.com/open_challenges/232/

def not_so_clever_sort(nums, iterations) 
    iterations_completed = 0

    while iterations_completed < iterations
        i = 0
        j = 1

        while j < nums.length
          if nums[i] > nums[j]
              nums[i], nums[j] = nums[j], nums[i]
              break
          end
            i += 1
            j += 1
        end
       iterations_completed += 1
    end
    
    return nums
end
