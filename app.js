var button = document.querySelector('button')
var input = document.querySelector('input')
var List = document.querySelector('ul')



var chores = []

var deleteItems = (value) =>{
      // console.log(value)
      
      // console.log(chores)
      const index = chores.indexOf(value)
      chores.splice(index,1)
      console.log(index)
}


const callbackfunc = (event) => {
   const inputValue = input.value

   if (chores.includes(inputValue)){
      console.log('already exists')
   } else {

      chores.push(inputValue)
      const element = document.createElement('li')
      const textNode = document.createTextNode(inputValue)
      element.appendChild(textNode)
     List.appendChild(element)

     element.addEventListener('click',(e) => {deleteItems
      (e.target.innerHTML)})

     // element.addEventListener('click',() => {console.log('clicked')})
   //   element.addEventListener('click',(e) => {console.log(e.target.innerHTML)})

   }
}

button.addEventListener('click',callbackfunc)