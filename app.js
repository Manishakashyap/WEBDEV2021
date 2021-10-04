// // if(true){
// //    var Name = 'Ferrari'
// //    // console.log(Name)
// // }


// // if(true){
// //    console.log(Name)
// // }
// // console.log(Name)

// // for(var i=0;i<10;i++){
//   if(true){
//      var Name = "ferrari"
//      if(true){
//    console.log(Name)
// }
//   }
// // }
// // console.log(i)

// if (true){
// console.log(Name)
// if(true){
//    var Name = "ferrari"
// }
// }


// const print = () => {
//    var Name = 'Mercedes'
//    if (true){
//       console.log(Name)
//    }
//    return Name
  
// }

// // console.log(Name)  //errors
// // print()


// console.log(this.alert('Hello')) //this points to parent object



// obj = {key:value,key:value…}

// let manufacturer = 'Ferrari'

// var car = {
//    Name:"C Class",
//    manufacturer:"Mercedes",
//    print: function () { //(a)
//       let manufacturer = 'BMW'
//       console.log(car.manufacturer,car.Name)
//    }
// }
//    //console.log(car)
//    // console.log(car.name)
//    // console.log(car.manufacturer)
//    // console.log(typeof car) //object
//    // console.log('Ferrari')

//    car .print()



   //Anisha's code
   let obj = {
      h:"hello",
      w:"world",
      print: function (string) {
          // console.log("hello world");
          console.log(this); /* refers to obj */
          console.log(this.h + this.w);
          console.log(string);
          console.log(obj.h);
          return 
      }
    }
const temp = obj.print("hsfdsf");
console.log(temp);

let car = {
   name : "C",
   manufacturer :"nfkn",
   print : () => {
      console.log(this)
      console.log(`${this.car} is manufacyured by ${this.manufacturer}`)
   }
}

//   car.print()


let flower = {
   name : "etdf",
   manufacturer :"dsfsdf",
   print : () => {
      console.log(this)
      console.log(`${this.car} is manufacyured by ${this.manufacturer}`)
   }
}

console.log(Object.keys(car))
console.log(Object.values(car))

console.log(Object.values(flower))

// // ................hasOwnProperty................
// console.log(car.hasOwnProperty('name'))
// console.log(car.hasOwnProperty('manufacturer'))

// // ............Promise..............is an object whos value is uncertaim 
// // fullfill
// // pending
// // rejected


// // .............setTimeout..........................
// setTimeout(() =>{
//    console.log('manisha')
// },0)
// console.log('hi')

var data = fetch('https://jsonplaceholder.typicode.com/todos/10')

console.log(data)
