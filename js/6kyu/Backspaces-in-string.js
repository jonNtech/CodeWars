function cleanString(s) {
  s = s.split(``)
	for (let i = 0; i < s.length; i++){
    if (s[i] === '#'){
      s[i] = ''
      s[i-1] = ''
      s=s.filter(x => x !== '')
      i-=2
    }
  }
  return s.join``
}

//OR


function clean_string(s) {
  const result = []
  for (const c of s) {
    if (c === "#") {
      result.pop()
    } else {
      result.push(c)
    }
  }
  return result.join("")
}



function cleanString(s) {
  let result = [];
  [...s].map((char) => (char === "#" ? result.pop() : result.push(char)));
  return result.join("");
}
