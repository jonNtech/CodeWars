var summation = function (num) {
 let result   = 0
 for (let i =1; i <= num; i++){
   result += i
 }
  return result
}


// or

const summation = n => n * (n + 1) / 2;

function summation(num) {
  return num * (num + 1) / 2
}
