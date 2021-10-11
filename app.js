

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
        // console.log(item)
        // console.log(item.recipe.label)
        const{recipe} =item
        const {label,image,source,calories} = recipe
        const template = `
        <article class="card">
        <img class="card__image" src=${image} />
        <div class="card__data">
          <div class="card__info">
            <h2>${label}</h2>
            <p>From ${source}</p>
          </div>
          <h3 class="card__price">${calories.toFixed(2)}</h3>
          <button class="card__add">+</button>
        </div>
      </article>`

      const newCard = document.createElement('article')
      newCard.setAttribute('class','card')
      newCard.setAttribute('style','margin-bottom:50px')
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


