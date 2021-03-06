// Task
// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

// Example
// Input: 1,3,5,6,7,8

// Output: 1,2,3,4,5,6,7,8


function pipeFix(numbers){
 let result =[]

 for (let i = (Math.min(...numbers)-1); i < (Math.max(...numbers)); i++){
   result.push(i+1)
 }
 return result
}


// OR


let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);
