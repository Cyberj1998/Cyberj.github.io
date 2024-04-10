//--------------------Movies API----------------------------
let KEY = "779d63e1"
let URL = `http://www.omdbapi.com/?apikey=${KEY}`
let seriesURL = "https://www.episodate.com/api/most-popular?page=1"

const cube = document.querySelector(".cube-container")
const title = document.querySelector(".input")
const searchButton = document.querySelector(".search_icon")
const movieContainer = document.querySelector(".movie_container")
const rightSection = document.querySelector(".right_section")
const powered = document.querySelector(".powered")
let moviesDisplay = false

const fetchData = async () => {
    try {
        const response = await fetch(`${URL}&s=${title.value}`)
        const data = await response.json()
        let movies = data.Search
        if(data.Search){
            cube.style.display = "none"
        }
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
    catch (error) {
        console.log(error)    
    }
}


searchButton.addEventListener("click",()=>{
    fetchData()
})

//---------------------------------------Series API-----------------------------------
/*
function fetchSeries () {
    try {
        fetch(seriesURL).then(response => response.json()).then(data =>{
            console.log(data)
        })
    } catch (error) {
        console.log(error)
    }
} 

fetchSeries()
*/
//--------------------------------------------Games API-----------------------------------
const gamesImages = document.querySelector(".games_images")
const API_KEY = '57b5ad326494462c9e86dbc4c769f8c7';
let gamesURL = `https://api.rawg.io/api/games?&key=${API_KEY}`


function fetchGamesData () {
    try {
        fetch(gamesURL).then(response => response.json()).then(data => {
            console.log(data)
            let random = Math.round(Math.random() * 19)
            gamesImages.style.backgroundImage = `url(${data.results[random].background_image})`
        })
    } catch (error) {
        console.log(error)
        alert(error)
    }
}

/*
fetchGamesData()
*/
///---------------------------Redirect to API------------------------

const redirectToAPI = document.querySelector(".powered")

redirectToAPI.addEventListener("click",()=>{
    window.location.href = "https://www.omdbapi.com/"
})

const exploreGameCenter = document.querySelector(".explore")

exploreGameCenter.addEventListener("click",()=>{
    window.location.href = "./GameCenter.html"
})