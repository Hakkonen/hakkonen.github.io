import web0 from "../images/web0.png"
import web1 from "../images/web1.png"
import web2 from "../images/web2.png"
import web3 from "../images/web3.png"

export const projects = [
    {
        image: web0,
        header: "Web Folio",
        url: `https://www.jaydenreynolds.com`,
        text: `
        <h3>Stack — ES6, Webpack 4 & SCSS.</h3>
        <p>
        This webpage folio was created entirely with JS and SCSS. The only HTML is a boilerplate file with a root ID div to populate the DOM from. An element constructor is the foundation of the JS DOM manipulation, along with ES6 modules via Webpack to help manage code distribution. In order to help understand the move towards new web frameworks such as React, the website code is created in a manner that replicates the structure of a React app. An App.js returns the main components, such as the splash page, and folio pages, and updates them according to page selection.
        </p>
        <p>
        While it has been a good learning experience to try and replicate the functionality of a framework such as React, or Vue, it has vindicated the ease and value of simply starting a project with an NPM pull such as "create-react-app". And in fact, the biggest difficulty with project has not been in creating an ES6 framework from scratch, but in managing the front-end elements computation with the various browsers that render them. As it turns out: a vast majority of functionality is not cross-browser compatible, for exmaple a small bug (or "feature" according to Apple) can compute page 100% page height entirely differently.
        </p>
        <p>
        The most important lesson I have learned from creating this website from scratch is to KISS. Keep It Stupid Simple. Users know how to scroll up and down, users understand traditional page layouts. Developing new User Experiences is extremely fun, but has considerable drawbacks in useability, as well as cross-browser compatibility. In in end it would seem that minimalism will always trump complexity in the wild west of web development.
        </p>
        `
    },
    {
        image: web1,
        header: "Bill Buster",
        url: `https://bill-buster.netlify.app`,
        text: `
        <h3>Stack — ES6, React & SCSS.</h3>
        <p>
        Bill Buster is a web app that utilises an algorithm to split the daily cost of a bill between present housemates. While most bills are simple enough to calculate: simply divide the cost between the number of housemates, things get complicated quickly when there are people moving in, out, or simply away for chunks of the bill period.
        </p>
        <p>
        The stack primarily utilised is React, along with React Hooks for state control. Bill Buster's algorithm works by calculating the bill's per diem, and then dividing that by the number of housemates present on the day, before iterating days - 1 over each present housemate until they have 0 days present.
        </p>
        `
    },
    {
        image: web2,
        header: "Simple Note",
        url: `https://simple-note-react.herokuapp.com`,
        text: `
        <h3>Stack — ES6 & React.</h3>
        <p>
        Simple Note was created as a refresher to React. It utilises React Hooks to demonstrate the ease of which state can be controlled within the framework. The notes' state is volatile because it is currently front-end only, though a Node.JS back end could compliment the web app and allow it to be used beyond demonstrative purposes. 
        </p>
        `
    },
    {
        image: web3,
        header: "Word Counter",
        url: `https://word-counter-by-jayden.herokuapp.com`,
        text: `
        <h3>Stack — ES6 & React.</h3>
        <p>
        This web app was created solely to demonstrate the ability to create an algorithm that parses through a given text, in this case it returns the most commonly found words in the original Star Wars manuscript.
        </p>
        `
    }
]