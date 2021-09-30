

// //arrow function as6
// var add =  (a = 0, b = 0) => {  // => its like an shorthand
//    console.log('expression')     //replace arrow with function and nothing will change

//    var sum = a + b     
//    return sum
// }
// console.log(add(10, 20))
// //expression function or definition function which will be called when both are declared and defined


// //another shortcut
// var add =  (a = 0, b = 0) =>  a+b
// console.log(add(12,10))

// const greet = (Name) =>   'Hi '+ Name
// console.log(greet('Manisha'))


// //callback function => after something is completed this function is execute
 //var arr = ['goto GYM' , 'Eat Food','Clean House']

// for(var i=0;i<arr.length; i++){
//    console.log(arr[i])
// }

//foreach methad of array arr.forEach()
//call the function after a certain task after iteration
// var callbackFunction =(misthi,konsa_no) => {
//    console.log(misthi,konsa_no)
// }

// arr.forEach(callbackFunction)


// var arr = ['goto GYM' , 'Eat Food','Clean House']

// arr.forEach((element, index) => {
//    console.log(element, index)
// })

var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

// const callbackfunc = (misthi) =>{
//    console.log(misthi.target)
//    console.log(input.value)
// }

// button.addEventListener('click',callbackfunc)



// const callback = (event) => {
//    const inputvalue = input.value
//    const element = document.createElement('li')
//    const textnode = document.createTextNode(inputvalue)
//    element.appendChild(textnode)
//    list.appendChild(element)
// }

// button.addEventListener('click',callback)


var button = document.querySelector('button')
var body = document.querySelector('body')
const callback = (event) => {
   // body.classList.add('dark')
   body.classList.toggle('dark')

}
button.addEventListener('click',callback)

