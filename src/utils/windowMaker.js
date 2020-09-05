function windowMaker(
    windowID, // ID for element
    headerText = null, // Optional: <h1> Header text
    subHeaderText = null, // Optional: <h2> Subheader text
    stackIcons = null, // Optional: Stack Icons
    // Input as array: ["src", "src"] or object { "src": "link", "src": "link" }
    mainImage = null, // Optional: Hero image
    subHeader = null, // Optional: <h1> Subheader
    mainText = null // Optional: Main <p> text body
    ) {

    // Create window element
    const windowElement = document.createElement("div")
    windowElement.setAttribute("class", "window draggable")
    windowElement.setAttribute("id", windowID)
    windowElement.style.top = `${Math.random() * 50}%`
    windowElement.style.left = `${Math.random() * 40}%`

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
            subHeaderElement.setAttribute("id", `${windowID}-subheader`)
            // Allows for insertion of link tags in subheader text
            if(/<a/g.test(subHeaderText)) {
                subHeaderElement.insertAdjacentHTML("beforeend", 
                    `${subHeaderText}`
                )
            } else {
                const subHeaderElementText = document.createTextNode(
                    `${subHeaderText}`
                    )
                subHeaderElement.appendChild(subHeaderElementText)
            }
            headerContainer.appendChild(subHeaderElement)
        }

        windowElement.appendChild(headerContainer)
    }

    // opt: Create stack icon elements
    if(stackIcons) {
        const stackIconContainer = document.createElement("div")
        stackIconContainer.setAttribute("class", "stack-icons")
    
        // If an array is put through, render icons
        // If an object is put through, render icons with links
        if(Array.isArray(stackIcons)) {
            for(const icon of stackIcons) {
                // For every icon source create img wrapper
                const iconImage = document.createElement("img")
                iconImage.setAttribute("src", `${icon}`)
                iconImage.setAttribute("class", "stack-icon")
                // Append img wrapper to div element
                stackIconContainer.appendChild(iconImage)
            }
        } else if (typeof stackIcons === "object") {
            for(const icon in stackIcons) {
                // Create <a> wrapper
                const imageLink = document.createElement("a")
                imageLink.setAttribute("href", `${stackIcons[icon]}`)
                imageLink.setAttribute("target", "_blank")
                // Source image
                const iconImage = document.createElement("img")
                iconImage.setAttribute("src", `${icon}`)
                iconImage.setAttribute("class", "stack-icon")
                // Append wrapped image
                imageLink.appendChild(iconImage)
                stackIconContainer.appendChild(imageLink)
            }
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
    return windowElement
}

export { windowMaker }