function getSum( a,b ) {
  if (a === b){
  return a
  } else {
    let top = Math.max(a,b)
    let bot = Math.min(a,b)
    let result = 0
    for (let i = bot; i <= top;i++){
      result += i
    }
    return result
  }
}



/// OR

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
