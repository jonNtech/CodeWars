function sumOfN(n) {
  let result = []
   result[0] = 0
  for (let i = 1; i < Math.abs(n) + 1; i++){
    if (n > 0) {
      result[i] = result[i-1] + i
      
    } else {
      result[i] = result[i-1] - i
    }
  }
  return result
}


// OR 


