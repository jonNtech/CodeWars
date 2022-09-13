function min(arr, toReturn) {
  let result = Math.min(...arr)
  if (toReturn == "value") {
    return result
  } else {
    return arr.indexOf(result)
  }
}


const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));


function min( array, outer ) {
  return outer === 'index' ? array.indexOf(Math.min(...array)) : Math.min(...array)
}
