const navAbout = document.querySelector("#js-navAbout")
const navMain = document.querySelector("#js-navMain")
const navContact = document.querySelector("#js-navContact")


function handleHoverAbout(event) {
    navAbout.style.color = "rgb(255, 252, 95)"
    navAbout.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff"

}

function handleHoverMain(event) {
    navMain.style.color = "rgb(255, 252, 95)"
    navMain.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff"

}

function handleHoverContact(event) {
    navContact.style.color = "rgb(255, 252, 95)"
    navContact.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff"

}

function handleOutAbout(event) {
    navAbout.style.color = "white"
    navAbout.style.textShadow = "none"
}

function handleOutMain(event) {
    navMain.style.color = "white"
    navMain.style.textShadow = "none"
}

function handleOutContact(event) {
    navContact.style.color = "white"
    navContact.style.textShadow = "none"
}
function init(){

    navAbout.addEventListener("mouseover", handleHoverAbout)
    navAbout.addEventListener("mouseout", handleOutAbout)
    navMain.addEventListener("mouseover", handleHoverMain)
    navMain.addEventListener("mouseout", handleOutMain)
    navContact.addEventListener("mouseover", handleHoverContact)
    navContact.addEventListener("mouseout", handleOutContact)
}

init()