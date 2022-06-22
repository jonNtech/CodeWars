function getMiddle(s) {
  if (s.length < 3){
    return s
  }
    let middle = Math.ceil(s.length / 2) - 1
    let result = ""
    if (s.length % 2 === 0) {
      return s.slice(middle, (middle + 2))
    } else {
      return s.slice(middle, (middle + 1))
    }
}


//    OR

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }
