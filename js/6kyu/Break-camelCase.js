// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  let upCase = string.toUpperCase()
  let arr = [...string]
  let result = []
  for (let i = 0; i < string.length; i++) {
    if (arr[i] == upCase[i]) {
      result.push(' ' + arr[i])
    } else {
      result.push(arr[i])
    }
  }
  return result.join('')
}


console.log(solution('camelCasing'))
console.log(solution('camelCasingTest'))



/// OR 

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}


function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}
