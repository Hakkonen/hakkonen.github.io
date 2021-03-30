import elFactory from "../functions/elementFactory"
import { folio } from "../modules/Folio"
import { projects } from "../modules/Projects"
import CircleType from "circletype"
import travel1 from "../images/travel1.jpg"

export const main = () => {
    // Main page
    const main = elFactory("div", {id: "main", class: "main"})
    const mainLeft = elFactory("div", {id: "main__left", class: "main__left"})
    const mainRight = elFactory("div", {id: "main__right", class: "main__right"})

    const mainHeader = elFactory("div", {class: "main__header"},
        elFactory("div", {class: "main__header--web"}, "WEB"),
        elFactory("div", {class: "main__header--dev"}, "DEV"),
        elFactory("div", {class: "main__header--and"}, "&"),
        elFactory("div", {class: "main__header--photo"}, "PHOTO"),
        elFactory("div", {class: "main__header--graphy"}, "GRAPHY"),
    )
    const mainHero = elFactory("div", {class: "main__hero"},
        elFactory("img", {src: travel1})
    )
    const subHeader = elFactory("div", {class: "sub-header"},
        elFactory("span", {class: "sub-header__text"}, "Jayden is a photographer and front-end web developer based in Melbourne, Australia. With a keen eye for design which is carried through his multi-disciplinary interests, he's always up for a chat about a project you would like developed, or even to just say hi.")
    )
    const showMeMore = elFactory("div", {class: "main__more"},
        elFactory("span", {}, "Show me more...")
    )

    // Circular text element
    // Spinning function on Window.load in main
    const circularText = elFactory("div", {id: "circle-text", class: "circular-text", style: "opacity: 0"}, `Jayden "JS is the easy part" Reynolds`)
    let radius = 0
    window.innerHeight > window.innerWidth ? radius = 80 : radius = 135

    setTimeout(() => {
        const circleType = new CircleType(document.getElementById("circle-text"))
        circleType.radius(radius)
        // Delaying circle function by 300ms seems to fix off-center rotation
        // Opacity defaults at 0 so that the page has time to load circle func.
        document.getElementById("circle-text").style.opacity = "1"
    }, [300])

    // More button / Show folio
    showMeMore.addEventListener("click", () => {
        // Fades out element
        const main = document.getElementById("main")
        main.style.transition = ".3s all"
        main.style.opacity = "1"
        main.style.opacity = "0"
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.getElementById("root").removeChild(main)
            document.getElementById("root").appendChild(folio(projects))
            setTimeout(() => {
                document.getElementById("folio").style.opacity = 1
            }, [50])
        }, [500])
    })

    mainLeft.appendChild(mainHeader)
    mainLeft.appendChild(showMeMore)
    mainRight.appendChild(mainHero)
    mainRight.appendChild(subHeader)
    main.appendChild(mainLeft)
    main.appendChild(mainRight)
    main.appendChild(circularText)

    return (
        main
    )
}
