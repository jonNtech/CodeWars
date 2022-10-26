function nthSmallest(arr, pos){
  let result = arr.sort((a,b) => a-b)
  return result[pos-1]
}




//   or

function nthSmallest(arr, pos){
  let sorted = arr.sort((a,b) => a-b);
  
  return sorted[pos-1];
}


const nthSmallest=(arr, pos)=>arr.sort((a,b)=>a-b)[pos-1];
