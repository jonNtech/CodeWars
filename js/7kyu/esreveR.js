reverse = function(array) {
  let result = []
  for (let i = (array.length - 1); i >= 0; i--){
    result.push(array[i])
  }
  return result
}


//   or

reverse = function(array) {
  return array.reduceRight(function(a, v){ return a.push(v), a }, []);
}



function reverse(array) {
  return array.reduce(function(a, b) {
    return [b].concat(a)
  }, []);
}
