import { projects } from "./projects"
import { about } from "./about"
import { navbar } from "./nav"
import { technologies } from "./technologies.js"
import { person } from "./person.js"
import { burger } from "./burger"
import { burgerMenu } from "./burgerMenu"
import { qs } from "./dom_helper"
import { ce, makeElement } from "./dom_helper"
import "../css/index.css"
import "../css/about.scss"
import { fade } from "./fade.js"
import { waveSVG } from "./waveSVG"
import "../css/container.scss"
// import "../aboutAside.css"
import "../css/oliveLeaf.css"

import "../css/uploader.scss"
import "../css/sidebar.scss"
import "../css/nav.scss"
import "../css/mainContent.scss"

import "../css/waveSVG.css"

const sidebar = qs(".sidebar")[0]
const main = qs(".main-content")[0]

const loadApp = () => {
  navbar(sidebar)
  waveSVG(sidebar)

  ce("div", "title", sidebar, {innerText: "Mick Roth"})
  ce("div", "position", sidebar, {innerText: "software engineer"})

  let container = qs(".container")
  console.log(container[0])

  about(main)
}
loadApp()

// burger()
// burgerMenu()
