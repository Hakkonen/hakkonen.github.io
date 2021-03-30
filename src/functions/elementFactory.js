const elFactory = (tag, attributes, ...children) => {
    const el = document.createElement(tag)

    for(const key in attributes) {
        el.setAttribute(key, attributes[key])
    }

    children.forEach(child => {
        if(typeof child === "string") {
            el.appendChild(document.createTextNode(child))
        } else {
            el.appendChild(child)
        }
    })

    return el
}

// Usage
// const hello = elFactory(
//     "div",
//     { class: "test "},
//     elFactory("p", {},  "Hello world!"),
//     "test"
// )

export default elFactory
