function windowMaker(
    windowID, 
    headerText = null, 
    subHeaderText = null,
    stackIcons = [],
    mainImage = null,
    subHeader = null,
    mainText = null
    ) {
    // Anchor to screen id
    const screen = document.getElementById("screen")

    // Create window element
    const windowElement = document.createElement("div")
    windowElement.setAttribute("class", "window")
    windowElement.setAttribute("id", windowID)
    windowElement.setAttribute("style", "top: 20%; left: 15%;")

    // opt: Create header element
    if(headerText) {
        const headerContainer = document.createElement("div")
        headerContainer.setAttribute("class", "window-section")
        const headerElement = document.createElement("h1")
        const headerElementText = document.createTextNode(`${headerText}`)
    
        headerElement.appendChild(headerElementText)
        headerContainer.appendChild(headerElement)

        // opt: Create subheader element
        if(subHeaderText) {
            const subHeaderElement = document.createElement("h2")
            const subHeaderElementText = document.createTextNode(
                `${subHeaderText}`
                )
            subHeaderElement.appendChild(subHeaderElementText)
            headerContainer.appendChild(subHeaderElement)
        }

        windowElement.appendChild(headerContainer)
    }

    // opt: Create stack icon elements
    if(stackIcons.length > 0) {
        const stackIconContainer = document.createElement("div")
        stackIconContainer.setAttribute("class", "stack-icons")
        for(const icon of stackIcons) {
            const iconImage = document.createElement("img")
            iconImage.setAttribute("src", `${icon}`)
            iconImage.setAttribute("class", "stack-icon")
            stackIconContainer.appendChild(iconImage)
        }

        windowElement.appendChild(stackIconContainer)
    }

    // opt: Add main image
    if(mainImage) {
        const mainImageContainer = document.createElement("div")
        const mainImageElement = document.createElement("img")
        mainImageElement.setAttribute("src", `${mainImage}`)
        mainImageElement.setAttribute("class", "main-image")

        mainImageContainer.append(mainImageElement)
        windowElement.appendChild(mainImageContainer)
    }

    // opt: Create subheader
    if(subHeader) {
        const subHeaderContainer = document.createElement("div")
        subHeaderContainer.setAttribute("class", "subheader")
        const subHeaderElement = document.createElement("h1")
        const subHeaderElementText = document.createTextNode(`${subHeader}`)

        subHeaderElement.appendChild(subHeaderElementText)
        subHeaderContainer.appendChild(subHeaderElement)

        windowElement.appendChild(subHeaderContainer)
    }

    // opt: Create main text body
    if(mainText) {
        const maintTextContainer = document.createElement("div")
        maintTextContainer.setAttribute("class", "main-text")
        const maintTextElement = document.createElement("p")
        const mainTextElementText = document.createTextNode(`${mainText}`)

        maintTextElement.appendChild(mainTextElementText)
        maintTextContainer.appendChild(maintTextElement)

        windowElement.appendChild(maintTextContainer)
    }

    // Append window to main div
    screen.appendChild(windowElement)
}

export { windowMaker }