function switcheroo(x){
   let result = x.split("").map((x)=> {
     if (x === "a"){
       return "b"
     } else if (x === "b"){
       return "a"
     } else {
       return 'c'
     }
   })
  return result.join('')
}


/// OR

const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")
