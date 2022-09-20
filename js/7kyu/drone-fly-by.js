function flyBy(lamps, drone){
  if (drone.length > lamps.length) return 'o'.repeat(lamps.length)
  return 'o'.repeat(drone.length) + 'x'.repeat(lamps.length-drone.length);
}


// OR 

const flyBy = (lamps, drone) => [...lamps].fill(`o`, 0, drone.length).join(``)


function flyBy(lamps, drone){
  return lamps.split('')
              .map((item,index, arr) => index < drone.length ? 'o' : item)
              .join('')
}
