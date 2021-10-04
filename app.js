var arr = [1,2,3,4,5]

arr.push(6)  //it add the element at last/end of array
// arr.shift(7)
// arr.unshift(6)  // it adds the element at the beginning of array


console.log(arr.unshift(6)) //they are methods so will return something as well and appends also
console.log(arr.push(7)) //returns the value


// arr.shift(7) remove 1st element of array
arr.shift()
console.log(arr)

//arr.slice() not in original array create another sliced array 2 to 4
console.log(arr.slice(2,5))
console.log(arr)

//array of even numbers
var even_arr = []

for(var i=0;i<=arr.length;i++){
   if (arr[i]%2==0){
       even_arr.push(arr[i])
     
   }
  
}
console.log(even_arr) //for this we use filter

//arr.filter() if consiton pass then add it accepts callbackfunction

var arr1 = [1,2,3,4,5,6,7,8]

//  arr1.filter((element,index)=> { //assure working
//    console.log( element,index)
// }) 

new_arr = arr1.filter((element,index)=> {
   if(element%2 === 0) return true

})
console.log(new_arr)