// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b


function shorter_reverse_longer(a,b){
  if (a.length >= b.length){
    let str = a.split('').reverse().join('')
    return (`${b}${str}${b}`)
  } else {
    let str = b.split('').reverse().join('')
    return (`${a}${str}${a}`)
  }
}



/// OR

var shorter_reverse_longer = function(a,b) {
  var longest = a.length >= b.length ? a : b;
  var shortest = a.length >= b.length ? b : a;
  return shortest + longest.split('').reverse().join('') + shortest;
}
