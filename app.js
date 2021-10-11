let greet = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve("Welcome")
},5000)
})
console.log(greet)

setTimeout(() =>{
    console.log(greet)
},6000)