//-------------------------------Slider Menu------------------------------

const slider = document.querySelector(".slide_panel")
const burger = document.querySelector(".toggle")
let display = false

burger.addEventListener("click",()=>{
    if(display == false) {
        slider.style.marginTop = "0px"
        display = true
    }
    else {
        slider.style.marginTop = "-200vh"
        display = false
    }
})
//----------------------------------Redirect-------------------------------

const logo = document.querySelector(".logo")

logo.addEventListener("click",()=>{
    window.location.href = "https://valorant-api.com/"
})

//----------------------------------Fetch Agnets-----------------------------
const agentCard = document.querySelector(".agent_card")
const agentsContainer = document.querySelector(".agents_container")

let agentsURL = "https://valorant-api.com/v1/agents"
let weaponsURL = "https://valorant-api.com/v1/weapons"
let eventsURL = "https://valorant-api.com/v1/events"


function fetchPlayers () {
    try {
        fetch(agentsURL).then(response => response.json()).then(data => {
            console.log(data)
            for(i = 0; i <= 24; i ++){
                if(i == 9){
                    continue
                }
                else{
                    //---------create card------------------
                    const agentCard = document.createElement("div")
                    agentCard.classList.add("agent_card")
                    agentsContainer.appendChild(agentCard)
                    //-----------------------------------
                    agentCard.style.backgroundImage = `url(${data.data[i].fullPortrait})`
                    agentCard.innerHTML = `
                    <h1>${data.data[i].displayName}</h1>
                    <p class="agent_description">${data.data[i].description}</p>
                    <img class="agent_role" src="${data.data[i].role.displayIcon}" > <p class="agent_class">${data.data[i].role.displayName}</p>
                    <img class="agent_icon" src="${data.data[i].displayIcon}">
                    `
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}

//----------------------------------Fetch Weapons-----------------------------


function fetchWeapons () {
    try {
        fetch(weaponsURL).then(response => response.json()).then(data => {
            console.log(data)
            for(i = 0; i <= 18; i ++){
                if(data.data[i].weaponStats == null || data.data[i].weaponStats.adsStats == null){
                    continue
                }
                else {
                    //---------create card------------------
                    const weaponsCard = document.createElement("div")
                    weaponsCard.classList.add("weapons_card")
                    agentsContainer.appendChild(weaponsCard)
                    //----------------------------------------
                    weaponsCard.style.backgroundImage = `url(${data.data[i].displayIcon})`
                    weaponsCard.innerHTML = `<h1 class="weapons_name">${data.data[i].displayName}</h1><br>
                    <p>${data.data[i].shopData.category}</p><br>
                    <p>Cost: ${data.data[i].shopData.cost}</p><br>
                    <p>Fire Rate: ${data.data[i].weaponStats.adsStats.fireRate}</p>
                    <p>Accuaracy: ${data.data[i].weaponStats.adsStats.firstBulletAccuracy}</p>`
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}
/*-------------------------------------------Fetch Events---------------------------------------*/

function fetchEvents () {
    try {
        fetch(eventsURL).then(response => response.json()).then(data =>{
            console.log(data)
            for(i = 0; i <= 8; i++){
                const eventsCard = document.createElement("div")
                eventsCard.classList.add("events_card")
                agentsContainer.appendChild(eventsCard)
                //---------------------------------------
                eventsCard.innerHTML = `
                <img class="trophy" src="./Assets/GameCenter/Valorant/trophy-512.png"><br>
                <h1 class="event_name">${data.data[i].displayName}</h1><br>
                <h2 class="event_second_name">${data.data[i].shortDisplayName}</h2><br>
                <p class="event_date">${data.data[i].startTime.substring(0,10)}</p>`
            }
        })
    } catch (error) {
        console.log(error)
    }
}


/*---------------------------------------------------Left Panel Controlers----------------------*/

const displayAgents = document.querySelector(".display_agents")
const displayWeapons = document.querySelector(".display_weapons")
const displayEvents = document.querySelector(".display_events")

displayAgents.addEventListener("click",()=>{
    agentsContainer.innerHTML = ""
    fetchPlayers()
})

displayWeapons.addEventListener("click",()=>{
    agentsContainer.innerHTML = ""
    fetchWeapons()
})

displayEvents.addEventListener("click",()=>{
    agentsContainer.innerHTML = ""
    fetchEvents()
})

//-------------------------------------Main Section Options--------------------

const agentsFloating = document.querySelector(".players")
const weaponsFloating = document.querySelector(".agents")
const eventsFloating = document.querySelector(".events")

agentsFloating.addEventListener("click",()=>{
    window.scrollTo({top: 1000,left: 0,behavior: "smooth"})
    agentsContainer.innerHTML = ""
    fetchPlayers()
})

weaponsFloating.addEventListener("click",()=>{
    window.scrollTo({top: 1000,left: 0,behavior: "smooth"})
    agentsContainer.innerHTML = ""
    fetchWeapons()
})

eventsFloating.addEventListener("click",()=>{
    window.scrollTo({top: 1000,left: 0,behavior: "smooth"})
    agentsContainer.innerHTML = ""
    fetchEvents()
})

//-------------------------------Slide Panel Options----------------------------

const slideAgents = document.querySelector(".agents_alternative")
const slideWeapons = document.querySelector(".players_alternative")
const slideEvents = document.querySelector(".events_alternative")

slideAgents.addEventListener("click",()=>{
    slider.style.marginTop = "-200vh"
    display = false
    window.scrollTo({top: 1000,left: 0,behavior: "smooth"})
    agentsContainer.innerHTML = ""
    fetchPlayers() 
})

slideWeapons.addEventListener("click",()=>{
    slider.style.marginTop = "-200vh"
    display = false
    window.scrollTo({top: 1000,left: 0,behavior: "smooth"})
    agentsContainer.innerHTML = ""
    fetchWeapons() 
})

slideEvents.addEventListener("click",()=>{
    slider.style.marginTop = "-200vh"
    display = false
    window.scrollTo({top: 1000,left: 0,behavior: "smooth"})
    agentsContainer.innerHTML = ""
    fetchEvents() 
})

