const forGame =  document.querySelector(".for_game_container")
const forWork = document.querySelector(".for_work_container")
const games = document.querySelector(".juegos")
const works = document.querySelector(".trabajos")

let gameShowing = false
let worksShowing = false
/*-------------------------------------Slider---------------------*/
const sliderMenu = document.querySelector(".slider")
const burgerMenu = document.querySelector(".burger") 
let sliderShow = false

burgerMenu.addEventListener("click",()=>{
    if(sliderShow == false){
        sliderMenu.style.marginLeft = "0"
        sliderShow = true
    }
    else{
        sliderMenu.style.marginLeft = "-30%"
        sliderShow = false
    }
})
window.addEventListener("scroll",()=>{
    sliderMenu.style.marginLeft = "-30%"
    sliderShow = false
})
/*---------------------------------------Display games or Works-----------------------------*/ 
forGame.addEventListener("click",()=>{
    i5.style.display="none"
    i3.style.display="none"
    i9.style.display="none"
    grafica.style.display="none"
    boardGamer.style.display="none"
    boardSimple.style.display="none"
    ramSimple.style.display="none"
    dobleRamGamer.style.display="none"
    cuadrupleRamGamer.style.display="none"
    ssd.style.display="none"
    hd.style.display="none"
    if(worksShowing == true){
        works.style.display="none"
        worksShowing = false
        games.style.display="inline-block"
        gameShowing = true
    }
    else{
        games.style.display="inline-block"
        gameShowing = true
    }
})
forWork.addEventListener("click",()=>{
    i5.style.display="none"
    i3.style.display="none"
    i9.style.display="none"
    grafica.style.display="none"
    boardGamer.style.display="none"
    boardSimple.style.display="none"
    ramSimple.style.display="none"
    dobleRamGamer.style.display="none"
    cuadrupleRamGamer.style.display="none"
    ssd.style.display="none"
    hd.style.display="none"
    if(gameShowing == true){
        games.style.display="none"
        gameShowing = false
        works.style.display="inline-block"
        worksShowing = true
    }
    else{
        works.style.display="inline-block"
        worksShowing = true
    }
})
/*----------------------------------------------Config segun los juegos seleccionados------*/
const eldenRing = document.querySelector(".elden_ring")
const godOfWar = document.querySelector(".god_of_war")
const howarts = document.querySelector(".howarts")
const dota = document.querySelector(".dota")
const minecraft = document.querySelector(".minecraft")
const valorant = document.querySelector(".valorant")
const deadCells = document.querySelector(".dead_cells")
const hollowKnight = document.querySelector(".hollow_kinght")
const blasphemous = document.querySelector(".blasphemous")

let totalCount = 0
let lastGenGames = 0
let onlineGames = 0
let indieGames = 0

let eldenRingCheked = false
let godOfWarCheked = false
let howartsCheked = false
let dotaCheked = false
let minecraftCheked = false
let valorantCheked = false
let deadCellsCheked = false
let hollowKnightCheked = false
let blasphemousCheked = false

