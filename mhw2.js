const button = document.querySelector("#shop-btn");
const overlayCart = document.querySelector("#overlay-cart");
const closeBtn = document.querySelector("#close-btn")

function apriCarrello(){
    overlayCart.classList.add("shown")
}
function chiudiCarrello() {
    overlayCart.classList.remove("shown")
}
button.addEventListener("click", apriCarrello)
closeBtn.addEventListener("click", chiudiCarrello)