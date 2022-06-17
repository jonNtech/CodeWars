function vowelIndices(word){
  let vowels = 'aeiouy'
  let result = []
  let wordArr = word.toLowerCase().split('')
  wordArr.forEach( (x,i) => {
    if(vowels.indexOf(x) !== -1) {
      result.push(i + 1)
    }
  })
  return result
}

// OR

// function vowelIndices(word,a=[]){
//   return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
// }
