//--------------------Fetch Games From RAWG.IO--------------------

let currentYear = new Date().getFullYear()
let currentMonth = new Date().getMonth()
let currentDay = new Date().getDay()
let currentMonthFix
let currentDayFix
function month () {
    if(currentMonth >= 10){
        console.log(currentMonth)
    }
    else{
        currentMonthFix = `0${currentMonth}`
    }
}

month()

function day () {
    if(currentDay >= 10){
        console.log(currentDay)
    }
    else{
        currentDayFix = `0${currentDay}`
    }
}

day()

let weekAhead
let weekAheadFinish

function nextWeekAhead () {
    weekAhead = parseInt(currentDay)
    weekAheadFinish = weekAhead +14
}

nextWeekAhead()

function trimNextWeekAhead () {
    if(weekAheadFinish >= 30){
        weekAheadFinish = 30
    }
}

let dayNumeric

function transfromToNumeric () {
    if(currentDayFix < 10){
        dayNumeric = `0${parseInt(currentDayFix) + 7}`
    }
    else{
        dayNumeric = parseInt(currentDayFix) + 7
    }
}

transfromToNumeric()

let dayNumericString


function fixNumericDay () {
    if(dayNumeric >= 10){
        console.log(dayNumeric)
    }
    else{
        dayNumericString = `${dayNumeric.toString()}`
    }
}

fixNumericDay()

const API_KEY = '57b5ad326494462c9e86dbc4c769f8c7';

let gamesURL = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${currentYear}-01-01,${currentYear}-12-30&ordering=-added`

let gamesURLLastDays = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${currentYear}-${currentMonthFix}-${dayNumericString},${currentYear}-${currentMonthFix}-29&ordering=-added`

let gamesURLThisWeek = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${currentYear}-${currentMonthFix}-${dayNumericString},${currentYear}-${currentMonthFix}-${dayNumericString}&ordering=-added`

let nextGames = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${currentYear}-${currentMonthFix}-${dayNumericString},${currentYear}-12-30&ordering=-added`

let lastYearURL = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2023-01-01,${currentYear}-01-01&ordering=-added`

let thisWeekJson = "thisWeekGames.json"
let nextReleasesJson = "nextReleases.json"
/*
let gamesURL = "./games.json"
*/
const gamesContainer = document.querySelector(".games_container")


const fetchGames = (URL) => {
    try {
        fetch(URL).then(response => response.json()).then(data => {
            console.log(data)
            for(i = 0; i <= data.results.length; i ++){
                console.log(i)
                //------------create Card---------------
                const card = document.createElement("div")
                card.classList.add("game_card")
                gamesContainer.appendChild(card)
                //------------create image section---------------
                const imageSection = document.createElement("div")
                imageSection.classList.add("image_section")
                if(data.results[i].background_image === null){
                    console.log("No Image")
                }
                else{
                    imageSection.style.backgroundImage = `url(${data.results[i].background_image})`
                }
                card.appendChild(imageSection)
                //------------Create Button---------------
                const gameName = document.createElement("button")
                gameName.classList.add("game_title")
                gameName.innerText = data.results[i].name
                imageSection.appendChild(gameName)
                //------------Create Rating---------------
                const rating = document.createElement("p")
                rating.classList.add("game_rating")
                if(data.results[i].genres.length == 0){
                    console.log("no genre")
                }
                else{
                    rating.innerText = data.results[i].genres[0].name
                }
                imageSection.appendChild(rating)
                //------------Create Game Info Section---------------
                const infoSection = document.createElement("div")
                infoSection.classList.add("game_info_section")
                card.appendChild(infoSection)
                //------------Create Game Info ---------------
                const gameInfo = document.createElement("p")
                gameInfo.classList.add("game_info")
                if(data.results[i].platforms.length >= 2){
                    gameInfo.innerHTML =
                    `${data.results[i].released}<br>
                    <h2 class="platform">${data.results[i].platforms[0].platform.name} / ${data.results[i].platforms[1].platform.name}</h2><br>
                    <p class="rating"><img class="start" src="./Assets/start.png">${data.results[i].rating}</p>`
                }
                else{
                    gameInfo.innerHTML =
                    `${data.results[i].released}<br>
                    <h2 class="platform">${data.results[i].platforms[0].platform.name}<br>
                    <p class="rating"><img class="start" src="./Assets/start.png">${data.results[i].rating}</p>`
                }
                infoSection.appendChild(gameInfo)
                //------------Create Modal Button ---------------
                const moreInfo = document.createElement("button")
                moreInfo.classList.add("game_more_info")
                moreInfo.innerText = "more info"
                infoSection.appendChild(moreInfo)
                
            }
        })
    } catch (error) {
        console.log(error)
    }
}

fetchGames(gamesURL)

//--------------------------------------Diferent Fetch Options----------------------
const gamesSectionTitle = document.querySelector(".games_section_title")
const recentGames = document.querySelector(".last_days")

recentGames.addEventListener("click",()=>{
    gamesSectionTitle.innerHTML = `This <span>Month</span>`
    gamesContainer.innerHTML = ""
    fetchGames(gamesURLLastDays)
})
//-------------------------------------
const thisWeek = document.querySelector(".this_week")

thisWeek.addEventListener("click",()=>{
    gamesSectionTitle.innerHTML = `This <span>Week</span>`
    gamesContainer.innerHTML = ""
    fetchGames(thisWeekJson)
})
//--------------------------------------
const nextReleases = document.querySelector(".Next_week")

nextReleases.addEventListener("click",()=>{
    gamesSectionTitle.innerHTML = `Next <span>Releases</span>`
    gamesContainer.innerHTML = ""
    fetchGames(nextReleasesJson)
})
//--------------------------------------
const lastYear = document.querySelector(".last_year")

lastYear.addEventListener("click",()=>{
    gamesSectionTitle.innerHTML = `Last <span>Year</span>`
    gamesContainer.innerHTML = ""
    fetchGames(lastYearURL)
})

//------------------------------------Redirects--------------------------------------

const valorantCard = document.querySelector(".valorant_card")
const stormgateCard = document.querySelector(".stormgate_card")

valorantCard.addEventListener("click",()=>{
    window.location.href = "./Valorant.html"
})

//-------------------------------------

stormgateCard.addEventListener("click",()=>{
    window.location.href = "./Stormgate.html"
})

//-------------------------------------

const rawgAPI = document.querySelector(".rawg_api")

rawgAPI.addEventListener("click",()=>{
    window.location.href = "https://rawg.io/"
})

