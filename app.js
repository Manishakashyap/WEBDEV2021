// //infinite loop ..........stack overflow.......................
// //stack memory gets full, no element can be pushed further
// console.log('one')

// console.log('two') 

// setTimeout(() =>{    //ascncronus task will run after all js work done
//    console.log('timer 2')
// },1000)

// setTimeout(() =>{
//    console.log('timer 1')
// },2000)

// console.log('three')
// console.log('three')
// console.log('three')
// console.log('three')
// console.log('three')
// console.log("three")
// //by browser run settimeout part of web API

// //..........................promise......................
// let value = new Promise((resolve,reject) => {
//    setTimeout(() => {
//       resolve('Hello')
//    },3000)
// })

// console.log(value)

// setTimeout(() =>{
//    console.log(value)
// },4000)

//..................fethch........not a js part

// let data = fetch('https://jsonplaceholder.typicode.com/users').then

// console.log(response)

// setTimeout(() => {
//    const data = response
//    console.log(data)
//    console.log(data.json()) //got error
// },2000)

let response = fetch('https://jsonplaceholder.typicode.com/users').then (res => res.json()).then(data => {
    console.log(data) // .then always return a new promise
})

data.forEach(element => {
   data.
   
});
