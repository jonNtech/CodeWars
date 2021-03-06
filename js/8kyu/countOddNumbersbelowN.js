// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])


function oddCount(n){
    return Math.floor(n / 2)
}

// OR this but it eats memmory


function oddCount(n){
  let result = []
  let num = Math.floor(+n)
  for (let i = 1; i < num; i++){
    if (i % 2 === 1){
      result.push(i)
    }
  } return result.length
}
