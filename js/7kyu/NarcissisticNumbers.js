// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.





function isNarcissistic(n){
    
    let numStr = n.toString().split('')
    let splitter = numStr.length
    let arr = numStr.map(a => Math.pow(a,splitter))
    let result = arr.reduce((a,b) => a+b)
    if(n ===result){
      return true 
    } else {
    return false
  }
}


//  OR

function isNarcissistic(n) {
  return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
}


function isNarcissistic(n){
  return n === +n.toString().split('').reduce((s, v, i, arr) => s + Math.pow(v, arr.length),0)
}
