function squareSum(numbers){
  if (numbers.length == 0) {
  return 0
  } else{
    let result = numbers.map(x => 
      Math.pow(x,2)
    )
  return result.reduce((a,b) => a+b)
  }
}





// // function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }
