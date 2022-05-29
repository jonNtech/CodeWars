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

  console.log( sumMul(1,35) )