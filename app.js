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
-//    setTimeout(() => {
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

// let response = fetch('https://jsonplaceholder.typicode.com/users').then (res => res.json()).then(data => {
//     console.log(data) // .then always return a new promise
// })

// data.forEach((element => {
//    data.
   
// });

// //pri singh
// var promise1 = new Promise((Name) => {
//     setTimeout(() => {
//         console.log("hello world")
//     }, 3000);
// })



// //anisha
// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("anisha")},3000);
// })



// //Anisha's code of task

//     ul = document.querySelector("ul");
//     let response = fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json()).then(data => {
//         console.log(data);
//         append_data = (element)=>{
//             lielement = document.createElement("li");
//             user_detail = element['name']+element['username']+element['email']
//             textnode = document.createTextNode(user_detail);
//             lielement.appendChild(textnode);
//             ul.appendChild(lielement);
//         }
//         data.forEach(append_data);
//     })


//     //kartik code
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(user => {
//             console.log(user)
//         })

//     })



    // ///practice
    // const table = document.querySelector('table')

    // console.log(table)

    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data =>{

    //     data.forEach(user => {
         
    //     let newRow = document.createElement('tr')
    //      let dataID = document.createElement('td')
    //      let dataIDtextNode = document.createTextNode(user.id)
         
    //      dataID.appendChild(dataIDtextNode)
    //      newRow.appendChild(dataID)

    //     table.appendChild(newRow)

    //     })
    // })



    const table = document.querySelector('table')

    // console.log(table)

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>{

        data.forEach(user => {
         
        let newRow = document.createElement('tr')
        let template = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>`

        console.log(template)

        newRow.appendChild(template)
        table.appendChild(newRow)
        })
    })

