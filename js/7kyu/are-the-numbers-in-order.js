const inAscOrder = (arr) => {
  let newArr = [];
  for(let h = 0; h < arr.length; h++) {
    newArr.push(arr[h]);
  }
  newArr = newArr.sort((a, b) => a - b);

  for(let i = 0; i < arr.length; i++) {
    if(newArr[i] !== arr[i]) {
      return false;
    }
  }

  return true;
}

// OR 


const inAscOrder = a => a
  .slice()
  .sort((x, y) => x - y)
  .every((e, i) => e === a[i]);
