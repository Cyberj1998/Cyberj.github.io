const primerPanel = document.getElementById('project1')
const segundoPanel = document.getElementById('project2')
const tercerPanel = document.getElementById('project3')
const cuartoPanel = document.getElementById('project4')
const quintoPanel = document.getElementById('project5')
sextoPanel = document.getElementById('project6')
const lenguajeToggle = document.querySelector(".toggle")


//--------------------DISPLAY PROJECTS--------------------------
primerPanel.classList.add("image_animation")


setTimeout(() => {
    segundoPanel.style.display = "block"
    segundoPanel.classList.add("image_animation")
}, 1000);

setTimeout(() => {
    tercerPanel.style.display = "block"
    tercerPanel.classList.add("image_animation")
}, 2000);

setTimeout(() => {
    cuartoPanel.style.display = "block"
    cuartoPanel.classList.add("image_animation")
}, 3000);

setTimeout(() => {
    quintoPanel.style.display = "block"
    quintoPanel.classList.add("image_animation")
}, 4000);

setTimeout(() => {
    sextoPanel.style.display = "block"
    sextoPanel.classList.add("image_animation")
}, 5000);


//-----------------CHANGE LENUGAGE------------------

let españolBio = ("Desarrollador Web Front-End Autodidacta con fuertes conocimientos de HTML/CSS y React hábil para crear intuitivas web apps faciles de usar y entender para el usuario")

let españolResumen = ("Disfruto resolviendo problemas con soluciones escalables y con un codigo limpio y legible. Tengo una genuina pasión por crear diseños inspiradores y acordes a las tendencias actuales")

let englishBio = ("Self Taught Front-End Web Developer specializing in HTML/CSS JavaScript and React. Skilled in creating intuitive, user Friendly websites")

let englishResumen = ("I enjoy solving problems with clean scalable solutions. I have a genuine passion for inspiring desing")


const resumen = document.querySelector(".bio");
const bio = document.querySelector(".little_bio");

const summary = document.querySelector(".small_bio");
const habil = document.querySelector(".skill");
const littleBio = document.querySelector(".description_title");
const projects = document.querySelector(".projects_display");

let español = false

lenguajeToggle.addEventListener("click",()=>{
    if(español == false){
        lenguajeToggle.style.marginLeft = "-25px"
        resumen.innerText = españolResumen
        bio.innerText = españolBio
        summary.innerText = "Resumen"
        habil.innerText = "Habilidades"
        littleBio.innerText = "Descripción"
        projects.innerText = "Proyectos"
        español = true
    }
    else{
        lenguajeToggle.style.marginLeft = "20px"
        resumen.innerText = englishResumen
        bio.innerText = englishBio
        summary.innerText = "Summary"
        habil.innerText = "Skills"
        littleBio.innerText = "About Me"
        projects.innerText = "Projects"
        español = false
    }
})

//-------------------------DARK lIGHT MODE-----------------------
const darkLight = document.querySelector(".dark_light")
const darkLightToggle = document.querySelector(".dark_light_toggle")

//-----------------things i need to change the color of--------------

const left = document.querySelector(".left_section")
//#E0f7fA
const right = document.querySelector(".right_section")
//#181818


//-----light colors left- right-#18ffff  
let dark = true


darkLightToggle.addEventListener("click",()=>{
    if(dark == true){
        darkLightToggle.style.marginLeft = "25px"
        darkLightToggle.style.backgroundColor = "whitesmoke"
        darkLight.style.backgroundColor = "#181818"
        right.style.backgroundColor = "slategray"
        bio.style.color = "#212121"
        littleBio.style.color = "black"
        projects.style.color = "black"
        dark = false
    }
    else{
        darkLightToggle.style.marginLeft = "-25px"
        darkLightToggle.style.backgroundColor = "#263238"
        darkLight.style.backgroundColor = "whitesmoke"
        right.style.backgroundColor = "#181818"
        bio.style.color = "#909090"
        littleBio.style.color = "whitesmoke"
        projects.style.color = "whitesmoke"
        dark = true
    }
})