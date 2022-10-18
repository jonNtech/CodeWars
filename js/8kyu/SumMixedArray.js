function sumMix(x){
  let result = 0 
    for (let i = 0; i < x.length; i++){
      result += Number(x[i])
    }
  return result
}



// Or


function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}


function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}
