// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"



const removeConsecutiveDuplicates = s => {
  return s.split(' ').filter((w,l,a) => w != a[l-1]).join(' ')
}



// double words out
const removeConsecutiveDuplicates = s =>{
  const out = [];
  s = s.split(' ');
  for (let i = 1; i <= s.length; i++){
    if (s[i] !== s[i-1]){
      out.push(s[i-1])
    }
  }
  return out.join(' ')
}


