// get all products
let productsURL = "https://fakestoreapi.com/products"
//get all categories
let categoriesURl = "https://fakestoreapi.com/products/categories"


const productsContainer = document.querySelector(".all_products")

/*------------------------------------------Fetch All Products----------------------------------*/ 

const fetchProducts = () => {
    try {
        fetch(productsURL).then(res => res.json()).then(data => {
            console.log(data)
            for(i = 0; i < 20; i ++){
                productsContainer.innerHTML += `<div id="${data[i].title}" class="card">
                <div class="image-container">  
                    <img class="image_itself" src="${data[i].image}">
                    <div class="price">${data[i].price} $</div>
                </div>
                <label class="favorite">
                    <input checked="" type="checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                        <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
                    </svg>
                </label>
            
                <div class="content">
                    <div class="brand">${data[i].title}</div>
                    <div class="product-name">C${data[i].description}</div>
                    <div class="color-size-container" id="${data[i].category}">
                    <div class="colors">
                        Color
                        <ul class="colors-container">
                <li class="color"><a href="#"></a> <span class="color-name">Collegiate Gold</span></li>
                <li class="color active"><a href="#"></a><span class="color-name">Team Navy</span></li>
                <li class="color"><a href="#"></a><span class="color-name">Pulse Blue</span></li>
                <li class="color"><a href="#"></a><span class="color-name">Pink Fusion</span></li>
                +2
            </ul>
        </div>
        <div class="sizes">
            Size
            <ul class="size-container">
                <li class="size">
                    <label class="size-radio">
                        <input name="size" value="xs" type="radio">
                        <span class="name">XS</span>
                    </label>
                </li>
                <li class="size">
                    <label class="size-radio">
                        <input checked="" name="size" value="s" type="radio">
                        <span class="name">S</span>
                    </label>
                </li>
                <li class="size">
                    <label class="size-radio">
                        <input name="size" value="m" type="radio">
                        <span class="name">M</span>
                    </label>
                </li>
                <li class="size">
                    <label class="size-radio">
                        <input name="size" value="l" type="radio">
                        <span class="name">L</span>
                    </label>
                </li>
                <li class="size">
                    <label class="size-radio">
                        <input name="size" value="xl" type="radio">
                        <span class="name">XL</span>
                    </label>
                </li>
                
            </ul>
        </div>
                    </div>
                    
                    <div class="rating">
                        <svg viewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" class="svg four-star-svg">
                            <path fill="#fc0" transform="translate(-0.001 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" id="star-svgrepo-com"></path>                
                        </svg>
                        (${data[i].rating.rate})
                    </div>
                </div>
            
                <div class="button-container">
                    <button class="buy-button button">Buy Now</button>
                    <button class="cart-button button">
                        <svg viewBox="0 0 27.97 25.074" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z" id="cart-shopping-solid"></path>
                        </svg>
            
                    </button>
                </div>
            </div>
            ` 
                console.log(`${i}${data[i].image}`)
            }   
        })
    } catch (error) {
        console.log(error)
    }
}

fetchProducts()

//-----------------------------------------------Fetch Categories---------------------------

const categoriesSection = document.querySelector(".categories_selector")

function fetchCategories () {
    fetch(categoriesURl).then(response => response.json()).then(data => {
        console.log(data)
        for(i = 0; i <= 3; i ++){
            const categoryCard = document.createElement("div")
            categoryCard.classList.add("category_card")
            categoriesSection.appendChild(categoryCard)
            categoryCard.innerText = `${data[i]}`
            //-----------------------------------
            if(i == 0){
                categoryCard.style.borderRadius = "73% 27% 38% 62% / 47% 61% 39% 53%"
                categoryCard.innerHTML += `<img class="category_icon" src="./Assets/Shop_Categories/electronics.png" alt="electronics">`
            }
            else if(i == 1){
                categoryCard.style.borderRadius = "32% 68% 71% 29% / 78% 61% 39% 22%"
                categoryCard.innerHTML += `<img class="category_icon" src="./Assets/Shop_Categories/ring.png" alt="Jewelery">`
            }
            else if(i == 2){
                categoryCard.style.borderRadius = "81% 19% 73% 27% / 38% 40% 60% 62%"
                categoryCard.innerHTML += `<img class="category_icon" src="./Assets/Shop_Categories/t_shirt.png" alt="Men's Clothing">`
            }
            else if(i == 3){
                categoryCard.style.borderRadius = "13% 87% 34% 66% / 63% 49% 51% 37%"
                categoryCard.innerHTML += `<img class="category_icon" src="./Assets/Shop_Categories/Clothes.png" alt="Women's Clothing">`
            }
            else {
                console.log("All categories has benn fetch")
            }
        }
    })
}

