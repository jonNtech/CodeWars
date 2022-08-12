// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  let result = []  
  for (let i = 0; i < array.length-1; i++){
    result.push(array[i] * array[i+1])
  }
  return Math.max(...result)
}

  console.log(adjacentElementsProduct([5, 8]), 40)
  console.log(adjacentElementsProduct([1, 2, 3]), 6)
  console.log(adjacentElementsProduct([1, 5, 10, 9]), 90)




//   //function adjacentElementsProduct(a) {
//   return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
// }