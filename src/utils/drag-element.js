function dragElement(element) {
    // 1. Init x/y coords
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0

    function dragMouseDown(e) {
        e = e || window.event
        e.preventDefault()
        // Get mouse position on click
        pos3 = e.clientX
        pos4 = e.clientY
        document.onmouseup = closeDragElement
        // Call drag function whenever mouse moves
        document.onmousemove = elementDrag
    }

    function elementDrag(e) {
        e = e || window.event
        e.preventDefault()
        // Calculate new cursor position
        pos1 = pos3 - e.clientX 
        pos2 = pos4 - e.clientY
        pos3 = e.clientX
        pos4 = e.clientY
        // Set the element's new positon
        element.target.style.top = (element.target.offsetTop - pos2) + "px"
        element.target.style.left = (element.target.offsetLeft - pos1) + "px"
    }

    function closeDragElement() {
        document.onmouseup = null
        document.onmousemove = null
    }
    dragMouseDown(element)
}
export { dragElement }