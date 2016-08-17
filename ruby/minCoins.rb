# You are given 3 types of coins of value 1, 3 and 5. 
# You are also given a total which you have to arrive at.
# Find the minimum number of coins to arrive at it.


def min_coins(total)
  coin_count = 0
  remainder = total

  [5, 3, 1].each do |coin|
    coin_count += remainder / coin
    remainder = remainder % coin
  end

  return coin_count
end
