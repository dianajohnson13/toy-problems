// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. 
// A single array item will count as a contiguous sum.


function greatestContiguousSum(nums) {
  var greatestSum = nums[0];

  for (var i = 0; i < nums.length; i++) {
    var sum = nums[i];
      if (sum > greatestSum) greatestSum = sum;
    for (var j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum > greatestSum) greatestSum = sum;
    }
  }

  return greatestSum;
}

