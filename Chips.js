//---------------------------------Slider---------------------------------------------

const toggle = document.querySelector(".toggle")
const slider = document.querySelector(".slider_panel")
let sliderDisplay = false


toggle.addEventListener("click",()=>{
    if(sliderDisplay == false){
        slider.style.marginLeft = '0%'
        sliderDisplay = true
    }
    else {
        slider.style.marginLeft = '-50%'
        sliderDisplay = false
    }
})

//--------------------------------Chip Bags---------------------------------------------
const bags = document.querySelectorAll('.chip_bag')
const ingridients = document.querySelectorAll('.ingridient')
const array = [1,2,3,4,5]

for(i=0;i<5;i++){
    bags[i].classList.add(`bag${array[i]}`)
}

for(i=0;i<5;i++){
    ingridients[i].classList.add(`ingridient${array[i]}`)
}

//----------------------------------------------Buy animation-------------------------------
const product1 = document.querySelector(".one")
const product2 = document.querySelector(".two")
const product3 = document.querySelector(".three")
const product4 = document.querySelector(".four")
const product5 = document.querySelector(".five")
const cart = document.querySelector(".number_of_products")
const cartIcon = document.querySelector(".cart")
const paymentPanel = document.querySelector(".modal") 
const paypalPanel = document.querySelector(".payment_panel")
const startButton = document.querySelector(".hero_buttom")
const amount = document.querySelector(".total_to_pay")
let cartProducts = 0
let money = 0

startButton.addEventListener("click",()=>{
    window.scrollTo({top: 500,left: 0,behavior: "smooth"})
})

paymentPanel.addEventListener("click",(e)=>{
   if(e.target.classList == "modal"){
       paymentPanel.style.display = "none"
   }
})

cartIcon.addEventListener("click",()=>{
    paymentPanel.style.display = "flex"
    window.scrollTo({top: 0,left: 0,behavior: "smooth"})
    amount.innerText = `${money}$`
})

product1.addEventListener("click",()=>{
    product1.classList.add("product_animation1")
    product1.classList.remove("product")
    cartProducts += 1
    money += 3
    cart.innerText = cartProducts
    setTimeout(() => {
        product1.classList.add("product")
        product1.classList.remove("product_animation1")
    }, 1000);
})
product2.addEventListener("click",()=>{
    product2.classList.add("product_animation2")
    product2.classList.remove("product")
    cartProducts += 1
    money += 5
    cart.innerText = cartProducts
    setTimeout(() => {
        product2.classList.add("product")
        product2.classList.remove("product_animation2")
    }, 1000);
})
product3.addEventListener("click",()=>{
    product3.classList.add("product_animation3")
    product3.classList.remove("product")
    cartProducts += 1
    money += 7
    cart.innerText = cartProducts
    setTimeout(() => {
        product3.classList.add("product")
        product3.classList.remove("product_animation3")
    }, 1000);
})
product4.addEventListener("click",()=>{
    product4.classList.add("product_animation4")
    product4.classList.remove("product")
    cartProducts += 1
    money += 5
    cart.innerText = cartProducts
    setTimeout(() => {
        product4.classList.add("product")
        product4.classList.remove("product_animation4")
    }, 1000);
})
product5.addEventListener("click",()=>{
    product5.classList.add("product_animation5")
    product5.classList.remove("product")
    cartProducts += 1
    money += 10
    cart.innerText = cartProducts
    setTimeout(() => {
        product5.classList.add("product")
        product5.classList.remove("product_animation5")
    }, 1000);
})

//-----------------------------------Product Info---------------------------
const productInfoOne = document.querySelector(".product_info_one")
const productInfoTwo = document.querySelector(".product_info_two")
const productInfoThree = document.querySelector(".product_info_three")

product1.addEventListener("mousemove",()=>{
    productInfoOne.innerText = "- Benefits to Health: Packed with essential nutrients like vitamins A, C, and K, kale chips are a powerhouse for boosting immunity and supporting healthy skin."
    productInfoTwo.innerText = "- Nutritional Value: Low in calories and high in antioxidants, fiber, and omega-3 fatty acids, kale chips are a guilt-free snack for your munching pleasure."
    productInfoThree.innerText = "- Production Process: Our kale chips are carefully crafted from fresh kale leaves, lightly seasoned, and dehydrated to crisp perfection for a satisfying crunch."
    productInfoOne.style.border = "solid 1px whitesmoke";
    productInfoOne.style.backdropFilter = "blur(10px)";
    productInfoTwo.style.border = "solid 1px whitesmoke";
    productInfoTwo.style.backdropFilter = "blur(10px)";
    productInfoThree.style.border = "solid 1px whitesmoke";
    productInfoThree.style.backdropFilter = "blur(10px)";
})

