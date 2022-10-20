function repeats(arr){
     return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((a, b) => a + b);
}

//or

function repeats(arr) {
  let seen = new Set();
  let sum = 0;
  
  for (let v of arr) {
    if (!seen.has(v)) {
      seen.add(v);
      sum += v;
    } else {
      sum -= v;
    }
  }
  
  return sum;
};


function repeats(arr) {
  let i;
  let sum = 0;
  arr.sort((a, b) => {
    return a - b;
  });
  for (i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      sum += arr[i];
      i--;
    }
  }

  return sum;
};
