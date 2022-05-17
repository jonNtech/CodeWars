// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.


function take(arr, n) {
  let result = arr.filter((x,index) => index < n)
  return result
}