product2.addEventListener("mousemove",()=>{
    productInfoOne.innerText = "- Benefits to Health: Packed with beta-carotene, fiber, and vitamins, sweet potato chips are perfect for supporting eye health and digestion."
    productInfoTwo.innerText = "- Nutritional Value: A wholesome alternative to traditional chips, sweet potato chips are rich in antioxidants and provide a natural source of energy."
    productInfoThree.innerText = "- Production Process: Our sweet potato chips are hand-cut, kettle-cooked in high-quality oils, and seasoned with a blend of herbs and spices for a delectable flavor."
    productInfoOne.style.border = "solid 1px whitesmoke";
    productInfoOne.style.backdropFilter = "blur(10px)";
    productInfoTwo.style.border = "solid 1px whitesmoke";
    productInfoTwo.style.backdropFilter = "blur(10px)";
    productInfoThree.style.border = "solid 1px whitesmoke";
    productInfoThree.style.backdropFilter = "blur(10px)";
})

product3.addEventListener("mousemove",()=>{
    productInfoOne.innerText = "- Benefits to Health: Packed with essential nutrients like folate, manganese, and fiber, beet chips support healthy blood pressure and digestion."
    productInfoTwo.innerText = "- Nutritional Value: Low in calories and high in antioxidants, beet chips are a nutrient-dense snack that promotes overall wellness and vitality."
    productInfoThree.innerText = "- Production Process: Our beet chips are sliced thin, roasted to crispy perfection, and lightly seasoned with sea salt for a flavorful and satisfying crunch."
    productInfoOne.style.border = "solid 1px whitesmoke";
    productInfoOne.style.backdropFilter = "blur(10px)";
    productInfoTwo.style.border = "solid 1px whitesmoke";
    productInfoTwo.style.backdropFilter = "blur(10px)";
    productInfoThree.style.border = "solid 1px whitesmoke";
    productInfoThree.style.backdropFilter = "blur(10px)";
})

product4.addEventListener("mousemove",()=>{
    productInfoOne.innerText = "- Benefits to Health: A complete source of protein, quinoa chips are packed with essential amino acids and fiber to support muscle growth and digestion."
    productInfoTwo.innerText = "- Nutritional Value: Gluten-free and high in antioxidants, quinoa chips are a nutrient-dense snack that provides sustained energy and supports overall health."
    productInfoThree.innerText = "- Production Process: Our quinoa chips are made from wholesome quinoa grains, cooked to perfection, and seasoned with a blend of spices for a flavorful crunch."
    productInfoOne.style.border = "solid 1px whitesmoke";
    productInfoOne.style.backdropFilter = "blur(10px)";
    productInfoTwo.style.border = "solid 1px whitesmoke";
    productInfoTwo.style.backdropFilter = "blur(10px)";
    productInfoThree.style.border = "solid 1px whitesmoke";
    productInfoThree.style.backdropFilter = "blur(10px)";
})

product5.addEventListener("mousemove",()=>{
    productInfoOne.innerText = "- Benefits to Health: Packed with plant-based protein, fiber, and iron, chickpea chips are a nutritious snack that supports muscle health and energy levels."
    productInfoTwo.innerText = "- Nutritional Value: Low in calories and high in fiber, chickpea chips are a guilt-free alternative to traditional chips that promote satiety and digestive health."
    productInfoThree.innerText = "- Production Process: Our chickpea chips are crafted from premium chickpeas, roasted to crispy perfection, and seasoned with a savory blend of spices for a satisfying crunch."
    productInfoOne.style.border = "solid 1px whitesmoke";
    productInfoOne.style.backdropFilter = "blur(10px)";
    productInfoTwo.style.border = "solid 1px whitesmoke";
    productInfoTwo.style.backdropFilter = "blur(10px)";
    productInfoThree.style.border = "solid 1px whitesmoke";
    productInfoThree.style.backdropFilter = "blur(10px)";
})

//-------------------------------------------Lazy load---------------------------------------



const chipsBowl = document.querySelector(".care_chips")
const textIntro = document.querySelector(".text_intro")
const machine = document.querySelector(".machine")
const bottomMachine = document.querySelector(".machine_bottom")

const objects = [chipsBowl,textIntro,machine,bottomMachine]

const verifyVisibility = (entries) => {
    const entry = entries[0]
    entry.target.style.opacity = "100"
}


const observer = new IntersectionObserver(verifyVisibility)

for(const object of objects){
    observer.observe(object)
}