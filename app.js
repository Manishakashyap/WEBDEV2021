
const num1 = document.querySelectorAll('input')[0]
const num2 =document.querySelectorAll('input')[1]

// var num2 = document.querySelector('input')


//step : 1 select all element correctly with tags like this
const add = document.querySelector('#add')
const multiply = document.querySelectorAll('#multiply')[0]
const sub = document.querySelectorAll('#sub')[0]
const resultbox = document.querySelector('.result')

console.log(add,multiply,num1,num2,resultbox,sub)



//step:2 add event listners so buttons can perfornm tasks 
//so we need callback function to perform a task
 const sum = () => {
    const result = parseInt(num1.value) + parseInt(num2.value) 
    console.log(result)
    resultbox.innerHTML = result
    //or resultbox.textcontent = result
 }

add.addEventListener('click',sum)

const mul = () =>{
   var result = parseInt(num1.value)* parseInt(num2.value)
   console.log(result)
   resultbox.innerHTML=result
   }

multiply.addEventListener('click',mul)


const subtract = () =>{
   var result = parseInt(num1.value) - parseInt(num2.value)
   console.log(result)
   resultbox.innerHTML=result
   }

sub.addEventListener('click',subtract)








const calculate = (event,operation) => {

   // console.log(event.target)

   // if(opration=='add'){
   //    console.log('adding')
   // } else if (opration == 'multiply')  {
   //    console.log(event,'multiply')
   // }

   //switch case
   switch (operation) {
      case "add":
         resultbox.innerHTML = parseInt(num1.value) + parseInt(num2.value)  
         break
      case "multiply":
         resultbox.innerHTML = parseInt(num1.value) * parseInt(num2.value)  
         break
      case "sub":
         resultbox.innerHTML = parseInt(num1.value) - parseInt(num2.value)  
         break
      default:
         resultbox,innerHTML= "Not a valid operation"
   }
}

add.addEventListener('click', (event) =>{//added (event) 
    return calculate(event,'add')
})

multiply.addEventListener('click' , (event) =>{ //added (event) 
   // console.log('multiplying')
   calculate('multiply')
})

sub.addEventListener('click',(Event)=>{
   calculate('sub')
} )

//another way
// multiply.addEventListener('click' , () => calculate('multiply')