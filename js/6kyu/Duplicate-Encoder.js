// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!



function duplicateEncode(word){
    let result = word.toLowerCase().split("").map((l, ind, arr)=> arr.indexOf(l)=== arr.lastIndexOf(l) ? "(" :")")
    return result.join("")
}



// OR


function countCharacters(chars) {
  return chars
    .reduce( function(memo, char){
      memo[char] = memo[char] ? memo[char] + 1 : 1;
      return memo;
    }, {});
}

function duplicateEncode(word){
  const chars = word.split('').map(ch => ch.toLowerCase());
  const charsCount = countCharacters(chars);
  return chars
    .map( ch => charsCount[ch] > 1 ? ')' : '(' )
    .join('');
}


function duplicateEncode(string){
   var occurances = string.toLowerCase().split('').reduce(function(occ, cha){
      occ[cha] = (occ[cha] || 0) + 1;
      return occ;
   }, {});
   return string.toLowerCase().replace(/[\S\s]/g, function(cha){
      return occurances[cha] > 1 ? ')' : '(';
   });
}
