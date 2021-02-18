const nav = document.querySelector(".js-nav")

function handleHover(event) {
    nav.style.color = "#394ae6"
    nav.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff"
}

function handleOut(event) {
    nav.style.color = "white"
    nav.style.textShadow = "0"
}

function init(){
    window.onscroll = function hold(){
        if(window.pageYOffset > nav[0].offSetTop) {
            nav[0].classList.add("nav")
        } else {
            nav[0].classList.remove("nav")
        }
    }

    nav.addEventListener("mouseover", handleHover)
    nav.addEventListener("mouseout", handleOut)
}

init()