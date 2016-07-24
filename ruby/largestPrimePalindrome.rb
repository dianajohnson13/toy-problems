# find the largest prime palindrome below high_num (1000).

def high_prime_palindrome(high_num)
  high_num.downto(1) do |num|
    if is_palindrome?(num.to_s) && is_prime?(num)
      return num
    end 
  end

  return nil
end

## helper methods
def is_prime?(num)
  if num < 2 
    return false
  end
  
  i = 2
  maxNum = num

  while i < maxNum 
    if num % i == 0
      return false
    else
      maxNum = num / i
      i += 1
    end
  end

  return true
end

def is_palindrome?(str)
  i = 0
  j = str.length - 1

  while i < str.length / 2
    if str[i] != str[j]
      return false
    end
    i += 1
    j -= 1
  end
  
  return true
end
