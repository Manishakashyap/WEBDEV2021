//Module is the file of code/object
//module.export.greet to export
//to import in another file require



// // const greet = () =>{
// //     console.log('gid')
// // }
// // console.log("Iran")

// const button = document.querySelector('button')
// const input = document.querySelector('input')
// const div = document.querySelector('div')

// console.log('hii')

// button.addEventListener('click', (req, res) => {
//      localStorage.setItem('InputVaalue',input.value)
//     div.innerHTML = input.value
    
//     //console.log(div.localStorage.getItem(InputValue))
//     //wrong for me

//      div.innerHTML = localStorage.getItem(inputvalue)

// })


//.......................localstorage....................

//console.log(localStorage)

//localStorage.setItem('InputValue',"something")
//localStorage.clear()
//console.log(localStorage.getItem("InputValue"))


const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

const arr = [1,23,45,45]
const val = JSON.stringify(arr)

console.log(arr)
console.log(val)

localStorage.setItem('val',JSON.stringify(arr))//give string

console.log(JSON.parse(localStorage.getItem('val')))//convert string to arr
