// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.







// first count the "good"s that are in the array then use the if statement to get your desired return


function well(x){
 let goods = x.filter(x => x==='good').length
 if(goods === 0){
   return 'Fail!'
  }else if(goods <= 2){
   return 'Publish!' 
  } else if(goods > 2){
   return 'I smell a series!'
  }
}  



// OR


const wells = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
