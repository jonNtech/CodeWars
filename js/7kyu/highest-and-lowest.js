function highAndLow(numbers){
  let result = numbers.split(' ').sort((a,b)=> a-b)
  return  `${result.slice(-1)} ${result[0]}`
  
}



// OR 


function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
