function bubbleSort (arr) {
  var swapsNeeded = true;

  while (swapsNeeded) {
    swapsNeeded = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapsNeeded = true;
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
}
