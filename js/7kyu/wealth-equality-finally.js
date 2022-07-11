function redistributeWealth(wealth) {
  let len = wealth.length
  let avg = wealth.reduce((a,b) => a+b, 0)/ len;
  for (let i = 0; i < len; i++){
    wealth[i] = avg
    }
}



function redistributeWealth(wealth) {
  wealth = wealth.fill((wealth.reduce(function(a, b) {
    return a + b;})) / wealth.length);
}
