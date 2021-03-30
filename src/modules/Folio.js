import elFactory from "../functions/elementFactory"

export const folio = (projects) => {
    // Project indexes
    // Sets default project to index 0 of imported folio object
    let currentProject = 0
    const projectCount = projects.length
    
    // Folio page
    // Creates left and right page divisions
    const folio = elFactory("div", {id: "folio", class: "folio"})
    const folioLeft = elFactory("div", {id: "folio__left", class: "folio__left"})
    const folioRight = elFactory("div", {id: "folio__right", class: "folio__right"})

    // Left side
    // Contains folio image and next/prev selectors
    const heroImage = elFactory("div", {class: "folio__hero"},
        // Appends image linked from object
        elFactory("img", {id: "hero-image", src: projects[currentProject].image})
    )
    // Image onclick listener for project link
    heroImage.addEventListener("click", () => {
        window.open(projects[currentProject].url);
    })
    // Creates folio selector div below
    const projectSelector = elFactory("div", {id: "project-selector", class: "folio__project-selector"})
    const projectSelectorPage = elFactory("div", {class: "project-selector__page"},
        elFactory("span", {id: "current-project"}, `0${currentProject + 1}`),
        elFactory("span", {style: "padding: 0 1ch 0 1ch"}, " / "),
        elFactory("span", {id: "total-projects"}, `0${projectCount}`),
    )
    const projectSelectorNav = elFactory("div", {class: "project-selector__nav"}, 
        elFactory("span", {id: "prev", class: "prev"}, "prev"),
        elFactory("span", {style: "padding: 0 1ch 0 1ch"}, " / "),
        elFactory("span", {id: "next", class: "next"}, "next")
    )

    projectSelector.appendChild(projectSelectorNav)
    projectSelector.appendChild(projectSelectorPage)

    folioLeft.appendChild(heroImage)
    folioLeft.appendChild(projectSelector)

    // Right side
    const heroHeader = elFactory("div", {class: "folio__header"},
        elFactory("span", {id: "hero-header-text"}, projects[currentProject].header)
    )
    // Header onclick listener for project link
    heroHeader.addEventListener("click", () => {
        window.open(projects[currentProject].url);
    })
    const heroText = elFactory("div", {class: "folio__text"},
        elFactory("span", {id: "hero-text"})
    )
    // Applies folio object text to innerHTML
    setTimeout(() => {
        document.getElementById("hero-text").innerHTML = projects[currentProject].text
    })

    // Selector logic
    setTimeout(() => {
        const nextButton = document.getElementById("next")
        const prevButton = document.getElementById("prev")

        function refreshDOM() {
            const heroImageEl = document.getElementById("hero-image")
            heroImageEl.src = projects[currentProject].image

            const heroHeaderEl = document.getElementById("hero-header-text")
            heroHeaderEl.innerHTML = projects[currentProject].header

            const heroTextEl = document.getElementById("hero-text")
            heroTextEl.innerHTML = projects[currentProject].text

            const currentProjectEl = document.getElementById("current-project")
            currentProjectEl.innerHTML = `0${currentProject + 1}`
        }
    
        nextButton.addEventListener("click", () => {
            currentProject = (currentProject + 1) % projectCount
            refreshDOM()
        })

        prevButton.addEventListener("click", () => {
            if(currentProject > 0) {
                currentProject -= 1
            } else {
                currentProject = projectCount - 1
            }
            refreshDOM()
        })
    }, [1000])

    folioRight.appendChild(heroHeader)
    folioRight.appendChild(heroText)

    folio.appendChild(folioLeft)
    folio.appendChild(folioRight)

    return (
        folio
    )
}