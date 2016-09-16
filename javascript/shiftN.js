// given an array and element N, move all elements equal to N to
// the end of the array.
// Do not reorder any other elements in the array.

function shiftN(arr, N) {
  var nCount = 0;

  for (var i = 0; i < arr.length; i++) {
    (arr[i] === N) ? nCount++ : arr[i - nCount] = arr[i];
  }

  for (nCount; nCount > 0; nCount--) {
    arr[arr.length - nCount] = N;
  }

  return arr;
}
