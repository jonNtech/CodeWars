function countRedBeads(n) {
  if (n <2){
    return 0
  } else {
    return (n-1)*2
  }
}


//  OR

function countRedBeads(n) {
  return n < 2 ? 0 : 2 * n - 2;
}
