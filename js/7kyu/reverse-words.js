function reverseWords(str) {
  let rev = str.split(" ")
  let result = rev.map(e => e.split("").reverse().join(""))
  return result.join(" ")
}


/// Or

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
