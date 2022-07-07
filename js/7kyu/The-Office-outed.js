function outed(meet, boss){
  let names = Object.keys(meet)
  let score = names.reduce((acc,value) => acc + meet[value], 0) + meet[boss]
  return score / names.length > 5 ? "Nice Work Champ!" : "Get Out Now!"
}



// OR

function outed(meet, boss){
  var sum=0;
  var count=0;
  for (var key in meet)
    if (key!=boss)
    {
      sum+=meet[key];
      count++;
    }  
    else
    {
      sum+=meet[key]*2;
      count++;
    }
  return sum/count<=5?'Get Out Now!':'Nice Work Champ!';
}
