const forwardArrow = document.querySelector(".controls .forward-arrow");
const backwardArrow = document.querySelector(".controls .backward-arrow");
const controlArrows = document.querySelectorAll(".gallery .controls div");
const gallery = document.querySelector(".gallery");
const images = document.querySelectorAll(".gallery .gallery-images img")
const input = document.querySelector(".cart-section .buttons input");
const addBtn = document.querySelector(".cart-section .add-btn");
const removeBtn = document.querySelector(".cart-section .remove-btn");
const addToCartBtn = document.querySelector(".add-to-cart");
const boxes = document.querySelectorAll(".size-boxes .box-child");
const changingSize = document.querySelector(".size-section .size-change");

let currentIndex = 0;
forwardArrow.addEventListener("click",() => {
currentIndex = (currentIndex + 1) % images.length;
images.forEach((img, i) => {
    img.style.display = i === currentIndex ? "block" : "none"; 
  });
})
backwardArrow.addEventListener("click",() => {
currentIndex = (currentIndex - 1 + images.length) % images.length;
images.forEach((img, i) => {
    img.style.display = i === currentIndex ? "block" : "none"; 
  });
})

let value = 1;
addBtn.addEventListener("click", ()=>{
input.value = value++;
})
removeBtn.addEventListener("click", () => {
if(input.value > 1){
input.value = value--;
}
})

addToCartBtn.addEventListener("click", (e) => {
  alert("Your product has been added to cart!!");
  input.value = 1;
})

boxes.forEach((box) => {
    box.style.border = "2px solid rgba(0, 0, 0, 0.2)";
  box.addEventListener("click", () => {
    boxes.forEach((b) => {
      b.classList.remove("active");
      b.style.border = "2px solid rgba(0,0,0,0.2)"
    })
    box.style.border = "2px solid black";
    changingSize.textContent = box.textContent;
  })
})

