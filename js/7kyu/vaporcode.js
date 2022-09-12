function vaporcode(string) {
  let result = string.toUpperCase().split(' ').join('')
   
  return result.split('').join('  ')
}


function vaporcode(string) {
  let arr = string.toUpperCase().split('')
  let noSpace = arr.filter(item => item !== ' ')
  let result = noSpace.join('  ')
  return result;
}
