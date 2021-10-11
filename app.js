// const ul = document.querySelector('ul')
// const getText = document.querySelector('input')
// const button = document.querySelector('Button')


// console.log(button)

// const getData = async (item) =>{
//     console.log(item)
//     let url = `https://api.edamam.com/search?app_id=817e7808&app_key=8de83a1a9971c1c9db962a20714b14a4&q=${item}`
    
//     console.log(url)
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data.hits)
// }
// button.addEventListener('click',(e)=>{
    
//    getData(getText.value)

// })


//.................codepen food card..................


const getText = document.querySelector('input')
const button = document.querySelector('Button')
const parent = document.querySelector('div.grid')

console.log(button)

const getData = async (item) =>{
    console.log(item)
    let url = `https://api.edamam.com/search?app_id=817e7808&app_key=8de83a1a9971c1c9db962a20714b14a4&q=${item}`
    
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.hits)
    const recipies = data.hits
    recipies.forEach(item => {
        console.log(item)
        console.log(item.recipe.label)
        const template = `
        <article class="card">
        <img class="card__image" src="https://i.ibb.co/RT0bjJq/food1.png" />
        <div class="card__data">
          <div class="card__info">
            <h2>Nombre Comida</h2>
            <p>Descripcion de la comida, con ingredientes</p>
          </div>
          <h3 class="card__price">$7.50</h3>
          <button class="card__add">+</button>
        </div>
      </article>`

      const newCard = document.createElement('article')
      newCard.setAttribute('class','card')
      newCard.setAttribute('style','margin-bottom:20px')
      newCard.innerHTML=template
      parent.appendChild(newCard)
    //   parent.innerHTML = card
      //by innerHTML we are replacing whole parent by card child 
      //so it will only show 1 card
    })
}


//added eventlistner
button.addEventListener('click',(e)=>{
    
   getData(getText.value)

})

//......................Destructuring.................
const person = {
    name:"Manisha",
    age:22,
    country:"India"
}
const {name,age,country} =person
console.log(name,age,country)


