// DEFINE YOUR FUNCTION BELOW:
function sumArray(arr) {
    let newArr =  arr.reduce(function(a, b) {
      return a + b;
    });
  return newArr;
}
