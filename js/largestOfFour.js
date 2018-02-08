function largestOfFour(array) {
  // You can do this!
  return array.map(maxArrayElement);
}
function maxArrayElement(array) {
  if (array.length === 0) return NaN;
  if (array.length === 1) return array[0];
  var max = array[0];
  for (var i=1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
