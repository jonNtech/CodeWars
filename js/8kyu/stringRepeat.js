// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
    let repeatedString = "";
  while (n > 0) {
    repeatedString += s;
    n--;
  }
  return repeatedString;
}
 console.log(repeatStr(3, 'hi')) 
