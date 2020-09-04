export function windowMover(selectedWindow, event) {
    if (event.offsetX > 5 && event.offsetX < (selectedWindow.offsetWidth - 5)) {
        console.loge("edge")
        
    } else {
        console.log(selectedWindow)
        console.log(event, selectedWindow.offsetWidth)
        
    }
}