// //...............file system...............
const fs = require('fs')
// //access to read write on hard drive

// // fs.readFile('./test.txt','utf8',(error,data)=>{

// // if(error) console.log(error)
// // else console.log(data.toString())//buffer is raw data array 
// // // else console.log(data)
// // // else console.log(typeof data)
// // }) 


// console.log(fs.readFileSync('./test.txt','utf8'))

// console.log(`I'm a random log`)


//.................WriteFile.....................
// fs.writeFile('./test.txt',"HI ",(error) => {
//     if (error) console.log(error)
// })

fs.writeFile('./test.txt',`Appemd me ${fs.readFileSync('./test.txt','utf8')}`,(error) => {
    if (error) console.log(error)
})