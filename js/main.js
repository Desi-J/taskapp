//grab elements
console.log("working")
const menuBtn = document.querySelector(".menu")
exitBtn = document.querySelector(".exit")
nav = document.querySelector("nav");
links = document.querySelectorAll(".link");

console.log(menuBtn, exitBtn, nav, links);

function openNav() {
    menuBtn.classList.add("menu-btn");
    // nav.classList.remove("hidden");
}

function closeNav() {
    menuBtn.classList.remove("hidden");
    nav.classList.add("hidden");    
}


menuBtn.addEventListener("click", () => {
    openNav()
});

exitBtn.addEventListener("click", () => {
        console.log("working")
        closeNav()
    })

    links.forEach(link => {
        link.addEventListener("click", () => {
            closeNav()
        })
    })


    