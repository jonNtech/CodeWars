function rakeGarden(garden) {
  let result = garden.split(' ').map(value => value == 'rock' ? 'rock' : 'gravel').join(' ')
  return result;
}





function rakeGarden(garden) { 

  var tab = garden.split(" ");
  for(var i=0; i<tab.length;i++){
    if(tab[i]!='rock' && tab[i]!='gravel'){
      tab[i] = 'gravel';
    }
  }
  var rakedGarden = tab.join(" ");

  return rakedGarden;
 }
