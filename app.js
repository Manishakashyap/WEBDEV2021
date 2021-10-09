console.log(module)
console.log(require('./index'))




// const stuff = require('./index') //export part of module
// console.log(stuff)

// const stuff = require('./utils') 
// console.log(stuff)

const {add,sub ,mul,divide, message } =
require('./utils') 


add()
sub()
mul()
divide()
console.log(message)