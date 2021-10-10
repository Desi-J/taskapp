//grab elements
console.log("working")
const menuBtn = document.querySelector(".menu")
exitBtn = document.querySelector(".exit")
nav = document.querySelector("nav");

console.log(menuBtn, exitBtn, nav);


menuBtn.addEventListener("click", () => {
   nav.classList.add("open");
});

exitBtn.addEventListener("click", () => {
   nav.classList.remove("open");    
    })


    