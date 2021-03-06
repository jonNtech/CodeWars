// Write a function that will check if two given characters are the same case.

// If any of characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters and not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1




function sameCase(a, b){
  if(/^[a-zA-Z]+$/.test(a) && /^[a-zA-Z]+$/.test(b)) {
   if ( (a ===a.toUpperCase() && b ===b.toUpperCase() ) || 
      (a ===a.toLowerCase() && b ===b.toLowerCase() )){
    return 1
  }  else if(a ===a.toUpperCase() && b ===b.toLowerCase() || a ===a.toLowerCase() && b ===b.toUpperCase()){
    return 0    
  }} else{
    return -1;
}}



// OR


function sameCase(a, b){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
    
    const checkCase = x => {
      if(x === x.toLowerCase()) return 'lower'
      if(x === x.toUpperCase()) return 'upper'
    }
  
    return checkCase(a) === checkCase(b) ? 1 : 0
  }
