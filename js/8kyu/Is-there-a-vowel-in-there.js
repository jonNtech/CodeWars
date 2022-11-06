// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


function isVow(a){
  let result =  a.map((x,i) => "aeiou".includes(l=String.fromCharCode(x)) ? l: x)
  return result
}


// OR

function isVow(a){
  for (var i=0, l=a.length; i<l; ++i)
  {
    var char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char;
  }
  
  return a;
}


const isVow = a =>{
  let map = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u',
  }
  return a.map( num => map[num] ? map[num] : num);
}
