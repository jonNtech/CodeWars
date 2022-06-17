function sumTwoSmallestNumbers(numbers) {  
  let sortedNums = numbers.sort((a,b) => a-b)
  return sortedNums[0] + sortedNums[1]
}


// OR



// function sumTwoSmallestNumbers(numbers) {  
//   var min = Number.MAX_SAFE_INTEGER;
//   var secondMin = Number.MAX_SAFE_INTEGER;
  
//   var n;
//   for (i = 0; i < numbers.length; i++) {
//     n = numbers[i];
//     if(n < min) {
//       secondMin = min;
//       min = n;
//     } else if( n < secondMin ) {
//       secondMin = n;
//     }
//   }
  
//   return min + secondMin;
// }
