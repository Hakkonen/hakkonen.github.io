export function resizeRight(e) {
    let mousePosition = e.x
    panel.style.width = parseInt(mousePosition - panel.offsetLeft) + "px"
}

let oldX
let oldWidth
function resizeLeft(e) {
    let mousePosition = e.x
    panel.style.left = mousePosition + "px"
    panel.style.width = oldWidth - (mousePosition - oldX) + "px"
}

function resizeBottom(e) {
    let mousePosition = e.x
    panel.style.height = parseInt(mousePosition)
}

function resizeWindowListener(element) {
    // Window drag resize
    const borderSize = 4
    
    // Mousedown listener
    panel.addEventListener("mousedown", function(e) {
        // Define elements x/y dimensions
        const elementWidth = element.offsetWidth
        const elementHeight = element.offsetHeight
        // Define borders by side
        if(e.offsetX > (elementWidth - 10)) {
            document.addEventListener("mousemove", resizeRight, false)

        } else if (e.offsetX < borderSize) {
            oldX = e.x
            oldWidth = element.offsetWidth
            document.addEventListener("mousemove", resizeLeft, false)
            
        } else if (e.offsetY > (elementHeight - 10)) {
            console.log(e.y + " bottom border") 

        } else if (e.offsetY < borderSize ) {
            console.log(e.x + " top border")

        }
    }, false)

    // Mouseup end function
    panel.addEventListener("mouseup", function() {
        document.removeEventListener("mousemove", resizeRight, false)
    }, false)
    panel.addEventListener("mouseup", function() {
        document.removeEventListener("mousemove", resizeLeft, false)
    }, false)
    panel.addEventListener("mouseup", function() {
        document.removeEventListener("mousemove", resizeRight, false)
    }, false)
    panel.addEventListener("mouseup", function() {
        document.removeEventListener("mousemove", resizeRight, false)
    }, false)
}