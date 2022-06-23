function spongeMeme(sentence) {
return sentence.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
} 


//   OR


const spongeMeme = sentence => 
  sentence.split('').map((letter, i) => 
    i % 2 ? letter.toLowerCase() : letter.toUpperCase()
  ).join('')
