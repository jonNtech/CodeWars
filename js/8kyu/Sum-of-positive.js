function positiveSum(arr) {
  if(arr.length == 0){
    return 0
  } 
  let posNum  = arr.filter(x => x > 0)
  if (posNum.length == 0) {
    return 0
  }  
  let result = posNum.reduce((acc, i) => acc + i)
  return result
}


// function positiveSum (arr) {
//   return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
// }
