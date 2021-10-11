
let response = fetch('https://jsonplaceholder.typicode.com/todos/10')

console.log(response) //promise return with pending

response.then (data =>{
    return (data.json())
}).then (content => {
    console.log(content)
})
