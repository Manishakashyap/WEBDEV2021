

// everything is an object (properties and methods)
//javascript a interpreted language

console.log("Manisha") // console is a object and log is its method
console.warn("Warning") // console is a object and warn is its method
console.error("Hello")  // console is a object and error is its method
// type script is tightly scripted and js is not that typescript is converted in js to run in browser

// premitive datatype in js non-premitive datatype............................

// string
console.log(typeof "Hello Word")
console.log(typeof "H")

// numbers
console.log(typeof 78)
console.log(typeof 78.564)
console.log(typeof 785456457968465186768465464)
console.log(typeof -6954)
console.log(typeof -52.78)

// booleans
console.log(typeof true)
console.log(typeof false)

// variables
var age = 19
console.log(age)

var age_new
console.log(age_new) // the var is not defined


// null
var age_new1 = null
console.log( typeof age_new1) //null is actually a value
 //null is object and undefined is undefined


 // undefined
 var main = 19
console.log( typeof Name)

//symbol

//non-premitive datatypes...................................

//array
var arr = [1,2,3,4]
console.log(typeof arr)
console.log(arr.length)

arr.push(5)
console.log(arr)
console.log(arr.length) //compiler work here from top to bottom


// var age1 = 19

const age1 = 19 //cant't change the value of constant
// age1 = 22
console.log(age1)

//operators..............................................

//Arithemetic operators
var a = 5
var b = 6
 console.log('a+b', a+b)
 console.log('b-a', b-a)
 console.log('a*b', a*b)
 console.log('b/a', b/a)
 console.log('a%b', a%b)
 console.log('b**a', b**a)

 //assignment operators
  var b =11 
   console.log("b",b)
   b += 1
   console.log("b",b)
   b ++
   console.log("b",b)
   b -= 1
   console.log("b",b)
   b --
   console.log("b",b)

   var c =10
   console.warn(c++) //log the value of c first then increment
   console.warn(++c) //do the increment first then log

   //comparison operators
   var d = 10
   var e = 2
   var f = '10'
   console.log(d>e)
   console.log(d<e)
   console.log(d==e)
   console.log(d>=e)
   console.log(d>=e)

   console.warn(d==f)
   console.log(d!=f)
   console.log(d===f)

   console.warn(d==f)
   console.warn(d===f)
   console.warn(d+f) //concatinate 

   //logical operators....
   console.log('true && true ', true && true)
   console.log('true && false' , true && false)
   console.log('false && true' , true && false)
   console.log('false && false' , true && false)

   console.log('true || true ', true && true)
   console.log('true  || false' , true && false)
   console.log('false || true' , true && false)
   console.log('false || false' , true && false)


// typecast in js homework

