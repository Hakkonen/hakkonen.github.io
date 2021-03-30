import elFactory from "../functions/elementFactory"
import { main } from "../modules/Main"
import { folio } from "../modules/Folio"
import { projects } from "../modules/Projects"
import { contact } from "../modules/MenuList"
import { social } from "../modules/MenuList"

export const menu = () => {
    // Menu bar
    const menu = elFactory("div", {id: "menu", class: "menu"},
        elFactory("div", {class: "menu__left"}),
        elFactory("div", {class: "menu__center"},
            elFactory("span", {id: "menu__logo", class: "menu__logo"}, "jayden reynolds"),
        ),
        elFactory("div", {class: "menu__right"},
            elFactory("span", {id: "menu__folio", class: "menu__folio"}, "folio"),
            elFactory("span", {id: "menu__social", class: "menu__social"}, "social"),
            elFactory("span", {id: "menu__contact", class: "menu__contact"}, "contact"),
        )
    )

    // Menu reload main
    setTimeout(() => {
        const menuButton = document.getElementById("menu__logo")
        menuButton.addEventListener("click", () => {
            const root = document.getElementById("root")
            if(document.getElementById("folio")) {
                const childNode = document.getElementById("folio")
                childNode.style.opacity = 0
                setTimeout(() => {
                    root.removeChild(childNode)
                    root.appendChild(main())
                    setTimeout(() => {
                        document.getElementById("main").style.opacity = 1
                    }, [50])
                }, [1000])
            }
        })

        const folioButton = document.getElementById("menu__folio")
        folioButton.addEventListener("click", () => {
            const root = document.getElementById("root")
            if(document.getElementById("main")) {
                const childNode = document.getElementById("main")
                childNode.style.opacity = 0
                setTimeout(() => {
                    root.removeChild(childNode)
                    root.appendChild(folio(projects))
                    setTimeout(() => {
                        document.getElementById("folio").style.opacity = 1
                    }, [50])
                }, [1000])
            }
        })

        // Social logic
        const socialButton = document.getElementById("menu__social")
        socialButton.addEventListener("click", () => {
            const root = document.getElementById("root")
            if(!document.getElementById("social-page")) {
                root.appendChild(social())
                setTimeout(() => {
                    document.getElementById("social-page").style.height = "27ch"
                    document.getElementById("social-item-one").style.padding = "1ch 0 1ch 5%"
                    document.getElementById("social-item-one").style.borderBottom = "1px solid white"
                    document.getElementById("social-item-two").style.padding = "1ch 0 1ch 5%"
                }, [50])
            } else {
                document.getElementById("social-page").style.height = ".5vh"
                setTimeout(() => {
                    document.getElementById("social-item-one").style.padding = ".5ch 0 0 5%"
                    document.getElementById("social-item-one").style.borderBottom = "none"
                    document.getElementById("social-item-two").style.padding = ".5ch 0 0 5%"
                    root.removeChild(document.getElementById("social-page"))
                }, [300])
            }
        })

        // Contact logic
        const contactButton = document.getElementById("menu__contact")
        contactButton.addEventListener("click", () => {
            const root = document.getElementById("root")
            if(!document.getElementById("contact-page")) {
                root.appendChild(contact())
                setTimeout(() => {
                    document.getElementById("contact-page").style.height = "13.7ch"
                    document.getElementById("contact-item-one").style.padding = "1ch 0 1ch 5%"
                    // document.getElementById("contact-item-two").style.padding = "1ch 0 1ch 5%"
                }, [50])
            } else {
                document.getElementById("contact-page").style.height = ".5vh"
                setTimeout(() => {
                    document.getElementById("contact-item-one").style.padding = ".5ch 0 0 5%"
                    // document.getElementById("contact-item-two").style.padding = "0 .5ch 0 5%"
                    root.removeChild(document.getElementById("contact-page"))
                }, [300])
            }
        })
    }, [1000])

    return (
        menu
    )
}