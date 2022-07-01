function openOrSenior(data) {
   return data.map(function(member) {
     if(member[0] >= 55 && member[1] > 7) {
       return 'Senior'
     } else {
       return 'Open'
     }
   });
}


//OR

function openOrSenior(data){
  var result = [];
  data.forEach(function(member) {
    if(member[0] >= 55 && member[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  })
  return result;
}
