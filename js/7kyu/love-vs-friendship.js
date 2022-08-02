function wordsToMarks(string){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = 0;
  
  for (let i = 0; i < string.length; i++) {
    result += (alphabet.indexOf(string[i]) + 1);
  }
  
  return result;
}





const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)
