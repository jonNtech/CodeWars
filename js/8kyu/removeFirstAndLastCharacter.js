// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.









// slice off the first and last letters

function removeChar(str) {
  return str.slice(1, -1);
}

// OR

//turn string into an array. pop off and shift off the first and last indexes of the array.  Join the array back into a string and return

function removeChar(str){
let arr = str.split('')
    arr.pop()
    arr.shift()
    let result = arr.join('')                
    
    return result
   };

