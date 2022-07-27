function removeRotten(bagOfFruits){
  return bagOfFruits ? bagOfFruits.map(x => x.toLowerCase().replace(/rotten/ig,"")) : [];
}




function removeRotten(bagOfFruits){
  if(!bagOfFruits) { return []; }
  
  return bagOfFruits.map(function(fruit) {
    return fruit.replace("rotten", "").toLowerCase();
  });
}
