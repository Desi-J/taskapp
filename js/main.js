//grab elements
console.log("working")
const menuBtn = document.querySelector(".menu")
exitBtn = document.querySelector(".exit")
nav = document.querySelector("nav");

console.log(menuBtn, exitBtn, nav);


menuBtn.addEventListener("click", () => {
   nav.classList.add("menu-btn");
});

exitBtn.addEventListener("click", () => {
   nav.classList.remove("menu-btn");    
    })


    