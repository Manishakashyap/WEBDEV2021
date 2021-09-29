
// console.log('working');
var heading = document.getElementById('heading')
console.log(typeof heading)

heading.innerHTML="Hi MANISHA"

var heading = document.getElementById('heading')
var para = document.getElementsByClassName('para')
// getelementbyid returns single object whereas
//  getelementsbyclassname returns all collection of all the objects of the specified class


console.log(heading)
console.log(para.length)
console.log(para)
console.log(para[0])
console.log(para[1])

// para.push('string anything')

var tags = document.getElementsByTagName('a')
console.log(tags)

var query = document.querySelector('#heading')
console.log(query)

var query = document.querySelector('.para')
console.log(query)