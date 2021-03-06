// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]




function digitize(n) {
  let arr = n.toString().split('').reverse()
  let result = arr.map((x)=>Number(x))
  return result
}

// OR


function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