eldenRing.addEventListener("click",()=>{
    if(eldenRingCheked == false){
        totalCount += 1
        lastGenGames += 1
        eldenRing.style.opacity = "50%"
        eldenRing.style.cursor = "not-allowed"
        console.log(`cuenta total ${totalCount}`)
        console.log(`juegos de ultima gen ${lastGenGames}`)
        console.log(`juegos online ${onlineGames}`)
        console.log(`juegos indies ${indieGames}`)
        eldenRingCheked = true
    }
    else {
        console.log("este juego ya ha sido seleccionado")
    }
})
godOfWar.addEventListener("click",()=>{
    if(godOfWarCheked == false & totalCount < 3){
        totalCount += 1
        lastGenGames += 1
        godOfWar.style.opacity = "50%"
        godOfWar.style.cursor = "not-allowed"
        console.log(`cuenta total ${totalCount}`)
        console.log(`juegos de ultima gen ${lastGenGames}`)
        console.log(`juegos online ${onlineGames}`)
        console.log(`juegos indies ${indieGames}`)
        godOfWarCheked = true
    }
    else {
        console.log("este juego ya ha sido seleccionado")
    }
})
howarts.addEventListener("click",()=>{
    if(howartsCheked == false & totalCount < 3){
        totalCount += 1
        lastGenGames += 1
        howarts.style.opacity = "50%"
        howarts.style.cursor = "not-allowed"
        console.log(`cuenta total ${totalCount}`)
        console.log(`juegos de ultima gen ${lastGenGames}`)
        console.log(`juegos online ${onlineGames}`)
        console.log(`juegos indies ${indieGames}`)
        howartsCheked = true
    }
    else {
        console.log("este juego ya ha sido seleccionado")
    }
})
dota.addEventListener("click",()=>{
    if(dotaCheked == false & totalCount < 3){
        totalCount += 1
        onlineGames += 1
        dota.style.opacity = "50%"
        dota.style.cursor = "not-allowed"
        console.log(`cuenta total ${totalCount}`)
        console.log(`juegos de ultima gen ${lastGenGames}`)
        console.log(`juegos online ${onlineGames}`)
        console.log(`juegos indies ${indieGames}`)
        dotaCheked = true
    }
    else {
        console.log("este juego ya ha sido seleccionado")
    }
})
minecraft.addEventListener("click",()=>{
    if(minecraftCheked == false & totalCount < 3){
        totalCount += 1
        onlineGames += 1
        minecraft.style.opacity = "50%"
        minecraft.style.cursor = "not-allowed"
        console.log(`cuenta total ${totalCount}`)
        console.log(`juegos de ultima gen ${lastGenGames}`)
        console.log(`juegos online ${onlineGames}`)
        console.log(`juegos indies ${indieGames}`)
        minecraftCheked = true
    }
    else {
        console.log("este juego ya ha sido seleccionado")
    }
})
valorant.addEventListener("click",()=>{
    if(valorantCheked == false & totalCount < 3){
        totalCount += 1
        onlineGames += 1
        valorant.style.opacity = "50%"
        valorant.style.cursor = "not-allowed"
        console.log(`cuenta total ${totalCount}`)
        console.log(`juegos de ultima gen ${lastGenGames}`)
        console.log(`juegos online ${onlineGames}`)
        console.log(`juegos indies ${indieGames}`)
        valorantCheked = true
    }
    else {
        console.log("este juego ya ha sido seleccionado")
    }
})
deadCells.addEventListener("click",()=>{
    if(deadCellsCheked == false & totalCount < 3){
        totalCount += 1
        indieGames += 1
        deadCells.style.opacity = "50%"
        deadCells.style.cursor = "not-allowed"
        console.log(`cuenta total ${totalCount}`)
        console.log(`juegos de ultima gen ${lastGenGames}`)
        console.log(`juegos online ${onlineGames}`)
        console.log(`juegos indies ${indieGames}`)
        deadCellsCheked = true
    }
    else {
        console.log("este juego ya ha sido seleccionado")
    }
})
hollowKnight.addEventListener("click",()=>{
    if(hollowKnightCheked == false & totalCount < 3){
        totalCount += 1
        indieGames += 1
        hollowKnight.style.opacity = "50%"
        hollowKnight.style.cursor = "not-allowed"
        console.log(`cuenta total ${totalCount}`)
        console.log(`juegos de ultima gen ${lastGenGames}`)
        console.log(`juegos online ${onlineGames}`)
        console.log(`juegos indies ${indieGames}`)
        hollowKnightCheked = true
    }
    else {
        console.log("este juego ya ha sido seleccionado")
    }
})
blasphemous.addEventListener("click",()=>{
    if(blasphemousCheked == false & totalCount < 3){
        totalCount += 1
        indieGames += 1
        blasphemous.style.opacity = "50%"
        blasphemous.style.cursor = "not-allowed"
        console.log(`cuenta total ${totalCount}`)
        console.log(`juegos de ultima gen ${lastGenGames}`)
        console.log(`juegos online ${onlineGames}`)
        console.log(`juegos indies ${indieGames}`)
        blasphemousCheked = true
    }
    else {
        console.log("este juego ya ha sido seleccionado")
    }
})
/*---------------------------------------Generar Configuracion Gamer---------------------------*/ 
const generate = document.querySelector(".generar")
const i9 = document.querySelector(".i9")
const i5 = document.querySelector(".i5")
const i3 = document.querySelector(".i3")
const grafica = document.querySelector(".grafica")
const boardGamer = document.querySelector(".board_gamer")
const boardSimple = document.querySelector(".board_simple")
const dobleRamGamer = document.querySelector(".doble_ram_gamer")
const cuadrupleRamGamer = document.querySelector(".cuadruple_ram_gamer")
const ramSimple = document.querySelector(".ram_simple")
const ssd = document.querySelector(".ssd")
const hd = document.querySelector(".hd")

function  lastGenConfig () {
    i9.style.display="inline-block"
    boardGamer.style.display="inline-block"
    grafica.style.display="inline-block"
    cuadrupleRamGamer.style.display="inline-block"
    ssd.style.display="inline-block"  
}

