// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F








// first split the string into an array and then get the first letter of each word. then put it back into the desired string and upper case them

function abbrevName(name){
      let words = name.split(' ')
    let firstLetter = words[0].slice(0,1)
    let secondLetter = words[1].slice(0,1)
        
    let result = `${firstLetter}.${secondLetter}`.toUpperCase()
      return result
  
  }
  
  //   OR


function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
  
