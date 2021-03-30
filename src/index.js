import "./style.scss"
import App from "./modules/App"

import elFactory from "./functions/elementFactory"

// Set root ID
let root = document.getElementById("root")

// Attach each element of App
App().forEach(child => {
    root.appendChild(child)
})

