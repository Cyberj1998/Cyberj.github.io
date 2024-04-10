let stormgateLeaderBoard = "https://api.stormgateworld.com/v0/leaderboards/ranked_1v1" 
const boardContainer = document.querySelector(".leaderBoard")

let raceImage 
 

const fetchLeaderBoard = () => {
    try {
        fetch(stormgateLeaderBoard).then(response => response.json()).then(data =>{
            console.log(data)
            for(i = 0; i <= data.entries.length; i ++){
                if(data.entries[i].race == "infernals"){
                    raceImage = "./Assets/GameCenter/Infernal_logo.webp"
                }
                else {
                    raceImage = "./Assets/GameCenter/Vanguard_logo.webp"
                }
                let percentageComplete = data.entries[i].win_rate;
                let percentageString = percentageComplete.toString()
                let percentage = percentageString.substring(0,2)
                //----------------------------------------
                const playerCard = document.createElement("div")
                playerCard.classList.add("card_prototype")
                boardContainer.appendChild(playerCard)
                //----------------------------------------
                playerCard.innerHTML = `
                <img src="${data.entries[i].avatar_url}" alt="avatar" class="avatar">
                <h1 class="league">${data.entries[i].league}</h1>
                <p class="mmr">MMR: <span>${data.entries[i].mmr}</span></p>
                <h1 class="nickname">${data.entries[i].nickname}</h1>
                <img class="race" src="${raceImage}" alt="race_logo">
                <h1 class="rank">Rank: ${data.entries[i].rank}</h1>
                <div class="circle-container">
                    <p class="winrate">Winrate</p>
                    <div class="circle">
                        <div class="percentage">${percentage}%</div>
                    </div>
                </div>`
            }
        })
    } catch (error) {
        console.log(error)
    }
}

fetchLeaderBoard()

