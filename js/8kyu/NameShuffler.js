// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"



function nameShuffler(str){
    let result = str.split(' ').reverse().join(' ')
    return result
  }



// OR


const nameShuffler = str => str.split(' ').reverse().join(' ');
