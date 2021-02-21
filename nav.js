const navAbout = document.querySelector("#js-navAbout")
const navMain = document.querySelector("#js-navMain")
const navContact = document.querySelector("#js-navContact")

const hideNShowAbout = document.querySelector(".about-hidden")
const aboutOverlay = hideNShowAbout.querySelector(".about-overlay")
const closeAbout = hideNShowAbout.querySelector("#btn-about-close")

const hideNShowContact = document.querySelector(".contact")
const contactOverlay = hideNShowContact.querySelector(".contact-overlay")
const closeContact = hideNShowContact.querySelector("#btn-contact-close")


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

function handleopenAbout(event) {
    console.log("clicked")
    navAbout.classList.remove("hidden")
}

function handleopenContact(event) {
    navContact.classList.remove("hidden")
}

function handlecloseAbout(event){
    hideNShowAbout.classList.add("hidden")
}

function handlecloseContact(event){
    hideNShowAbout.classList.add("hidden")
}

function init(){

    navAbout.addEventListener("mouseover", handleHoverAbout)
    navAbout.addEventListener("mouseout", handleOutAbout)
    navMain.addEventListener("mouseover", handleHoverMain)
    navMain.addEventListener("mouseout", handleOutMain)
    navContact.addEventListener("mouseover", handleHoverContact)
    navContact.addEventListener("mouseout", handleOutContact)

    navAbout.addEventListener("click", handleopenAbout)
    navContact.addEventListener("click", handleopenContact)
    aboutOverlay.addEventListener("click", handlecloseAbout)
    closeAbout.addEventListener("click", handlecloseAbout)
    contactOverlay.addEventListener("click", handlecloseContact)
    closeContact.addEventListener("click", handlecloseContact)
}

init()