// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.



function magNumber(info){
  let gun = info[0]
  let blocks = info[1]
  let bullets = 0
  if (gun === "PT92"){
    bullets = 17
  } else if (gun === "M4A1"|| gun === "M16A2"){
    bullets = 30
  } else {
    bullets = 5
  }
  let result = Math.ceil(blocks*3 / bullets)
  return result
}

// OR

magNumber = info => Math.ceil(info[1] * 3 / {PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5}[info[0]])
