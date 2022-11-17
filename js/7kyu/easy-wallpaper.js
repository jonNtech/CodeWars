function toWord(n) {
  var words = ["zero", "one", "two", "three", "four", "five", "six", "seven", 
               "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", 
               "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
  return words[n];
}

function wallpaper(l, w, h) {
  if ([l,w,h].indexOf(0) >= 0) {
    return "zero";
  } else {
    var roll = 5.2;
    var buffer = 1.15;;
    var need = (l*h)*2 + (w*h)*2;
    return toWord(Math.ceil(need/roll * buffer));
  }
}


// 

const wallpaper = (l, w, h) =>
  [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `ten`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`, `twenty`]
    [l && w ? Math.ceil(2 * (l + w) * h / 5.2 * 1.15) : 0];
