
var list = document.querySelector('ul')

console.log(list)

var arr = ["Go the GYM","Cook oatmeal","Eat"]

arr.push('Complete the assignment')

for(var i=0;i<arr.length;i++){


   // to li Element 2: for child, text
   var element = document.createElement('li')
   var textNode = document.createTextNode(arr[i])

   
   
   console.log(element)
   element.appendChild(textNode)
   console.log(element)


   list.appendChild(element)

   console.log(textNode)

   // console.log(arr[i])
}



