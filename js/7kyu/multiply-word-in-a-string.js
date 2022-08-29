function modifyMultiply (str,loc,num) {
let arr = str.split(" ")
let word = `${arr[loc]}-`
let result = word.repeat(num)
 return result.slice(0, -1)
} 


// OR 



function modifyMultiply(str,i,n) {
  return Array(n).fill(str.split(' ')[i]).join('-');
} 




function modifyMultiply (str,loc,num) {
  return (str.split(" ")[loc]+"-").repeat(num).slice(0,-1)
} 
