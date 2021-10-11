// //.....................Node.js..................
// const path = require('path')
// // console.log(path)
// // console.log(path.resolve('./app.js'))

// console.log(path.relative('/',"./app.js"))
// // utils ka path respect to temp temp util.js
// console.log(path.resolve("./app.js"))
// //if we use absolute path  that in our computer we cant use in another computer


 // Users\Manisha\Desktop\WEBDEV2021\app.js=resolve
 // C:\Users\Manisha\Desktop\WEBDEV2021\app.js=relative


//................extention............
// const path = require('path')
// console.log(path.extname('./app.js'))



//................dirname...................
const path = require('path')
// console.log(path.dirname('./temp/utils.js'))

//.................__dirname.........
// console.log(__dirname)

//........path/join().............
console.log(path.join(__dirname,'app.js')) //same as resolve
//only diff is.....