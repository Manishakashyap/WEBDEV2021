// consist of many functions
// it have predefined functions

// // library is a set of Reusable functions
// console.log('something')
// // node js uses V8 engine so indirectly we are using V8 engine to run js file
// for(var i =0;i<10;i++){
//     console.log('iteration',i+1)
// }
// console.log(window)

// setTimeout(() => {
//     console.log('hi')
// },5000)

// console.log(module.exports)


// const greet = () => {
//  module.exports = 'hi'
    
//}
//console.log(module)


const greet = () => 'hi'
    
module.exports.greet = greet

console.log(module)

console.log('i am index.js')

