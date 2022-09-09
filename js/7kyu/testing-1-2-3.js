var number=function(array){
  if (array == []){
    return []
  } else {
    let result = array.map((x, i) => {
      return `${i+1}: ${x}`
    })
    return result
  }
}

// OR 


var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}



var number = function(arr) {
var newArr = [];
  if (arr.length === 0) {
    return [];
  } else {
    for (var i = 0, len = arr.length; i < len; i += 1) {
      newArr.push((i + 1) + ': ' + arr[i]);
    }
  }
  return newArr;
}
