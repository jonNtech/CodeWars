// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24



function grow(x){
    let result = x.reduce((product, current) => product * current, 1)
    return result
}

// use reduce to iterate the array and set each element times the current product. NOTE product has to start at 1 not 0. 0 * anything would have it equal 0.
