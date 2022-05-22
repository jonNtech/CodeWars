function hello(name) {
    if(name == undefined || name ==''){
        return 'Hello, World!'
    } else {
    let name1 = name.toLowerCase()
    let realName = name1.charAt(0).toUpperCase() + name1.slice(1) 
    return `Hello, ${realName}!`
    }
}

console.log( hello('johN') )
console.log( hello() )
console.log( hello('') )


// OR 

// const hello = s =>
//   `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;