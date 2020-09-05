import interact from 'interactjs'
import { windowMaker } from "./utils/windowMaker.js"
import "./main.scss"

window.onload = function() {

    // Make profile window
    const profile = windowMaker(
        "profile",
        "Hello world",
        "This is me",
        ["/assets/JavaScript-logo.png", "/assets/HTML5_Logo.svg"],
        "/assets/IMG_4263.JPG",
        "Jayden Reynolds",
        "Web Developer",
    )

    const wordCounter = windowMaker(
        "word-counter",
        "test",
        "react",
        ["/assets/react.png"],
        "/assets/word-counter.png",
        null, null
    )

    // Append windows
    const screen = document.getElementById("screen")
    screen.appendChild(wordCounter)
    screen.appendChild(profile)
    

    // Creates default x/y position for each window
    const position = {}
    const classElements = document.getElementsByClassName("window")
    for(const element of classElements) {
        position[element.id] = {
            x: 0, y: 0
        }
        console.log("working")
    }

    // Moves windows
    interact('.draggable').draggable({
        listeners: {
            start (event) {
            const thisElement = event.target.id
            console.log(event.type, event.target)
            console.log(event.target.id)
            console.log(position[thisElement])
            },
            move (event) {
            const thisElement = event.target.id
            position[thisElement].x += event.dx
            position[thisElement].y += event.dy
    
            event.target.style.transform =
                `translate(${position[thisElement].x}px, ${position[thisElement].y}px)`
            },
        }
        })

    // Run mobile friendly drag function if user is on a mobile device
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        
    } 
}

