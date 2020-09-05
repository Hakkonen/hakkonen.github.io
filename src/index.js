import interact from 'interactjs'
import { windowMaker } from "./utils/windowMaker.js"
import "./main.scss"

window.onload = function() {

    // MARK: Generate windows
    // Make profile window
    const profile = windowMaker(
        null,
        null,
        null,
        [],
        "./assets/profile.jpg",
        "Jayden Reynolds",
        "Web Developer",
    )

    // Stack window
    const myStack = windowMaker(
        "my-stack",
        "Stacks",
        null,
        ["./assets/js.png", "./assets/webpack.svg", "./assets/html5.svg", "./assets/css3.png", "./assets/react.png", "./assets/node-js.png"],
        null, null, null
    )

    // Social and contact
    const socialAndContact = windowMaker(
        "social-contact",
        "Where to find me",
        null,
        {
            "./assets/at-sign.svg": "mailto:jayden@jaydenreynolds.com",
            "./assets/github.svg": "https://github.com/Hakkonen",
            "./assets/instagram.svg": "https://www.instagram.com/dasistjayden",
            "./assets/linkedin.svg": "https://www.linkedin.com/in/jayden-reynolds-45ba751b4/",
            "./assets/sun.svg": "https://www.goodreads.com/quotes/927540-tell-me-the-story-about-how-the-sun-loved-the"
        },
        null, null, null
    )

    let wordCounter
    // Run mobile friendly drag function if user is on a mobile device
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) === false) {
        // Project window for react word counter
        wordCounter = windowMaker(
            "word-counter",
            "Word Counter",
            "<a href='https://word-counter-by-jayden.herokuapp.com/' target='_blank'>Hosted at Heroku</a>",
            ["./assets/react.png"],
            "./assets/word-counter.png",
            null, null
        )
    } 

    // Append windows
    // Order determines z-index
    const screen = document.getElementById("screen")
    if(wordCounter) { screen.appendChild(wordCounter) }
    screen.appendChild(myStack)
    screen.appendChild(socialAndContact)
    screen.appendChild(profile)
    

    // Creates default x/y position for each window
    const position = {}
    const classElements = document.getElementsByClassName("window")
    for(const element of classElements) {
        // Create position variable
        position[element.id] = {
            x: 0, y: 0
        }
    }

    // Manages z-index
    // TODO: Reset other windows so it isn't possible to
    // overload z-index
    const setZ = () => {
        let counter = 1
        const windows = document.getElementsByClassName("window")
        for(const window of windows) {
            if(counter <= parseInt(window.style.zIndex)) {
                counter = (parseInt(window.style.zIndex) + 1)
            }
        }
        return counter.toString()
    }

    // Moves windows
    // Created by Interactjs.io
    interact('.draggable').draggable({
        listeners: {
            start (event) {
            // console.log(event.type, event.target)
            // console.log(event.target.id)
            const newZ = setZ()
            event.target.style.zIndex = newZ
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

}