fetchCategories()


//-------------------------------------------Search Logic----------------------------
const searchInput = document.querySelector(".search_input")
const searchIcon = document.querySelector(".search_icon")


searchIcon.addEventListener("click",()=>{
    fetch(productsURL).then(response => response.json()).then(data => {
        window.scrollTo({top: 1000,left: 0,behavior: "smooth"})
        productsContainer.innerHTML = ""
        for(i = 0; i < 20; i ++){
            if(data[i].title.toLowerCase().includes(searchInput.value)){
                productsContainer.innerHTML += `<div id="${data[i].title}" class="card">
                <div class="image-container">  
                    <img class="image_itself" src="${data[i].image}">
                    <div class="price">${data[i].price} $</div>
                </div>
                <label class="favorite">
                    <input checked="" type="checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                        <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
                    </svg>
                </label>
            
                <div class="content">
                    <div class="brand">${data[i].title}</div>
                    <div class="product-name">C${data[i].description}</div>
                    <div class="color-size-container" id="${data[i].category}">
                    <div class="colors">
                        Color
                        <ul class="colors-container">
                <li class="color"><a href="#"></a> <span class="color-name">Collegiate Gold</span></li>
                <li class="color active"><a href="#"></a><span class="color-name">Team Navy</span></li>
                <li class="color"><a href="#"></a><span class="color-name">Pulse Blue</span></li>
                <li class="color"><a href="#"></a><span class="color-name">Pink Fusion</span></li>
                +2
            </ul>
        </div>
        <div class="sizes">
            Size
            <ul class="size-container">
                <li class="size">
                    <label class="size-radio">
                        <input name="size" value="xs" type="radio">
                        <span class="name">XS</span>
                    </label>
                </li>
                <li class="size">
                    <label class="size-radio">
                        <input checked="" name="size" value="s" type="radio">
                        <span class="name">S</span>
                    </label>
                </li>
                <li class="size">
                    <label class="size-radio">
                        <input name="size" value="m" type="radio">
                        <span class="name">M</span>
                    </label>
                </li>
                <li class="size">
                    <label class="size-radio">
                        <input name="size" value="l" type="radio">
                        <span class="name">L</span>
                    </label>
                </li>
                <li class="size">
                    <label class="size-radio">
                        <input name="size" value="xl" type="radio">
                        <span class="name">XL</span>
                    </label>
                </li>
                
            </ul>
        </div>
                    </div>
                    
                    <div class="rating">
                        <svg viewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" class="svg four-star-svg">
                            <path fill="#fc0" transform="translate(-0.001 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" id="star-svgrepo-com"></path>                
                        </svg>
                        (${data[i].rating.rate})
                    </div>
                </div>
            
                <div class="button-container">
                    <button class="buy-button button">Buy Now</button>
                    <button class="cart-button button">
                        <svg viewBox="0 0 27.97 25.074" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z" id="cart-shopping-solid"></path>
                        </svg>
            
                    </button>
                </div>
            </div>
            `
            }
        }
        if(productsContainer.children.length == 0){
            productsContainer.innerHTML = `<img src="./Assets/Not_Found.gif" class="not_found" alt="Ups Not Found">`
        }
    })
})

//--------------------------------------------------------------------------

