 const table = document.querySelector('table')

    console.log(table)

// ...,,,,,,,,,,Method -1,,,,,,,,,,,,

//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data =>{

//         data.forEach(user => {
         
//         let newRow = document.createElement('tr')
//         let template = `
//         <td>${user.id}</td>
//         <td>${user.name}</td>
//         <td>${user.email}</td>
//         <td>${user.username}</td>`
//   //can't append string to any mode
       
//         newRow.innerHTML = template //saves you to create textnode
//         //  newRow.appendChild(template)
//         // data.appendChild(newRow)
//         table.appendChild(newRow)

//         })
//     })
// ...,,,,,,,,,,,,,,OR,,,,,,,,,,,,,,,,,,
const createRow = (user) => {
    let newRow = document.createElement('tr')
    let element = `
    <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.username}</td`
    newRow.innerHTML = element
    return newRow
}


fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>{

        data.forEach(user => {
         table.appendChild(createRow(user))
        })
    })