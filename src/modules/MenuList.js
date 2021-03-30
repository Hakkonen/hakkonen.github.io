import elFactory from "../functions/elementFactory"

export const contact = () => {
    const contactPage = elFactory("div", {id: "contact-page", class: "contact-page"})

    const rowOne = elFactory("div", {class: "contact-page__row"},
        elFactory("div", {id: "contact-item-one", class: "contact-page__row__link"}, 
            elFactory("a", {href: "mailto:jayden@jaydenreynolds.com"}, "email")
        )
    )

    const rowTwo = elFactory("div", {class: "contact-page__row"},
        elFactory("div", {id: "contact-item-two", class: "contact-page__row__link",}, 
            elFactory("a", {href: "https://www.instagram.com/dasistjayden/", target: "_blank"}, "instagram")
        )
    )

    contactPage.appendChild(rowOne)
    // contactPage.appendChild(rowTwo)

    return (
        contactPage
    )
}

export const social = () => {
    const contactPage = elFactory("div", {id: "social-page", class: "contact-page"})

    const rowOne = elFactory("div", {class: "contact-page__row"},
        elFactory("div", {id: "social-item-one", class: "contact-page__row__link"}, 
            elFactory("a", {href: "https://www.instagram.com/dasistjayden/", target: "_blank"}, "instagram")
        )
    )

    const rowTwo = elFactory("div", {class: "contact-page__row"},
        elFactory("div", {id: "social-item-two", class: "contact-page__row__link",}, 
            elFactory("a", {href: "https://github.com/Hakkonen/", target: "_blank"}, "github")
        )
    )

    contactPage.appendChild(rowOne)
    contactPage.appendChild(rowTwo)

    return (
        contactPage
    )
}