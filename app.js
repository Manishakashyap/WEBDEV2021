let greet = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve("Welcome")
},5000)
})

greet.then(value => {
    console.log(value)
    return "Welcome Again"
}).then(newValue =>{
    console.log(newValue)
   
})