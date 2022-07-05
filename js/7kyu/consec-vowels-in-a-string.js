function getTheVowels(word) {
  let count = 0
  let vowels = "aeiou"
  let vowelIndex = 0
  for (let i = 0; i < word.length; i++){
    if (word[i] == vowels[vowelIndex]) {
      count ++
      if(vowelIndex == 4){
        vowelIndex = 0
      } else {
      vowelIndex++
      }
    }
  }
  return count;
}
