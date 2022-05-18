function persistence(num) {
  let i = 0;
  let arr = num.toString().split('');
  while(arr.length != 1){
    arr = arr.reduce((x, y) => x *= +y, 1).toString().split('');
    i++;
  }
 return i; 
}

// OR


// function persistence(num) {
//    for (var i = 0; num > 9; i++) {
//      num = num.toString().split('').reduce((t, c) => c * t);
//    }
//    return i;
// }
