// // ,,,,,,,,,,,,Problem with Promise,,,,,,,,,,,,
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data)
//         data.forEach(user => {
//            console.log(data)
//         })
//     })
// //,,,,,,,,,,sync and await,,,,,,,,,,,,,,,,,,,
// // const response = await fetch('https://jsonplaceholder.typicode.com/users')

// // const data = await response.json()

// // console.log(data)
// //giving error



// //....................async....................
// const fetchData = async() => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(response)
//     const data = await response.json()
//     // console.log(data)
// }
// //here aawait waits and gives u actual value not a promise
// //so no need to use .then
// fetchData()



// //..................challange...............
// const input = document.querySelector('input')
// const button = document.querySelector('Button')
// const result = document.querySelector('div')


// button.addEventListener('click',()=>{
    
//      console.log(input.value)
//     // value.createTextNode=user
//     //  result.createTextNode=txtnode
//     //  value.appendChild(user)
//     //  list.innerHTML=value
//    result.innerHTML=input.value

// })

//...........another...............

const ul = document.querySelector('ul')
const getText = document.querySelector('input')
const button = document.querySelector('Button')


console.log(button)

const getData = async (item) =>{
    console.log(item)
    let url = `https://api.edamam.com/search?app_id=817e7808&app_key=8de83a1a9971c1c9db962a20714b14a4&q=${item}`
    
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.hits)
}
button.addEventListener('click',(e)=>{
    
   getData(getText.value)

})