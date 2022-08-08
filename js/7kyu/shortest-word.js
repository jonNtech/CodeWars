function findShort(s){
  const result = Math.min(...s.split(' ').map((word) => word.length));
  
  return result
}


function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
