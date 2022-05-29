function sumMul(n,m){
    let result = []
    if (m <= 0 || n <= 0){
      return 'INVALID'
    } 
    for (let i = 1; i < m; i++){
        if(i % n === 0){
            result.push(i)
        }
    }
    return result.reduce((a,b)=> a+b)
}

<<<<<<< HEAD
  console.log( sumMul(1,35) )
=======
  console.log( sumMul(1,35) )
>>>>>>> 6d3a444c02edb93ffc52089fa3e992b0e5752d58