function onlineGamesConfig () {
    i5.style.display="inline-block"
    grafica.style.display="inline-block"
    boardGamer.style.display="inline-block"
    dobleRamGamer.style.display="inline-block"
    hd.style.display="inline-block"
}

function indieGamesConfig () {
    i3.style.display="inline-block"
    grafica.style.display="none"
    boardSimple.style.display="inline-block"
    ramSimple.style.display="inline-block"
    hd.style.display="inline-block"
}

function neutralConfig () {
    i5.style.display="inline-block"
    grafica.style.display="none"
    boardSimple.style.display="inline-block"
    dobleRamGamer.style.display="inline-block"
    hd.style.display="inline-block"
}

generate.addEventListener("click",()=>{
    if(totalCount == 3){
        if(lastGenGames >= onlineGames + indieGames){
            lastGenConfig()
        }
        else if (onlineGames >= lastGenGames + indieGames) {
            onlineGamesConfig()
        }
        else if (indieGames >= lastGenGames + onlineGames) {
            indieGamesConfig()
        }
        else {
            neutralConfig()
        }      
    }
    else{
        alert("necesita seleccionar al menos tres videojuegos")
    }
})

/*---------------------------------------Generar configuracion para Trabajo---------------------------*/

const coding = document.querySelector(".coding")
const musicProduction = document.querySelector(".mProduction")
const graphicDesing = document.querySelector(".gDesing")
const videoEditing = document.querySelector(".vEditing")

function codingConfig () {
    i3.style.display="inline-block"
    grafica.style.display="none"
    boardSimple.style.display="inline-block"
    ramSimple.style.display="inline-block"
    ssd.style.display="inline-block"  
}

function graphicDesingConfig () {
    i5.style.display="inline-block"
    grafica.style.display="inline-block"
    boardGamer.style.display="inline-block"
    ramSimple.style.display="inline-block"
    ssd.style.display="inline-block"  
}

function musicProductionConfig () {
    i3.style.display="inline-block"
    grafica.style.display="none"
    boardSimple.style.display="inline-block"
    cuadrupleRamGamer.style.display="inline-block"
    ssd.style.display="inline-block"  
}

function videoEditingConfig  () {
    i5.style.display="inline-block"
    grafica.style.display="inline-block"
    boardGamer.style.display="inline-block"
    ramSimple.style.display="inline-block"
    ssd.style.display="inline-block"  
}

coding.addEventListener("click",()=>{
    resetear()
    codingConfig()
})

graphicDesing.addEventListener("click",()=>{
    resetear()
    graphicDesingConfig()
})

musicProduction.addEventListener("click",()=>{
    resetear()
    musicProductionConfig()
})

videoEditing.addEventListener("click",()=>{
    resetear()
    videoEditingConfig()
})
/*---------------------------------------Reset Button------------------*/
const reset = document.querySelector(".reset")

function resetear () {
    i5.style.display="none"
    i3.style.display="none"
    i9.style.display="none"
    grafica.style.display="none"
    boardGamer.style.display="none"
    boardSimple.style.display="none"
    ramSimple.style.display="none"
    dobleRamGamer.style.display="none"
    cuadrupleRamGamer.style.display="none"
    ssd.style.display="none"
    hd.style.display="none"
    games.style.display="none"
    works.style.display="none"
    lastGenGames = 0
    onlineGames = 0
    indieGames = 0
    totalCount = 0
    eldenRing.style.opacity = "100%"
    eldenRing.style.cursor = "pointer"
    godOfWar.style.opacity = "100%"
    godOfWar.style.cursor = "pointer"
    howarts.style.opacity = "100%"
    howarts.style.cursor = "pointer"
    dota.style.opacity = "100%"
    dota.style.cursor = "pointer"
    minecraft.style.opacity = "100%"
    minecraft.style.cursor = "pointer"
    valorant.style.opacity = "100%"
    valorant.style.cursor = "pointer"
    deadCells.style.opacity = "100%"
    deadCells.style.cursor = "pointer"
    hollowKnight.style.opacity = "100%"
    hollowKnight.style.cursor = "pointer"
    blasphemous.style.opacity = "100%"
    blasphemous.style.cursor = "pointer"
    eldenRingCheked = false
    godOfWarCheked = false
    howartsCheked = false
    dotaCheked = false
    minecraftCheked = false
    valorantCheked = false
    deadCellsCheked = false
    hollowKnightCheked = false
    blasphemousCheked = false
}

reset.addEventListener("click",()=>{
    resetear()
})