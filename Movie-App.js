let KEY = "779d63e1"
let URL = `http://www.omdbapi.com/?apikey=${KEY}`

const title = document.querySelector(".input")
const searchButton = document.querySelector(".search_icon")
const movieContainer = document.querySelector(".movie_container")
const rightSection = document.querySelector(".right_section")
const powered = document.querySelector(".powered")
let moviesDisplay = false

const fetchData = async () => {
    const response = await fetch(`${URL}&s=${title.value}`)
    const data = await response.json()
    let movies = data.Search
    powered.style.display = "none"
    console.log(movies)
    console.log(moviesDisplay)
    if(moviesDisplay == true) {
        movieContainer.innerHTML = ""
    }
    for(i = 0; i <= movies.length; i ++){
        console.log(movies[i])
        //----------CREATE CARD-------------------
        const card = document.createElement("div")
        card.classList.add("movie_card")
        if(movies[i].Poster != 'N/A'){
            card.style.backgroundImage = `url(${movies[i].Poster})`
        }
        else {
            card.style.backgroundImage = "url(./Assets/404.png)"
        }
        movieContainer.appendChild(card)
        //----------Poster Title Description-------------------
        const title = document.createElement("h1")
        title.classList.add("title")
        title.innerText = `${movies[i].Title}`
        card.appendChild(title)
        //-----------------------
        const description = document.createElement("p")
        description.classList.add("description")
        description.innerText = `${movies[i].Year}`
        card.appendChild(description)
        moviesDisplay = true
    }
}


searchButton.addEventListener("click",()=>{
    fetchData()
})



//----------------------------------Games API-----------------------
const slider = document.querySelector(".slider")
const gameSection = document.querySelector(".icons_section")
const API_KEY = '57b5ad326494462c9e86dbc4c769f8c7';


let currentMonth = new Date().getMonth()
let currentYear = new Date().getFullYear()

let gamesURL = `https://api.rawg.io/api/games?dates=${currentYear}-${currentMonth}&key=${API_KEY}`
/*let URL = `https://api.rawg.io/api/games?dates=2023-10-10,2023-10-10&ordering=-added&key=${API_KEY}`*/
/*let URL = `https://api.rawg.io/api/games?dates=${currentYear}-${currentMonth + 1}-01,${currentYear}-${currentMonth + 1}-30&key=${API_KEY}`*/

const monthNames = ["enero" ,"febrero" ,"marzo", "abril","mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

console.log(monthNames[1])
let monthDisplay = document.querySelector(".month")


/*------------FETCH DATA------------*/


function fetchGamesData () {
    fetch(gamesURL).then((resp)=>resp.json()).then((data)=>{
      console.log(data)
      for(i = 1; i <= 31; i++){
        let day = document.createElement("div");
        day.classList.add("days");
        slider.appendChild(day);
        day.setAttribute('id', `${i}`)
        /*day.innerText.data.results[i]*/
        day.style.backgroundImage += `url(${data.results[i].background_image})`
        day.innerText = i
       if(i == 31){
         day.style.backgroundColor = "#353633"
         }
      }
  }
 )
}


fetchGamesData()