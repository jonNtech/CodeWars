const binaryArrayToNumber = arr => {
  let result = arr.join('')
  return parseInt(result, 2)
};


const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
