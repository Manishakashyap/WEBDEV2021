// // console.log('A meassage')
// // console.log('A new message HII')


// //imported http module
// const http = require('http')
// // console.log(http)

// //crete server
// const server = http.createServer((request,response)=>{
//     // console.log(request)
//     // console.log(request.url) // localhost:3000/user
//     // console.log(request.headers) //o/p headers
//     console.log(request.method)
   
// })


// //listen method to run server
// server.listen(3000,()=>{
//     console.log(`server listening at PORT: ${3000}`)
// }) //chrome loading.........



//...................kartik code................
// const http = require('http')
// const fs = require('fs')
// const path = require('path')


// const server = http.createServer((request,response)=>{
//     // console.log(request.method)...my added line
//     // const path = request.url
//     // response.write(`you made a request to https ${path}`)
//     // response.write(`<h1>I'm a heading</h1>`)
//     const markup =fs.readFileSync(path.resolve('./index.html'))
//     response.write(markup)
//     response.end()
// })

// server.listen(3000,()=>{
//     console.log(`server listning at PORT: ${3000}`)
// })

//so why we need express if we have many files
const http = require('http')
const fs = require('fs')
const path = require('path')



const server = http.createServer((request,response)=>{
   
    const {url} = request
    // console.log(url)
    if (url == '/login'){
    response.write('<h1>Log in </h1>')
    response.end()
    }
    if (url == '/signup'){
        response.write('<h1>sign up</h1>')
        response.end()
    }
    

})

server.listen(3000,()=>{
    console.log(`server listning at PORT: ${3000}`)
})