// var para = document.getElementsByClassName('para')
// var query = document.querySelector('.para')
// console.log(query)
// console.log(para)


// var queryall = document.querySelectorAll('.para')
// console.log(queryall)


var heading = document.getElementById('heading')
var body = document.querySelector('body')


console.log(heading)

heading.innerHTML = "i was added by JS"
heading.style = "color:red;font-size:2rem"

heading.classList.add('five')
heading.classList.remove('one')

body.classList.add('dark')
// body.classList.remove('dark')

console.log(heading.classList)

