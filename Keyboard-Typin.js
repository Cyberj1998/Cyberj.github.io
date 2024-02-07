/*------------------------This is for PC only------------------*/
if(window.screen.width <= 500){
  alert("este juego es para PC : This game is only for PC")
}


/*-------------------Keys---------------------------*/ 
const firstRow = document.querySelector(".first_row")
const secondRow = document.querySelector(".second_row")
const thirtRow = document.querySelector(".thirt_row")
const firstRowLetters = ["Q","W","E","R","T","Y","U","I","O","P"]
const secondRowLetters = ["A","S","D","F","G","H","J","K","L","Ñ"]
const thirtRowLetters = ["Z","X","C","V","B","N","M"]
/*-----------------text to type---------------------------*/ 
const textArea = document.querySelector(".text_area")
const generate = document.querySelector(".generate")
const text = ("loremipsumdolor")
textArray = text.split('')

let firstLetter = false
let generateText = false
let crono = true

generate.addEventListener("click",()=>{
    textArea.innerText= textArray.join("")
    generateText = true
})


function createFirstRow () {
    for(i = 0; i < 10; i++){
        const key = document.createElement("div")
        key.classList.add("key",firstRowLetters[i])
        key.setAttribute('id',`${firstRowLetters[i]}`)
        key.innerText=firstRowLetters[i]
        firstRow.appendChild(key)
    }    
}

function createSecondRow () {
    for(i = 0; i < 10; i++){
        const key = document.createElement("div")
        key.classList.add("key",secondRowLetters[i])
        key.setAttribute('id',`${secondRowLetters[i]}`)
        key.innerText=secondRowLetters[i]
        secondRow.appendChild(key)
    }    
}

function createThirtRow () {
    for(i = 0; i < 7; i++){
        const key = document.createElement("div")
        key.classList.add("key",thirtRowLetters[i])
        key.setAttribute('id',`${thirtRowLetters[i]}`)
        key.innerText=thirtRowLetters[i]
        thirtRow.appendChild(key)
    }    
}

createFirstRow()
createSecondRow()
createThirtRow()





//----------------------cronometer--------------------------



const hoursDisplay = document.querySelector(".hour")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const miliDisplay = document.querySelector(".mili")
const startbtn = document.querySelector(".start_time")
const stopbtn = document.querySelector(".stop_time")
const record = document.querySelector(".show_record")

let counting = false

let hr = min = sec = ms = "0" + 0, startTime;
/*function to start the cronometer*/
function start () {
  if(crono == false && generateText == true && counting == false){
    counting = true
    crono = true
    startTime = setInterval(()=>{
    ms++;
    ms = ms < 10 ? "0" + ms : ms;
    
    if(ms == 100){
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    }
    if(sec == 60){
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }
    if(min == 60){
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }
    putValue();
  }, 10);
  }
}
let recordStore
let recordDisplay = document.querySelector(".record_display")
/*function to stop the cronometer*/
function stopTime () {
  if(textArray.length == 1){
    recordDisplay.innerText = `min ${min } sec ${sec} mil ${ms}`
    recordStore = `${min}-${sec}-${ms}`
    console.log(recordStore)
    min = 0
    sec = 0
    ms = 0
    const timer = document.querySelector(".time")
    timer.style.display = "none"
  }
}

/*function to show the values in the html */
function putValue () {
  document.querySelector(".mili").innerHTML = ms;
  document.querySelector(".seconds").innerHTML = sec;
  document.querySelector(".minutes").innerHTML = min;
  document.querySelector(".hour").innerHTML = hr;
}



const teclas = document.querySelectorAll(".key")

console.log(teclas)
const body = document.querySelector('body')

body.addEventListener("keydown",(e)=>{
    console.log(e.key)
    crono = false
    start()
    stopTime()
    let pressedKey = e.key
    if(pressedKey == textArray[0] && generateText == true){
        textArray.splice(0,1)
        textArea.innerText = textArray.join("")
    }
    /*-----------Color------------------*/
    console.log(e.key)
    let array = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"," "]
    const unPress = () => {
      colorKey.style.backgroundColor = "transparent"
    }
    const colorKey = teclas[array.indexOf(`${e.key}`)]
    colorKey.style.backgroundColor = "aqua"
    setTimeout(unPress,50)
    
})


/*-------------------------Store the Record on Indexed DB--------------------------*/


const IDBRequest = indexedDB.open("Record",1)


const addObject = (object) => {
  IDBRequest.addEventListener("succes",()=>{
    const db = IDBRequest.result
    db.createObjectStore("Record",{
      "autoIncrement" : true
    })
    const IDBTransaction = db.transaction("Record","readwrite")
    const objectStore = IDBTransaction.objectStore("Record")
    objectStore.add(object)
    IDBTransaction.addEventListener("complete",()=>{
    console.log("object added succesfully")
    console.log(object)
  })  
  })
}


addObject("datos")