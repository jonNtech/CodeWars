function XO(str) {
  let arr = str.toLowerCase().split("")
  let numOfO = 0
  let numOfX = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == "x"){
      numOfX++ 
    } else if (arr[i] == "o"){
      numOfO++
    }
  }
  console.log(numOfO, numOfX)
  return numOfO === numOfX
}


const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
