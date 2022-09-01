function fireFight(s){
let result = s.split(' ').map(x => {
  if (x === "Fire") {
    return "~~"
}else{
    return x
}})
  return result.join(' ')
}



// OR


const fireFight = s =>
  s.replace(/Fire/g, `~~`);


function fireFight(s){
  var arr=s.split(' ');
  for (var i=0; i<arr.length; ++i)
    if (arr[i]=='Fire')
      arr[i]='~~';
  return arr.join(' ');
}
