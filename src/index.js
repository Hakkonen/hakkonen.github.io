import { dragElement } from "./utils/drag-element.js"
import "./main.scss"

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