function race(v1, v2, g) {
  if (v2 < v1) { return null; }
  
  let seconds = Math.floor(g / (v2 - v1) * 3600);
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds - h * 3600) / 60);
  let s = seconds - h * 3600 - m * 60;
  
  return [h, m, s];
}



//OR
