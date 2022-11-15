// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)


String.prototype.camelCase=function(){
  let newArr = this.trim().split('')
  let resultStr = []
  for (let i =0; i < newArr.length; i++){
    if(i ==0){
      resultStr.push(newArr[i].toString().toUpperCase())
      
    } else if (newArr[i] == ' '){
      resultStr.push(newArr[i+1].toString().toUpperCase())
      i++
    } else {
      resultStr.push(newArr[i])
    }
  }
  return resultStr.join('')
}


//OR


String.prototype.camelCase=function(){
   return this.split(' ').map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}

String.prototype.camelCase=function(){
  return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
}
