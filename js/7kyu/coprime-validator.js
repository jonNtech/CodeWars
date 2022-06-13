function isCoprime(x, y) {
  const min = Math.min(x, y)
  
  for (let i = 2; i <= min; i++){
    if(x % i === 0 && y % i === 0){
    return false
    } 
   } return true
}
