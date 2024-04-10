const avatar1 = document.getElementById("primer_avatar")
const avatar2 = document.getElementById("segundo_avatar")
const avatar3 = document.getElementById("tercer_avatar")
const avatar4 = document.getElementById("cuarto_avatar")
const display1 = document.querySelector(".model1")
const display2 = document.querySelector(".model2")
const display3 = document.querySelector(".model3")
const display4 = document.querySelector(".model4")

avatar1.addEventListener("click",()=>{
    display1.style.display="inline-block"
    display2.style.display="none"
    display3.style.display="none"
    display4.style.display="none"
})
avatar2.addEventListener("click",()=>{
    display1.style.display="none"
    display2.style.display="inline-block"
    display3.style.display="none"
    display4.style.display="none"
})
avatar3.addEventListener("click",()=>{
    display1.style.display="none"
    display2.style.display="none"
    display3.style.display="inline-block"
    display4.style.display="none"
})
avatar4.addEventListener("click",()=>{
    display1.style.display="none"
    display2.style.display="none"
    display3.style.display="none"
    display4.style.display="inline-block"
})

//---------------------------------Top Section display----------------------------

const topSection = document.querySelector(".top_section")

setTimeout(() => {
    topSection.style.display = "none"
}, 3000);