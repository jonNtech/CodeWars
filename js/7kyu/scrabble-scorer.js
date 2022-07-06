function scrabbleScore(str){
 const values = {
  'a':1,
  'b':3,
  'c':3,
  'd':2,
  'e':1,
  'f':4,
  'g':2,
  'h':4,
  'i':1,
  'j':8,
  'k':5,
  'l':1,
  'm':3,
  'n':1,
  'o':1,
  'p':3,
  'q':10,
  'r':1,
  's':1,
  't':1,
  'u':1,
  'v':4,
  'w':4,
  'x':8,
  'y':4,
  'z':10,
  }
 let myStr = str.toLowerCase()
  myStr = myStr.replace(/\s/g, ""); // remove gaps
    
  let temp = 0;
  
  
   for (var i = 0; i < myStr.length; i++) {
        const char = myStr[i]
        if (myStr[char] == values.char) {
            temp = temp + values[char];
        }
    }
    return temp;
}


// OR

function scrabbleScore(str){
  return str.toUpperCase().split('').reduce(function(score,v){ return score + ($dict[v]||0)},0)
}//z.




function scrabbleScore(str){
  var output = 0;
  for (var i in str) {
    output += $dict[str[i].toUpperCase()] || 0;
  }
  return output;
}
