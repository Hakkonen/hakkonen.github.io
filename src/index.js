import { dragElement } from "./utils/drag-element.js"
// import { desktop } from "./utils/desktop.js"
import { windowMaker } from "./utils/windowMaker.js"
import "./main.scss"

window.onload = function() {

    // Make profile window
    windowMaker(
        "profile",
        "Hello world",
        "This is me",
        ["/assets/JavaScript-logo.png", "/assets/HTML5_Logo.svg"],
        "/assets/IMG_4263.JPG",
        "Jayden Reynolds",
        "Web Developer",
    )

    const classElements = document.getElementsByClassName("window")
    for(const element of classElements) {
        element.addEventListener("mousedown", (event) => {
            dragElement(event)
        })
    }

    // Run mobile friendly drag function if user is on a mobile device
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // Run movile drag
        
    } 
}

